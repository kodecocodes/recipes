import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class RecipesController extends AppController {
  constructor(model) {
    super(model);
  }
  async getRecipes(page, limit, id, ingredients, time) {
    let response = {};
    LogSuccess(" [/api/recipes] Get Request");
    let recipes = await Normalize();

    // If we have ID return the element by ID
    if (id > 0) {
      LogSuccess(" [/api/recipes] Get Recipe By ID");
      response.data = recipes[id - 1];
      return response;
    }
    let filteredRecipes = [...recipes];

    recipes.forEach((element) => {
      let totalTime = 0;
      let ingredientNames = [];
      // Extract ingredients names of every recipe
      element.ingredients.forEach((ingredient) => {
        ingredientNames.push(ingredient.name);
      });
      // Extract total time of every recipe
      totalTime = element.timers.reduce((acc, curr) => acc + curr);

      // Remove elements with NOK total time
      if (time > 0 && time > totalTime) {
        filteredRecipes.splice(filteredRecipes.indexOf(element), 1);
        return;
      }

      // Remove elements without selected ingredients
      if (ingredients) {
        for (let ingredient of ingredients.split(",")) {
          if (!ingredientNames.includes(ingredient)) {
            filteredRecipes.splice(filteredRecipes.indexOf(element), 1);
            break;
          }
        }
      }
    });

    // Get the filtered recipies with pagination
    response.totalPages = Math.ceil(filteredRecipes.length / limit);
    response.currentPage = page;
    response.data = filteredRecipes.slice(
      (page - 1) * limit,
      (page - 1) * limit + Number(limit)
    );

    return response;
  }
}
