/**
 * Author: Nadia Gainer
 * Date: 03/31/24
 * File Name: index.js
 * Description: index.js
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes")

// TODO: Implement your CLI program here
const ingredients = ["cheese" , "eggs", "bacon"] 
console.log (createRecipe(ingredients))

const minutes = 20
console.log (setTimer(minutes))

console.log (quit())