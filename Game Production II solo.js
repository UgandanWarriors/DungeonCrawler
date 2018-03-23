var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
window.addEventListener("keypress", keyPressed);
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

var Warrior = document.getElementById("Warrior");
var WarriorX = 405;
var WarriorY = 405;

var Ranger = document.getElementById("Ranger");
var RangerX = 205;
var RangerY = 205;

var Mage = document.getElementById("Mage");
var MageX = 605;
var MageY = 605;

var Grass = document.getElementById("Grass");
var RedRock = document.getElementById("RedRock");
var Stone = document.getElementById("Stone");

var RedGolumn = document.getElementById("RedGolumn");
var RedGolumnX = 305;
var RedGolumnY = 305;

var FellBat = document.getElementById("FellBat");
var FellBatX = 505;
var FellBatY = 505;

var NatureWisp = document.getElementById("NatureWisp");
var NatureWispX = 205;
var NatureWispY = 105; 

var tileX = 0;
var tileY = 0;

var classes = ["Warrior", "Ranger", "Mage", "RedGolumn", "FellBat", "NatureBat"];
var randomOrder;
var i = 6;
var p = 0;
var order = [];
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

testMapCreation(tileX, tileY);

Characters(WarriorX, WarriorY, RangerX, RangerY, MageX, MageY, RedGolumnX, RedGolumnY, FellBatX, FellBatY, NatureWispX, NatureWispY);

TurnOrder();
function update()
{
	Movement()
}

function TurnOrder()
{
	while(order.length != 6)
		{
			randomOrder = Math.floor((Math.random() * i - 1) + 1);
			i--;

			order[p] = classes[randomOrder]
			classes[randomOrder] = null;
			p++;
		}
}
function keyPressed(event)
{
	switch(event.keyCode)
	{
		case 65: //A
		leftPressed = true;
		break;
		case 68: 
		rightPressed = true;
		break;
		case 87:
		upPressed = true;
		break;
		case 83: 
		downPressed = true;
		break;
	}
}
function Movement()
{
	if(leftPressed == true && playerX > 0)
	{
		WarriorX -= 100;
		setInterval(Characters, 17);
	}
	if(rightPressed == true && playerX < 1300)
	{
		WarriorX += 100;
	}
	if(upPressed == true && playerY > 0)
	{
		WarriorY -= 100;
	}
	if(downPressed == true && playerY < 700)
	{
		WarriorY += 100;
	}
	
}

function Characters()
{
	
	ctx.drawImage(Warrior, WarriorX, WarriorY, 90, 90);
	ctx.drawImage(Ranger, RangerX, RangerY , 90, 90);
	ctx.drawImage(Mage, MageX, MageY, 90, 90);
	ctx.drawImage(RedGolumn, RedGolumnX, RedGolumnY, 90, 90);
	ctx.drawImage(FellBat, FellBatX, FellBatY, 90, 90);
	ctx.drawImage(NatureWisp, NatureWispX, NatureWispY, 90, 90);
	
}
	
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
			tileX += 100;
			
			y++;
		}
		else if(tilePicker == 2)
		{
			ctx.drawImage(RedRock, tileX, tileY, 100, 100);
			tileX += 100;
			
			y++;
		}
		else if(tilePicker == 1)
		{
			ctx.drawImage(Stone, tileX, tileY, 100, 100);
			tileX += 100;
			
			y++;
		}
		else if(tilePicker > 3 && level == 1)
		{
			if(StartClass == "Warrior")
			ctx.drawImage(RedRock, tileX, tileY, 100, 100);
			else if(StartClass == "Ranger")
			ctx.drawImage(Grass, tileX, tileY, 100, 100);
			else if(StartClass == "Mage")
			ctx.drawImage(Stone, tileX, tileY, 100, 100);
		
			tileX += 100;
			y++;
		}
		if(tileX == 1600)
		{
			tileX = 0;
			tileY += 100;
		}
		if(y == 16)
		{
			x++;
			y = 0;
		}
	}
}
// get and set methods is how you would do it for combat

class playerCharacter {
		
		constructor (name,strength, agility, intelligence, baseHP, baseMana, baseAttack, baseHeadArmour, baseChestArmour, baseLegArmour, baseGauntletArmour, baseMovement) {
			
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

		getBaseMovement(mve)
		{
		   return this.baseMovement
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
}

class MONSTER extends playerCharacter {
	
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
}
	
var main = new WARRIOR('caster',6,6,6, 30, 6, 6, 6, 6, 6, 6, 6);
main.attackBuff(main);
console.log(main.getMana());

var FellBat = new MONSTER('Tim',6,6,6, 6, 6, 6, 6, 6, 6, 6, 6);
FellBat.magicSmash(FellBat, main);
console.log(main.getHealth());