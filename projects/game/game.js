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
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

// here is the game start
function start() {
    print("JUNGLE TEMPLE ADVENTURE. Seek the idol and the treasure! Avoid deadly traps.");
    print("Press any key to begin...");
    function processInput(input) {
        junglePath();
    }
    waitForInput(processInput);
}
