var c = document.getElementById("gameCanvas");
var creatureWarrior = document.getElementById("PWarrior");
var ctx = c.getContext("2d");

var creatureWarriorX = 0;
var creatureWarriorY = 0;

var creatureRanger = document.getElementById("Ranger");
var creatureRangerX = 0;
var creatureRangerY = 100;

var creatureMage = document.getElementById("Mage");
var creatureMageX = 0;
var creatureMageY = 200;

var creatureFellBat = document.getElementById("FellBat");
var creatureFellBatX = 1500;
var creatureFellBatY = 400;

var creatureRedGolumn = document.getElementById("RedGolumn");
var creatureRedGolumnX = 1500;
var creatureRedGolumnY = 300;

var creatureNatureWisp = document.getElementById("NatureWisp");
var creatureNatureWispX = 1500;
var creatureNatureWispY = 500;
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

testMapCreation(tileX, tileY);

//Characters(WarriorX, WarriorY, RangerX, RangerY, MageX, MageY, RedGolumnX, RedGolumnY, FellBatX, FellBatY, NatureWispX, NatureWispY);

TurnOrder();
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
	currentTurn = Math.floor((Math.random() * 5) + 0);
	console.log("it is " + classes[currentTurn] + " turn");
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
		console.log(currentTurn);
		creatureReset();
		if(currentTurnName == "Warrior")
		{
			creatureWarriorX -= 100;
			creatureWarrior.style.left = creatureWarriorX + "px";			
		}
		else if(currentTurnName == "RedGolumn")
		{
			creatureRedGolumnX -= 100;
			creatureRedGolumn.style.left = creatureRedGolumnX + "px";
		}
		else if(currentTurnName == "Ranger")
		{
			creatureRangerX -= 100;
			creatureRanger.style.left = creatureRangerX + "px";
		}
		else if(currentTurnName == "NatureWisp")
		{
			creatureNatureWispX -= 100;
			creatureNatureWisp.style.left = creatureNatureWispX + "px";
		}
		else if(currentTurnName == "Mage")
		{
			creatureMageX -= 100;
			creatureMage.style.left = creatureMageX + "px";
		}
		else if(currentTurnName == "FellBat")
		{
			creatureFellBatX -= 100;
			creatureFellBat.style.left = creatureFellBatX + "px";
		}
		creaturePosition();
	}
	if(rightPressed == true)
	{
		creatureReset();
		if(currentTurnName == "Warrior")
		{
			creatureWarriorX += 100;
			creatureWarrior.style.left = creatureWarriorX + "px";
		}
		else if(currentTurnName == "RedGolumn")
		{
			creatureRedGolumnX += 100;
			creatureRedGolumn.style.left = creatureRedGolumnX + "px";
		}
		else if(currentTurnName == "Ranger")
		{
			creatureRangerX += 100;
			creatureRanger.style.left = creatureRangerX + "px";
		}
		else if(currentTurnName == "NatureWisp")
		{
			creatureNatureWispX += 100;
			creatureNatureWisp.style.left = creatureNatureWispX + "px";
		}
		else if(currentTurnName == "Mage")
		{
			creatureMageX += 100;
			creatureMage.style.left = creatureMageX + "px";
		}
		else if(currentTurnName == "FellBat")
		{
			creatureFellBatX += 100;
			creatureFellBat.style.left = creatureFellBatX + "px";
		}
		creaturePosition();
	}
	if(upPressed == true)
	{
		creatureReset();
		if(currentTurnName == "Warrior")
		{
			creatureWarriorY -= 100;
			creatureWarrior.style.top = creatureWarriorY + "px";
		}
		else if(currentTurnName == "RedGolumn")
		{
			creatureRedGolumnY -= 100;
			creatureRedGolumn.style.top = creatureRedGolumnY + "px";
		}
		else if(currentTurnName == "Ranger")
		{
			creatureRangerY -= 100;
			creatureRanger.style.top = creatureRangerY + "px";
		}
		else if(currentTurnName == "NatureWisp")
		{
			creatureNatureWispY -= 100;
			creatureNatureWisp.style.top = creatureNatureWispY + "px";
		}
		else if(currentTurnName == "Mage")
		{
			creatureMageY -= 100;
			creatureMage.style.top = creatureMageY + "px";
		}
		else if(currentTurnName == "FellBat")
		{
			creatureFellBatY -= 100;
			creatureFellBat.style.top = creatureFellBatY + "px";
		}
		creaturePosition();
	}
	if(downPressed == true)
	{	
		creatureReset();
		if(currentTurnName == "Warrior")
		{
			creatureWarriorY += 100;
			creatureWarrior.style.top = creatureWarriorY + "px";
		}
		else if(currentTurnName == "RedGolumn")
		{
			creatureRedGolumnY += 100;
			creatureRedGolumn.style.top = creatureRedGolumnY + "px";
		}
		else if(currentTurnName == "Ranger")
		{
			creatureRangerY += 100;
			creatureRanger.style.top = creatureRangerY + "px";
		}
		else if(currentTurnName == "NatureWisp")
		{
			creatureNatureWispY += 100;
			creatureNatureWisp.style.top = creatureNatureWispY + "px";
		}
		else if(currentTurnName == "Mage")
		{
			creatureMageY += 100;
			creatureMage.style.top = creatureMageY + "px";
		}
		else if(currentTurnName == "FellBat")
		{
			creatureFellBatY += 100;
			creatureFellBat.style.top = creatureFellBatY + "px";
		}
		creaturePosition();
		console.log("This is mage x" + creatureMageX);
		console.log("This is mage y" + creatureMageY);
	}
	
}	
	//ctx.drawImage(Warrior, WarriorX, WarriorY, 90, 90);
function testMapCreation(tileX, tileY)
{
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
	CharTracker[creatureWarriorY / 100][creatureWarriorX / 100] = "Warrior";
	CharTracker[creatureRangerY / 100][creatureRangerX / 100] = "Ranger";
	CharTracker[creatureMageY / 100][creatureMageX / 100] = "Mage";
	CharTracker[creatureFellBatY / 100][creatureFellBatX / 100] = "FellBat";
	CharTracker[creatureRedGolumnY / 100][creatureRedGolumnX / 100] = "RedGolumn";
	CharTracker[creatureNatureWispY / 100][creatureNatureWispX / 100] = "NatureWisp";
	console.log(CharTracker[0][1]);
	console.log(CharTracker[0][0]);
	console.log(CharTracker[1][0]);
}
function creatureReset()
{
	CharTracker[creatureWarriorY / 100][creatureWarriorX / 100] = "";
	CharTracker[creatureRangerY / 100][creatureRangerX / 100] = "";
	CharTracker[creatureMageY / 100][creatureMageX / 100] = "";
	CharTracker[creatureFellBatY / 100][creatureFellBatX / 100] = "";
	CharTracker[creatureRedGolumnY / 100][creatureRedGolumnX / 100] = "";
	CharTracker[creatureNatureWispY / 100][creatureNatureWispX / 100] = "";
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
		   return this.baseMovement
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
	swipe(caster, enemy)
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
	
var main = new WARRIOR('caster',6,6,6, 30, 6, 6, 6, 6, 6, 6, 6);
main.attackBuff(main);
console.log(main.getMana());

var FellBat = new fellBat('Tim',6,6,6, 6, 6, 6, 6, 6, 6, 6, 6);
//FellBat.magicSmash(FellBat, main);
console.log(main.getHealth());