//In hindsight, this would've been a good opportunity to create an object
//constructor called Game() with all methods like roll() and newGame() 
//to be placed into Game.prototype. Instead, I just slapped everything
//into KevinSpacey. 

//Roll return 1-x
function roll(x) {
    return Math.floor(Math.random() * x)+1;
}

/*
: Game events are as follows:
#1: Prize is assigned a door.
#2: Player picks a door.
#3: Host opens 1 empty door.
#4: Player switches or holds.
#5: Determine who is the victor.
*/

var KevinSpacey = function(cycles, hold){
	var wins = 0;
 for (var i = cycles; i > 0; i--) {
 	var prize = roll(3); //1
 	var playerChoice = roll(3); //2
 	var hostOpensDoor = 0;
 	if (playerChoice !== prize){ //3
 		hostOpensDoor = 6-prize+playerChoice; //This is a nice way to do it i think...
 	} 
 	else {
 		switch(playerChoice){ //Cant figure out how to do this elegantly. Figure it out later.
 			case 1:
 			hostOpensDoor = roll(2)+1;
 			break;
 			case 2:
 			hostOpensDoor = 1;
 			break;
 			case 3:
 			hostOpensDoor = roll(2);
 			break;
 		}
 	}

 	if(hold === true && playerChoice === prize){
 		wins++;
 	}
 	else if (hold === false){// I'm using else if instead just else for descriptive reasons.
 		if(playerChoice === prize){
 			//Do nothing. You lose. 
 			//Leave this here in case we want to do something in the future. 
 		}
 		else if(playerChoice !== prize){
 			wins++;
 		}
 	}
 };
 return wins/cycles * 100;
}

console.log(KevinSpacey(1000,false));