var splocation1 = 0;
var splocation2;
var splocation3 = 0;

var selection = false;

while (selection = false) {
    splocation2 = prompt ("Place your Battleship (Enter Number 0-6)");
        splocation1 = splocation1 - 1
        splocation3 = splocation3 + 1
        if (splocation2 = Number) 
            {
            selection = true
        }
}


var location1 = 3;
var location2 = 4;
var location3 = 5;
var LocHit1 = 0;
var LocHit2 = 0;
var LocHit3 = 0;



var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Input Grid Coordinates (Enter Number to 0-6)");
    
    if (guess < 0 || guess > 6) {
            alert ("Please input valid Coordinates")
    }
    else { 
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3 ) {
                hits = hits +1;
                    if (hits == 3){
                        isSunk = True;
                        alert ("Enemy Battleship Sunk")
                }
        }
    
    }



}

var stats = "You sunk the Battleship in" + guesses + "guesses.";
alert (stats);
