/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
superhero.on("help",(person)=>{
  console.log(`superhero helps: ${person}`)
})

superhero.on("action",(action)=>{
  console.log(`superhero performsAction: ${action}`)
})

superhero.on("danger",(danger)=>{
  console.log(`superhero encounter: ${danger}`)
})


rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
if (command==="help"){
superhero.helpsomeone(args)

}
else if (command==="action"){
  superhero.performAction(args)
 
}
else if (command==="danger"){
  superhero.encounterDanger(args)

}
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);