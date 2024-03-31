/**
 * Author: Nadia Gainer
 * Date: 03/31/24
 * File Name: recipes
 * Description:recipes
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  const ingredientstring = ingredients.join(", ")
  return `Recipe created with ingredients: ${ingredientstring}`
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
return `Timer set for ${minutes} minutes`
}


// Define the quit function
function quit() {
  // TODO: Implement this function
  return `Program exited`
}

// TODO: Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
}