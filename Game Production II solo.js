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

function monsterAIMove()
{
	var warrior, mage, ranger;
	
	for (var moves = 2; moves != 0; moves--)
	{
		if (currentTurnName == "NatureWisp")
	{
		
		if (CharTrackNatureWispY > CharTrackWarriorY)
		{
		warrior += CharTrackNatureWispY - CharTrackWarriorY;
		}
		else
			warrior += CharTrackWarriorY - CharTrackNatureWispY;
		
		
		if (CharTrackNatureWispX > CharTrackWarriorX)
		{
		warrior += CharTrackNatureWispX - CharTrackWarriorX;
		}
		else
			warrior += CharTrackWarriorX - CharTrackNatureWispX;
		
		
		if (CharTrackNatureWispY > CharTrackMageY)
		{
		mage += CharTrackNatureWispY - CharTrackMageY;
		}
		else
			mage += CharTrackMageY - CharTrackNatureWispY;
		
		
		if (CharTrackNatureWispX > CharTrackMageX)
		{
		mage += CharTrackNatureWispX - CharTrackMageX;
		}
		else
			mage += CharTrackMageX - CharTrackNatureWispX;
		
		
		if (CharTrackNatureWispY > CharTrackRangerY)
		{
		ranger += CharTrackNatureWispY - CharTrackRangerY;
		}
		else
			ranger += CharTrackRangerY - CharTrackNatureWispY;
		
		
		if (CharTrackNatureWispX > CharTrackRangerX)
		{
		ranger += CharTrackNatureWispX - CharTrackRangerX;
		}
		else
			ranger += CharTrackRangerX - CharTrackNatureWispX;
		
		if (warrior > mage && warrior > ranger)
		{
			if (CharTrackNatureWispY < CharTrackWarriorY)
			{
				creatureNatureWispY -= 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY--;
			}
			else if (CharTrackNatureWispY > CharTrackWarriorY)
			{
				creatureNatureWispY += 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY++;
			}
			
			if (CharTrackNatureWispX < CharTrackWarriorX)
			{
				creatureNatureWispX -= 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX--;
			}
			else if (CharTrackNatureWispX > CharTrackWarriorX)
			{
				creatureNatureWispX += 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX++;
			}
		}
		
		if (mage > warrior && ranger)
		{
			if (CharTrackNatureWispY < CharTrackMageY)
			{
				creatureNatureWispY -= 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY--;
			}
			else if (CharTrackNatureWispY > CharTrackMageY)
			{
				creatureNatureWispY += 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY++;
			}
			
			if (CharTrackNatureWispX < CharTrackMageX)
			{
				creatureNatureWispX -= 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX--;
			}
			else if (CharTrackNatureWispX > CharTrackMageX)
			{
				creatureNatureWispX += 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX++;
			}
		}
		
		if (ranger > mage && warrior)
		{
			if (CharTrackNatureWispY < CharTrackRangerY)
			{
				creatureNatureWispY -= 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY--;
			}
			else if (CharTrackNatureWispY > CharTrackRangerY)
			{
				creatureNatureWispY += 100;
				creatureNatureWisp.style.top = creatureNatureWispY + "px";
				CharTrackNatureWispY++;
			}
			
			if (CharTrackNatureWispX < CharTrackRangerX)
			{
				creatureNatureWispX -= 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX--;
			}
			else if (CharTrackNatureWispX > CharTrackRangerX)
			{
				creatureNatureWispX += 100;
				creatureNatureWisp.style.left = creatureNatureWispY + "px";
				CharTrackNatureWispX++;
			}
		}
	
	
	if (currentTurnName == "FellBat")
	{
		
		if (CharTrackFellBatY > CharTrackWarriorY)
		{
		warrior += CharTrackFellBatY - CharTrackWarriorY;
		}
		else
			warrior += CharTrackWarriorY - CharTrackFellBatY;
		
		
		if (CharTrackFellBatX > CharTrackWarriorX)
		{
		warrior += CharTrackFellBatX - CharTrackWarriorX;
		}
		else
			warrior += CharTrackWarriorX - CharTrackFellBatX;
		
		
		if (CharTrackFellBatY > CharTrackMageY)
		{
		mage += CharTrackFellBatY - CharTrackMageY;
		}
		else
			mage += CharTrackMageY - CharTrackFellBatY;
		
		
		if (CharTrackFellBatX > CharTrackMageX)
		{
		mage += CharTrackFellBatX - CharTrackMageX;
		}
		else
			mage += CharTrackMageX - CharTrackFellBatX;
		
		
		if (CharTrackFellBatY > CharTrackRangerY)
		{
		ranger += CharTrackFellBatY - CharTrackRangerY;
		}
		else
			ranger += CharTrackRangerY - CharTrackFellBatY;
		
		
		if (CharTrackFellBatX > CharTrackRangerX)
		{
		ranger += CharTrackNatureWispX - CharTrackRangerX;
		}
		else
			ranger += CharTrackRangerX - CharTrackFellBatX;
		
		if (warrior > mage && ranger)
		{
			if (CharTrackFellBatY < CharTrackWarriorY)
			{
				creatureFellBatY -= 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY--;
			}
			else if (CharTrackFellBatY > CharTrackWarriorY)
			{
				creatureFellBatY += 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY++;
			}
			
			if (CharTrackFellBatX < CharTrackWarriorX)
			{
				creatureFellBatX -= 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX--;
			}
			else if (CharTrackFellBatX > CharTrackWarriorX)
			{
				creatureFellBatX += 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX++;
			}
		}
		
		if (mage > warrior && ranger)
		{
			if (CharTrackFellBatY < CharTrackMageY)
			{
				creatureFellBatY -= 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY--;
			}
			else if (CharTrackFellBatY > CharTrackMageY)
			{
				creatureFellBatY += 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY++;
			}
			
			if (CharTrackFellBatX < CharTrackMageX)
			{
				creatureFellBatX -= 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX--;
			}
			else if (CharTrackFellBatX > CharTrackMageX)
			{
				creatureFellBatX += 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX++;
			}
		}
		
		if (ranger > mage && warrior)
		{
			if (CharTrackFellBatY < CharTrackRangerY)
			{
				creatureFellBatY -= 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY--;
			}
			else if (CharTrackFellBatY > CharTrackRangerY)
			{
				creatureFellBatY += 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY++;
			}
			
			if (CharTrackFellBatX < CharTrackRangerX)
			{
				creatureFellBatX -= 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX--;
			}
			else if (CharTrackFellBatX > CharTrackRangerX)
			{
				creatureFellBatX += 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX++;
			}
		}
	}
	
	
	}
	
	if (currentTurnName == "RedGolumn")
	{
		
		if (CharTrackRedGolumnY > CharTrackWarriorY)
		{
		warrior += CharTrackRedGolumnY - CharTrackWarriorY;
		}
		else
			warrior += CharTrackWarriorY - CharTrackRedGolumnY;
		
		
		if (CharTrackRedGolumnX > CharTrackWarriorX)
		{
		warrior += CharTrackRedGolumnX - CharTrackWarriorX;
		}
		else
			warrior += CharTrackWarriorX - CharTrackRedGolumnX;
		
		
		if (CharTrackRedGolumnY > CharTrackMageY)
		{
		mage += CharTrackRedGolumnY - CharTrackMageY;
		}
		else
			mage += CharTrackMageY - CharTrackRedGolumnY;
		
		
		if (CharTrackRedGolumnX > CharTrackMageX)
		{
		mage += CharTrackRedGolumnX - CharTrackMageX;
		}
		else
			mage += CharTrackMageX - CharTrackRedGolumnX;
		
		
		if (CharTrackRedGolumnY > CharTrackRangerY)
		{
		ranger += CharTrackRedGolumnY - CharTrackRangerY;
		}
		else
			ranger += CharTrackRangerY - CharTrackRedGolumnY;
		
		
		if (CharTrackRedGolumnX > CharTrackRangerX)
		{
		ranger += CharTrackRedGolumnX - CharTrackRangerX;
		}
		else
			ranger += CharTrackRangerX - CharTrackRedGolumnX;
		
		if (warrior > mage && ranger)
		{
			if (CharTrackRedGolumnY < CharTrackWarriorY)
			{
				creatureRedGolumnY -= 100;
				creatureRedGolumn.style.top = creatureRedGolumnY + "px";
				CharTrackRedGolumnY--;
			}
			else if (CharTrackRedGolumnY > CharTrackWarriorY)
			{
				creatureRedGolumnY += 100;
				creatureRedGolumn.style.top = creatureRedGolumnY + "px";
				CharTrackRedGolumnY++;
			}
			
			if (CharTrackRedGolumnX < CharTrackWarriorX)
			{
				creatureRedGolumnX -= 100;
				creatureRedGolumn.style.left = creatureRedGolumnY + "px";
				CharTrackRedGolumnX--;
			}
			else if (CharTrackRedGolumnX > CharTrackWarriorX)
			{
				creatureRedGolumnX += 100;
				creatureRedGolumn.style.left = creatureRedGolumnY + "px";
				CharTrackRedGolumnX++;
			}
		}
		
		if (mage > warrior && ranger)
		{
			if (CharTrackFellBatY < CharTrackMageY)
			{
				creatureFellBatY -= 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY--;
			}
			else if (CharTrackFellBatY > CharTrackMageY)
			{
				creatureFellBatY += 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY++;
			}
			
			if (CharTrackFellBatX < CharTrackMageX)
			{
				creatureFellBatX -= 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX--;
			}
			else if (CharTrackFellBatX > CharTrackMageX)
			{
				creatureFellBatX += 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX++;
			}
		}
		
		if (ranger > mage && warrior)
		{
			if (CharTrackFellBatY < CharTrackRangerY)
			{
				creatureFellBatY -= 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY--;
			}
			else if (CharTrackFellBatY > CharTrackRangerY)
			{
				creatureFellBatY += 100;
				creatureFellBat.style.top = creatureFellBatY + "px";
				CharTrackFellBatY++;
			}
			
			if (CharTrackFellBatX < CharTrackRangerX)
			{
				creatureFellBatX -= 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX--;
			}
			else if (CharTrackFellBatX > CharTrackRangerX)
			{
				creatureFellBatX += 100;
				creatureFellBat.style.left = creatureFellBatY + "px";
				CharTrackFellBatX++;
			}
		}
	}
	
	}
}

}




function WinLose()
{
    if(Warrior.getHealth() <= 0 && Ranger.getHealth() <= 0 && Mage.getHealth() <= 0)
    {
        alert("Everyone died you have lost");
    }
    else if(FellBat.getHealth() <= 0 && RedGolumn.getHealth() <= 0 && natureWisp.getHealth() <= 0)
    {
        alert("Your party has killed all of the enemies in this part of the dungeon you WIN");
    }
	if(FellBat.getHealth() <= 0 && RedGolumn.getHealth() <= 0 && natureWisp.getHealth() <= 0 && level == 5)
	{
		alert("You have slain all of the monsters in this dungeon. YOU WIN!");
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
				
				alert(caster + " dealt " + sum + " damage.");
            
            
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
        if (map[CharTrackWarriorY][CharTrackWarriorX] == "RedRock" && caster.getTilePreference() == false)
        {
            caster.setTilePref(true);
            caster.addAttack(3);
        }
        
        else if (map[CharTrackWarriorY][CharTrackWarriorX] != "RedRock" && caster.getTilePreference() == true)
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
        if (map[CharTrackRangerY][CharTrackRangerX] == "Grass" && caster.getTilePreference() == false)
        {
            caster.setTilePref(true);
			caster.addAttack(3);
        }
        
        else if (map[CharTrackRangerY][CharTrackRangerX] != "RedRock" && caster.getTilePreference() == true)
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
        if (map[CharTrackMageY][CharTrackMageX] == "Stone" && caster.getTilePreference() == false)
        {
			caster.setTilePref(true);
            caster.addAttack(3);
        }
        else if (map[CharTrackMageY][CharTrackMageX] != "RedRock" && caster.getTilePreference() == true)
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
        if (map[CharTrackNatureWispY][CharTrackNatureWispX] == "Grass" && caster.getTilePreference() == false)
        {
			caster.setTilePref(true);
            caster.addAttack(3);
        }
        
        else if (map[CharTrackNatureWispY][CharTrackNatureWispX] != "RedRock" && caster.getTilePreference() == true)
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
        if (map[CharTrackRedGolumnY][CharTrackRedGolumnX] == "RedRock" && caster.getTilePreference() == false)
        {
			caster.setTilePref(true);
            caster.addAttack(3);
        }
        
        else if (map[CharTrackRedGolumnY][CharTrackRedGolumnX] != "RedRock" && caster.getTilePreference() == true)
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
        if (map[CharTrackFellBatY][CharTrackFellBatX] == "Stone" && caster.getTilePreference() == false)
        {
            caster.addAttack(3);
        }
        
        else if (map[CharTrackFellBatY][CharTrackellBatX] != "RedRock" && caster.getTilePreference() == true)
        {
            caster.setTilePref(false);
            caster.subAttack(3);
        }
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
<<<<<<< HEAD

=======
>>>>>>> 811c072657ce76717f67f88e7b4d94a148ca5514
