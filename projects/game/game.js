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
function snakePit() {
             clear();
       print("You fall into a pit full of snakes! You are bitten...\nGAME OVER.");
      gameActive = false;
            }

             function hallway() {
    clear();
           print("You enter a torch-lit hallway.");
          print("Where to? Choices:\n- treasure room\n- hidden chamber\n- entrance");
    function processInput(input) {
        input = input.toLowerCase();
        if (input === "treasure room") {
            treasureRoom();
   } else if (input === "hidden chamber") {
            hiddenChamber();
      else if (input === "entrance") {
        entrance();
        } else {
   stayHere();
        waitThenCall(hallway);
        }
    }
    waitForInput(processInput);
} 
         function hiddenChamber() {
    clear();
             if (!hasKey) {
        print("This dusty chamber contains an ancient key! You take it.");
        hasKey = true;
                } else {
        print("The chamber is empty now.");
                 }
                print("Where to? Choices:\n- hallway");
                    function processInput(input) {
        if (input.toLowerCase() === "hallway") {
            hallway();
                     } else {
            stayHere();
            waitThenCall(hiddenChamber);
                  }
    }
    waitForInput(processInput);
}
         function treasureRoom() {
    clear();
         if (hasKey && hasIdol) {
        print("You unlock the door, place the idol, and the Treasure Room opens!");
    print("Congratulations! You WIN!");
        gameActive = false;
            } else if (!hasIdol) {
    print("The altar is empty. Maybe you need the idol from another room...");
  print("Go back? Choices:\n- hallway");
    function processInput(input) {
            if (input.toLowerCase() === "hallway") {
              hallway();
            } else {
                stayHere();
                waitThenCall(treasureRoom);} }
           waitForInput(processInput);
           } else if (!hasKey) {
           print("The treasure gate is locked tight. Maybe there's a key nearby...");
            print("Go back? Choices:\n- hallway");
             function processInput(input) {
              if (input.toLowerCase() === "hallway") {
                hallway();
                   } else {
                  stayHere();
                waitThenCall(treasureRoom);
                    }
                   }
           waitForInput(processInput);
             }
             }


// now the prize 
// here is the game start
function start() {
    print("JUNGLE TEMPLE ADVENTURE. Seek the idol and the treasure! Avoid deadly traps.");
    print("Press any key to begin...");
    function processInput(input) {
        junglePath();
    }
    waitForInput(processInput);
}
