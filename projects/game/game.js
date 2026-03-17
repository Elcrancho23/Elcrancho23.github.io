let gameActive = true;
let hasKey = false;
let hasIdol = false;

function stayHere() {
    print("Try again!");
}

// --- LOCATION FUNCTIONS ---

function junglePath() {
    clear();
    print("You are on a Jungle Path leading to a temple.");
    print("Where to? Choices:\n- entrance\n- booby trap\n- idol chamber");
    function processInput(input) {
        input = input.toLowerCase();
             if (input === "entrance") {
                 entrance();
       } else if (input === "booby trap") {
                 boobyTrap();
    } else if (input === "idol chamber") {
                   idolChamber();
    } else {  
            stayHere();
            waitThenCall(junglePath);
        }
    }
    waitForInput(processInput);
}

function boobyTrap() {
    clear();
    print("A spike trap springs! You are impaled...\nGAME OVER.");
    gameActive = false;
}    
    function entrance() {
    clear();
    print("You step into the crumbling temple entrance. Dim corridors lead in 3 directions.");
    print("Where to? Choices:\n- hallway\n- snake pit\n- jungle path");
      function processInput(input) {
                  input = input.toLowerCase();
             if (input === "hallway") {
            hallway();
            } else if (input === "snake pit") {
                  snakePit();
    } else if (input === "jungle path") {
            junglePath();
                   } else {            
        stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}
// put the snake pit and other imputs here 
// here is the game start
function start() {
    print("JUNGLE TEMPLE ADVENTURE. Seek the idol and the treasure! Avoid deadly traps.");
    print("Press any key to begin...");
    function processInput(input) {
        junglePath();
    }
    waitForInput(processInput);
}
