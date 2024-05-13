"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:

const fs = require('fs');
const path=require("path")

function createCharacter(character, callback) {
  // TODO: Implement this function
  fs.writeFile(path.join(__dirname,"character.json"), JSON.stringify(character), (error)=> {
if (error||!character.class){
callback("couldnt create character")
return 
}
callback(character)
  })
}

function getCharacters(callback) {
  // TODO: Implement this function
  fs.readFile(path.join(__dirname, "character.json"), "utf8", (error, data)=> {
   
    if (error){
      console.log("couldnt read character")
      return 
      }
      const character=JSON.parse(data)
      callback(character)
  })
}


// For promises:
/*
const fs = require('fs').promises;

async function createCharacter(character) {
  // TODO: Implement this function
}

async function getCharacters() {
  // TODO: Implement this function
}
*/

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

module.exports = { createCharacter, getCharacters }; // For callbacks
//module.exports = { createCharacter, getCharacters }; // For promises