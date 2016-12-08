/**
 * Rock Paper Scissors
 *
 * An example of using NodeJS to create a little game
 *
 * @developer StuartD : www.stuartd.co.uk
 *
 * Feel free to do whatever you want to this, it was put together to test my Javascript knowledge.
 */

// Required Modules
var prompt = require('prompt');
var colors = require('colors');
var randomInt = require("random-int");

// Variables
var moves = ["rock", "paper", "scissors"];
var beats = { "rock": "scissors", "paper": "rock", "scissors": "paper" };

// Clears the screen & writes the title
process.stdout.write('\x1Bc');
print(" ================================")
print(" ██████╗     ██████╗     ███████╗");
print(" ██╔══██╗    ██╔══██╗    ██╔════╝");
print(" ██████╔╝    ██████╔╝    ███████╗");
print(" ██╔══██╗    ██╔═══╝     ╚════██║");
print(" ██║  ██║    ██║         ███████║");
print(" ╚═╝  ╚═╝    ╚═╝         ╚══════╝ ");
print("       ROCK PAPER SCISSORS           ");
print(" ================================");

// Runs the game initially
runGame();

/**
 * runGame()
 * @desc The actual game of Rock Paper Scissors, it takes a users input of either "rock", "paper" or "scissors",
 *       generates a random number then checks it is beats the input! If you win it says "You win".
 */
function runGame(){
    var servMove = randomInt(moves.length-1);

    prompt.start();
    prompt.get([ {
            name: 'move',
            description: 'Enter your move [rock, paper, scissors]',
            type: 'string',
            required: true
        }], function(err, result){
        if(result) {
            if (moves.indexOf(result.move) > -1) {
                if (beats[moves[servMove]] == result.move) {
                    print("Computer Wins", "LOSE".red);
                }
                else if (beats[moves[servMove]] == beats[result.move]) {
                    print("It's a draw!", "DRAW".yellow);
                } else {
                    print("You win!", "WIN".green);
                }
                print("Server selected: " + moves[servMove] + " - You selected: " + result.move, "INFO".blue);
                runGame();
            } else {
                print("You didn't enter in a correct choice. [rock, paper, scissors]", "INFO".blue);
                runGame();
            }
        } else {
            print("Exiting!", "INFO".blue);
        }
    });
}

/**
 * print() is an easy way to print to the server to make formatting easier.
 *
 * @param text The actual thing to print
 * @param action The text that is placed in [ ] at the start such as "DEBUG" or "SERVER". Can be coloured.
 */
function print(text, action){
    if(action){
        console.log("\n["+ action + "] " + text);
    } else {
        console.log(text);
    }
}