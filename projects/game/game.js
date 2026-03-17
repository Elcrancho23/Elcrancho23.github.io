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

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
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

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
