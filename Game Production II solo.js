var c = document.getElementById("gameCanvas");
var creatureWarrior = document.getElementById("PWarrior");
var ctx = c.getContext("2d");

var creatureWarriorX = 0;
var creatureWarriorY = 0;

var creatureRanger = document.getElementById("Ranger");
var creatureRangerX = 0;
var creatureRangerY = 0; //100

var creatureMage = document.getElementById("Mage");
var creatureMageX = 0;
var creatureMageY = 0;//200

var creatureFellBat = document.getElementById("FellBat");
var creatureFellBatX = 0;//1500
var creatureFellBatY = 0;//400

var creatureRedGolumn = document.getElementById("RedGolumn");
var creatureRedGolumnX = 0;//1500
var creatureRedGolumnY = 0;//300

var creatureNatureWisp = document.getElementById("NatureWisp");
var creatureNatureWispX = 0;//1500
var creatureNatureWispY = 0;//500
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var updateInterval = setInterval(update,16.67);

var Grass = document.getElementById("Grass");
var RedRock = document.getElementById("RedRock");
var Stone = document.getElementById("Stone");

var tileX = 0;
var tileY = 0;

var classes = ["Warrior", "RedGolumn", "Ranger", "NatureWisp","Mage","FellBat"];
var currentTurn;
var currentTurnName;
var map = [
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ]

];
console.log(creatureWarrior.style.top);
var x = 0;//used for navigation of array
var y = 0;
var counter = 98; //to fill screen set to 98
var tilePicker = 3;
var StartClass = "Ranger";
var level = 1;

var CharTracker = [
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ],
    [ , ]
];
CharTrackWarriorY = 0;
CharTrackWarriorX = 0;
CharTracker[CharTrackWarriorY][CharTrackWarriorX] = "Warrior";
CharTrackRangerY = 1;
CharTrackRangerX = 0;
CharTracker[CharTrackRangerY][CharTrackRangerX] = "Ranger";
CharTrackMageY = 2;
CharTrackMageX = 0;
CharTracker[CharTrackMageY][CharTrackMageX] = "Mage";
CharTrackRedGolumnY = 3;
CharTrackRedGolumnX = 15;
CharTracker[CharTrackRedGolumnY][CharTrackRedGolumnX] = "RedGolumn";
CharTrackFellBatY = 4;
CharTrackFellBatX = 15;
CharTracker[CharTrackFellBatY][CharTrackFellBatX] = "FellBat";
CharTrackNatureWispY = 5;
CharTrackNatureWispX = 15;
CharTracker[CharTrackNatureWispY][CharTrackNatureWispX] = "NatureWisp";

var pics = document.getElementById("DuringGame");
var gameUI = document.getElementById("UI");
var personalization = document.getElementById("customization");

mainMenu();//UI will start here
function mainMenu()
{
    personalization.style.display = "none";
    pics.style.display = "none";
    gameUI.style.display = "";
    
    ctx.fillStyle = "Blue";
    ctx.fillRect(75,75, 1500,500);//backdrop for buttons and such
}
function Settings()
{
    personalization.style.display = "";
    gameUI.style.display = "none";
}
//testMapCreation(tileX, tileY);

//Characters(WarriorX, WarriorY, RangerX, RangerY, MageX, MageY, RedGolumnX, RedGolumnY, FellBatX, FellBatY, NatureWispX, NatureWispY);

    currentTurn = Math.floor((Math.random() * 6) + 0);//this starts the turn order randomly in the array
    console.log("it is " + classes[currentTurn] + " turn");
    currentTurnName = classes[currentTurn];

//TurnOrder();
function update()
{
    
    //creatureReset();//this must go first so it can clear the old position of creatures without interferring with the current
    Movement();
    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
    
}
function TurnOrder()
{
    currentTurn++;
    console.log("it is " + classes[currentTurn] + " turn");
    if(currentTurn == 6)
    currentTurn = 0;

    currentTurnName = classes[currentTurn];
}
function onKeyDown(event)
{
    switch(event.keyCode)
    {
        case 65: //A
        leftPressed = true;
        break;
        case 68: //D
        rightPressed = true;
        break;
        case 87: //W
        upPressed = true;
        break;
        case 83: //S
        downPressed = true;
        break;
    }
}
function onKeyUp(event)
{
    switch(event.keyCode)
    {
        case 65: //A
        leftPressed = false;
        break;
        case 68: //D
        rightPressed = false;
        break;
        case 87: //W
        upPressed = false;
        break;
        case 83: //S
        downPressed = false;
        break;
    }
}
function Movement()
{
    
    if(leftPressed == true)
    {        
        creatureReset();
        if(currentTurnName == "Warrior" && creatureWarriorX != 0)
        {
            
            creatureWarriorX -= 100;
            creatureWarrior.style.left = creatureWarriorX + "px";    
            CharTrackWarriorX--;
        }
        else if(currentTurnName == "RedGolumn" && CharTrackRedGolumnX != 0)
        {
            creatureRedGolumnX -= 100;
            creatureRedGolumn.style.left = creatureRedGolumnX + "px";
            CharTrackRedGolumnX--;
        }
        else if(currentTurnName == "Ranger" && creatureRangerX != 0)
        {
            
            creatureRangerX -= 100;
            creatureRanger.style.left = creatureRangerX + "px";
            CharTrackRangerX--;
            
        }
        else if(currentTurnName == "NatureWisp" && CharTrackNatureWispX != 0)//slight bug with naturewisp movement
        {
            creatureNatureWispX -= 100;
            creatureNatureWisp.style.left -= creatureNatureWispX + "px";
            CharTrackNatureWispX--;
        }
        else if(currentTurnName == "Mage" && creatureMageX != 0)
        {
            creatureMageX -= 100;
            creatureMage.style.left = creatureMageX + "px";
            CharTrackMageX--;
        }
        else if(currentTurnName == "FellBat" && CharTrackFellBatX != 0)
        {
            creatureFellBatX -= 100;
            creatureFellBat.style.left = creatureFellBatX + "px";
            CharTrackFellBatX--;
        }
        creaturePosition();
    }
    if(rightPressed == true)
    {
        creatureReset();
        if(currentTurnName == "Warrior" && CharTrackWarriorX != 15)
        {
            
            creatureWarriorX += 100;
            creatureWarrior.style.left = creatureWarriorX + "px";
            CharTrackWarriorX++;
            
        }
        else if(currentTurnName == "RedGolumn" && CharTrackRedGolumnX != 15)
        {
            creatureRedGolumnX += 100;
            creatureRedGolumn.style.left = creatureRedGolumnX + "px";
            CharTrackRedGolumnX++;
        }
        else if(currentTurnName == "Ranger" && CharTrackRangerX != 15)
        {
            creatureRangerX += 100;
            creatureRanger.style.left = creatureRangerX + "px";
            CharTrackRangerX++;
            
        }
        else if(currentTurnName == "NatureWisp" && CharTrackNatureWispX != 15)
        {
            creatureNatureWispX += 100;
            creatureNatureWisp.style.left = creatureNatureWispX + "px";
            CharTrackNatureWispX++;
        }
        else if(currentTurnName == "Mage" && CharTrackMageX != 15)
        {
            creatureMageX += 100;
            creatureMage.style.left = creatureMageX + "px";
            CharTrackMageX++;
        }
        else if(currentTurnName == "FellBat" && CharTrackFellBatX != 15)
        {
            creatureFellBatX += 100;
            creatureFellBat.style.left = creatureFellBatX + "px";
            CharTrackFellBatX++;
        }
        creaturePosition();
    }
    if(upPressed == true)
    {
        creatureReset();
        if(currentTurnName == "Warrior" && CharTrackWarriorY != 0)
        {
            
            creatureWarriorY -= 100;
            creatureWarrior.style.top = creatureWarriorY + "px";
            CharTrackWarriorY--;
            
        }
        else if(currentTurnName == "RedGolumn" && CharTrackRedGolumnY != 0)
        {
            creatureRedGolumnY -= 100;
            creatureRedGolumn.style.top = creatureRedGolumnY + "px";
            CharTrackRedGolumnY--;
        }
        else if(currentTurnName == "Ranger" && CharTrackRangerY != 0)
        {        
            creatureRangerY -= 100;
            creatureRanger.style.top = creatureRangerY + "px";
            CharTrackRangerY--;
        }
        else if(currentTurnName == "NatureWisp" && CharTrackNatureWispY != 0)
        {
            creatureNatureWispY -= 100;
            creatureNatureWisp.style.top = creatureNatureWispY + "px";
            CharTrackNatureWispY--;
        }
        else if(currentTurnName == "Mage" && CharTrackMageY != 0)
        {
            creatureMageY -= 100;
            creatureMage.style.top = creatureMageY + "px";
            CharTrackMageY--;
        }
        else if(currentTurnName == "FellBat" && CharTrackFellBatY != 0)
        {
            creatureFellBatY -= 100;
            creatureFellBat.style.top = creatureFellBatY + "px";
            CharTrackFellBatY--;
        }
        creaturePosition();
    }
    if(downPressed == true)
    {    
        creatureReset();
        if(currentTurnName == "Warrior" && CharTrackWarriorY != 5)
        {
            
            creatureWarriorY += 100;
            creatureWarrior.style.top = creatureWarriorY + "px";
            CharTrackWarriorY++;
        }
        else if(currentTurnName == "RedGolumn" && CharTrackRedGolumnY != 5)
        {
            creatureRedGolumnY += 100;
            creatureRedGolumn.style.top = creatureRedGolumnY + "px";
            CharTrackRedGolumnY++;
        }
        else if(currentTurnName == "Ranger" && CharTrackRangerY != 5)
        {
            
            creatureRangerY += 100;
            creatureRanger.style.top = creatureRangerY + "px";
            CharTrackRangerY++;
        }
        else if(currentTurnName == "NatureWisp" && CharTrackNatureWispY != 5)
        {
            creatureNatureWispY += 100;
            creatureNatureWisp.style.top = creatureNatureWispY + "px";
            CharTrackNatureWispY++;
        }
        else if(currentTurnName == "Mage" && CharTrackMageY != 5)
        {
            creatureMageY += 100;
            creatureMage.style.top = creatureMageY + "px";
            CharTrackMageY++;
        }
        else if(currentTurnName == "FellBat" && CharTrackFellBatY != 5)
        {
            creatureFellBatY += 100;
            creatureFellBat.style.top = creatureFellBatY + "px";
            CharTrackFellBatY++;
        }
        creaturePosition();

    }
}    
    //ctx.drawImage(Warrior, WarriorX, WarriorY, 90, 90);
function testMapCreation(tileX, tileY)
{
    console.log(FellBat.getHealth() + " This is FellBat HP after ragingblow");
    pics.style.display = "";
    gameUI.style.display = "none";
    while(counter != 0)
    {
        if(level == 1)
            tilePicker = Math.floor((Math.random() * 5) + 1);
        else
            tilePicker = Math.floor((Math.random() * 3) + 1);
        
        counter--;
        
        if(tilePicker == 3)
        {
            ctx.drawImage(Grass, tileX, tileY, 100, 100);
            map[y][x] = "Grass";    
        }
        else if(tilePicker == 2)
        {
            ctx.drawImage(RedRock, tileX, tileY, 100, 100);
            map[y][x] = "RedRock";        
        }
        else if(tilePicker == 1)
        {
            ctx.drawImage(Stone, tileX, tileY, 100, 100);
            map[y][x] = "Stone";        
        }
        else if(tilePicker > 3 && level == 1)
        {
            if(StartClass == "Warrior")
            {
                ctx.drawImage(RedRock, tileX, tileY, 100, 100);
                map[y][x] = "RedRock";                
            }
            else if(StartClass == "Ranger")
            {
                ctx.drawImage(Grass, tileX, tileY, 100, 100);
                map[y][x] = "Grass";            
            }
            else if(StartClass == "Mage")
            {
                ctx.drawImage(Stone, tileX, tileY, 100, 100);
                map[y][x] = "Stone";
            }
        }
        tileX += 100;
        x++;
        if(tileX == 1600)
        {
            tileX = 0;
            tileY += 100;
        }
        if(x == 16)
        {
            y++;
            x = 0;
        }
    }
}
function creaturePosition()
{
    CharTracker[CharTrackWarriorY][CharTrackWarriorX] = "Warrior";
    CharTracker[CharTrackRangerY][CharTrackRangerX] = "Ranger";
    CharTracker[CharTrackMageY][CharTrackMageX] = "Mage";
    CharTracker[CharTrackRedGolumnY][CharTrackRedGolumnX] = "RedGolumn";
    CharTracker[CharTrackFellBatY][CharTrackFellBatX] = "FellBat";
    CharTracker[CharTrackNatureWispY][CharTrackNatureWispX] = "NatureWisp";
    console.log(CharTracker[0][0]);
    console.log(CharTracker[1][1]);
    console.log(CharTracker[2][2]);
}
function creatureReset()
{
    CharTracker[CharTrackWarriorY][CharTrackWarriorX] = "";
    CharTracker[CharTrackRangerY][CharTrackRangerX] = "";
    CharTracker[CharTrackMageY][CharTrackMageX] = "";
    CharTracker[CharTrackRedGolumnY][CharTrackRedGolumnX] = "";
    CharTracker[CharTrackFellBatY][CharTrackFellBatX] = "";
    CharTracker[CharTrackNatureWispY][CharTrackNatureWispX] = "";
}

function WinLose()
{
    if(Warrior.getHealth() <= 0 && Ranger.getHealth() <= 0 && Mage.getHealth() <= 0)
    {
        console.log("Everyone died you have lost");
    }
    else if(FellBat.getHealth() <= 0 && RedGolumn.getHealth() <= 0 && natureWisp.getHealth() <= 0)
    {
        console.log("Your party has killed all of the enemies in this part of the dungeon you WIN");
    }
}
function combatAbilities()
{
    if(currentTurnName == "Warrior")
    {
        
    }
    else if(currentTurnName == "Ranger")
    {
        
    }
    else if(currentTurnName == "Mage")
    {
        
    }
}
// get and set methods is how you would do it for combat

class playerCharacter {
        
        constructor (name,strength, agility, intelligence, baseHP, baseMana, baseAttack, baseHeadArmour, baseChestArmour, baseLegArmour, baseGauntletArmour, baseMovement, tilePreference) {
            
            this.name = name;
            this.strength = strength;
            this.agility = agility;
            this.intelligence = intelligence;
            this.baseHP = baseHP;
            this.baseMana = baseMana;
            this.baseAttack = baseAttack;
            this.baseHeadArmour = baseHeadArmour;
            this.baseChestArmour = baseChestArmour;
            this.baseLegArmour = baseLegArmour;
            this.baseGauntletArmour = baseGauntletArmour;
            this.baseMovement = baseMovement;
            this.totalArmour = baseChestArmour + baseGauntletArmour + baseHeadArmour + baseLegArmour;
            this.tilePreference = tilePreference;
        }
        
        setName (Name) {
            this.name = Name;
        }
        
        getName () {
            return this.name;
        }
        
        setStrength(str)
        {
            this.strength = str;
        }
        getStrength()
        {
            return this.strength;
        }

        setAgility(agi)
        {
            this.agility = agi;
        }
        getAgility()
        {
            return this.agility;
        }

        setIntelligence(intell)
        {
            this.intelligence = intell;
        }
        getIntelligence()
        {
            return this.intelligence;
        }

        setHP (health) {
            this.baseHP = health;
        }
        
        getHealth () {
            return this.baseHP;
        }
        
        setMana (MP) {
            this.baseMana = MP;
        }
        
        getMana () {
            return this.baseMana;
        }
        
        setAttack (atk) {
            this.baseAttack = atk;
        }
        
        getAttack () {
            return this.baseAttack;
        }
        
        subMana (MP) {
            this.baseMana -= MP;
        }
        
        subHP (health) {
            this.baseHP -= health;
        }
        addHP(health) {
            this.baseHP += health;
        }
        
        addAttack (atk) {
            this.baseAttack += atk;
        }
        subAttack (attack){
            this.baseAttack -= attack;
        }
        
        setTilePreferecnce (tilePref)
        {
            this.tilePref = tilePreference;
        }
        
        getTilePreference ()
        {
            return this.tilePreference;
        }

        getBaseMovement(mve)
        {
           return this.baseMovement;
        }
        
        //creature.combat(enemy.getArmour(), enemny.getHP());
        combat(enemyarmour, enemyhp, casterAttack)
        {   
            
                var sum = casterAttack - enemyarmour;
                enemyhp -= sum;
            
            
        }

        
        statCheck () {
        
            console.log(this.name + this.baseHP + this.baseMana + this.baseHeadArmour + this.baseChestArmour + this.baseLegArmour + this.baseGauntletArmour);
        
        }
    }
    
class WARRIOR extends playerCharacter {
    

    attackBuff (caster) {
        
        caster.subMana(5);
        caster.addAttack(15);        
    }

    ragingBlow(caster, enemy)
    {
        var total = caster.getAttack() + caster.getStrength();
        enemy.subHP(total);
    }
    
    tilePreference(caster)
    {
        if (map[creatureWarriorY / 100][creatureWarriorX / 100] == "RedRock" && caster.getTilePreference() == false)
        {
            caster.setTilePref(true);
            caster.addAttack(3);
        }
        
        else if (map[creatureWarriorY / 100][creatureWarriorX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class RANGER extends playerCharacter
{
    snipe(caster, enemy)
    {
        var total = caster.getAttack() + caster.getAgility();
        enemy.subHP(total);
    }
    callOfTheWild(caster, enemy)
    {
        var total = caster.getAttack() + caster.addAttack(20);
        caster.subMana(10);
        enemy.subHP(total);
    }
    
    tilePreference(caster)
    {
        if (map[creatureRangerY / 100][creatureRangerX / 100] == "Grass" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        
        else if (map[creatureRangerY / 100][creatureRangerX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class MAGE extends playerCharacter
{
    fireball(caster, enemy)
    {
        caster.subMana(20);
        var total = caster.getAttack() + caster.getIntelligence();
        enemy.subHP(total);
    }
    heal(caster, ally)
    {
        caster.subMana(15);
        ally.addHP(20);
    }
    
    tilePreference(caster)
    {
        if (map[creatureMageY / 100][creatureMageX / 100] == "Stone" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        else if (map[creatureMageY / 100][creatureMageX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class natureWisp extends playerCharacter {
    magicSmash(caster, enemy)
    {
        var total =  caster.getAttack();
        enemy.subHP(total);
        caster.subMana(3);
    }
    
    tilePreference(caster)
    {
        if (map[creatureNatureWispY / 100][creatureNatureWispX / 100] == "Grass" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        
        else if (map[creatureNatureWispY / 100][creatureNatureWispX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class redGolumn extends playerCharacter {
    swipe(caster, enemy)
    {
        var total = caster.getStrength() + caster.getAttack();
        enemy.subHP(total);
        caster.subMana(2);
    }
    
    tilePreference(caster)
    {
        if (map[creatureRedGolumnY / 100][creatureRedGolumnX / 100] == "RedRock" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        
        else if (map[creatureRedGolumnY / 100][creatureRedGolumnX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class fellBat extends playerCharacter {
    bite(caster, enemy)
    {
        var total = caster.getStrength() + caster.getAttack();
        enemy.subHP(total);
        caster.subMana(2);
    }
    
    tilePreference(caster)
    {
        if (map[creatureFellBatY / 100][creatureFellBatX / 100] == "Stone" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        
        else if (map[creatureFellBatY / 100][creatureFellBatX / 100] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
    }
}

class dungeonMerchant {
    
}

class item{
    constructor (armourRating, armourName, armourDuribility, buyingPrice, sellingPrice){
        this.armourRating = armourRating;
        this.armourName = armourName;
        this.armourDuribility = armourDurability;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
    }
        
        getArmourRating()
        {
            return this.armourRating;
        }
        
        getHeadArmourName()
        {
            return this.armourName;
        }
        
        setArmourRating(Rating)
        {
            Rating = armourRating;
        }
        
        setArmourName(Name)
        {
            Name = armourName;
        }
        
        getArmourDurability()
        {
            return this.armourDurability;
        }
        
        setArmourDurability(durability)
        {
            durability = armourDurability;
        }
        getBuyingPrice()
        {
            return this.buyingPrice;
        }
        
        getSellingPrice()
        {
            return this.sellingPrice;
        }
        
        setBuyingOruce(buyPrice)
        {
            buyPrice = buyingPrice;
        }
        
        setSellingPrice(sellPrice)
        {
            sellPrice = sellingPrice;
        }
    
}

/*class MONSTER extends playerCharacter {
    
    swipe(caster, enemy)
    {
        var total = caster.getStrength() + caster.getAttack();
        enemy.subHP(total);
        
    }
    magicSmash(caster, enemy)
    {
        var total = caster.getStrength() + caster.getAttack();
        enemy.subHP(total);

    }
}*/
    
var Warrior = new WARRIOR('caster',6,6,6, 30, 6, 6, 6, 6, 6, 6, 6);
var Ranger = new RANGER('thot', 5,5,5, 20, 2, 2, 2, 1, 1, 5, 5);
var Mage = new MAGE('Medive',3, 4, 5,15, 3, 4, 3, 1,3, 3, 3 );
var FellBat = new fellBat('Tim',6,6,6, 6, 6, 6, 6, 6, 6, 6, 6);
var RedGolumn = new redGolumn('moltenGiant', 7,7,7, 35, 4,5,6,4,3,2,1);
var NatureWisp = new natureWisp('Druid', 4,5,4, 20,3,2,3,5,5,5,5);
console.log(FellBat.getHealth() + " Is how much hp FellBat has");
