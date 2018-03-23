var canvas =document.querySelector("canvas");
//var surface = canvas.getContext("2d");
var player = document.getElementById("Player");
var playerX = 100;
var playerY = 100;

var uInt; // setinterval value
var map; //background grid



class playerCharacter {
		
		constructor (name, baseHP, baseMana, baseAttack, baseHeadArmour, baseChestArmour, baseLegArmour, baseGauntletArmour, baseMovement) {
			
			this.name = name;
			this.baseHP = baseHP;
			this.baseMana = baseMana;
			this.baseHeadArmour = baseHeadArmour;
			this.baseChestArmour = baseChestArmour;
			this.baseLegArmour = baseLegArmour;
			this.baseGauntletArmour = baseGauntletArmour;
		}
		
		setName (Name) {
			name = Name;
		}
		
		getName () {
			return name;
		}
		
		setHP (health) {
			baseHP = health;
		}
		
		getHealth () {
			return baseHP;
		}
		
		setMana (MP) {
			baseMana = MP;
		}
		
		getMana () {
			return baseMana;
		}
		
		setAttack (atk) {
			baseAttack = atk;
		}
		
		getAttack () {
			return baseAttack;
		}
		
		subMana (MP) {
			baseMana -= MP;
		}
		
		subHP (health) {
			baseHP -= health;
		}
		
		addAttack (atk) {
			baseAttack += atk;
		}
		
		statCheck () {
		
			console.log(this.name + this.baseHP + this.baseMana + this.baseHeadArmour + this.baseChestArmour + this.baseLegArmour + this.baseGauntletArmour);
		
		}
	}
	
class Warrior extends playerCharacter {
	
	function attackBuff (caster) {
		
		caster.subMana (3);
		caster.addAttack (5);
		
	}
	
	constructor (rageActive) {
		this.rageActive = fales;
	}
}
	
	var cancer = new playerCharacter('Joe', 10, 10, 2, 5, 3, 2, 1);
	cancer.statCheck();