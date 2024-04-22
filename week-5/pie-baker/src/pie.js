/**
 * Author:Nadia Gainer
 * Date:04/21/24
 * File Name: pie
 * Description:pie
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
const essentialingredients=["flour","sugar","butter"]
  for (const essentialingredient of essentialingredients){
  if (!ingredients.includes(essentialingredient)){
  console.warn(`You Are Missing ${essentialingredient}`)
  process.exit(1) 
}
}
  return `Your ${pieType} Pie Was Successfully Baked`
}
module.exports = { bakePie };