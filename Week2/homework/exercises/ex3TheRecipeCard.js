'use strict'
// this solution we took it in the session on Sunday because it does not make any sence to loop throgh only one object


/*
const pizzaRecipe = {};
pizzaRecipe.title = 'Pizza';
pizzaRecipe.servings = 1;
pizzaRecipe.ingredients = ['Flower', 'Tomato Sauce', 'Mushroom', 'Mozzarella'];

const falafelRecipe = {};
falafelRecipe.title = 'Falafel';
falafelRecipe.servings = 8;
falafelRecipe.ingredients = ['Chickpeas', 'Tahine', 'Spices'];

const recipes = [
   pizzaRecipe,
   falafelRecipe
 ];

recipes.forEach(recipe => {
   console.log('Meal Name :',recipe.title);
   console.log('Servings :', recipe.servings);
   const ingredientString = recipe.ingredients.join(", ");
   console.log('Ingredients :', ingredientString);
 }) 
 */

//   this way to solve the exercise  is also discused in the sunday session


const myMeal = {};
myMeal.title = 'sapghetti with bashamel suce';
myMeal.servings = 2;
myMeal.ingredientString = ['spaghetti', 'Mashroum', 'bahsamel souce'];
console.log("meal title: "+ myMeal.title);
console.log("meal servings: " + myMeal.servings);
console.log("ingredient:" + myMeal.ingredientString.join(', '));


/*acctually I dont understand why do we need to use a loop for this exercise if this way is not good 
pleas inform me so I can update it */
