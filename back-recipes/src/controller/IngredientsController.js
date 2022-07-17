import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class IngredientsController extends AppController {
  constructor(model) {
    super(model);
  }
  async getIngredients(types) {
    let response = [];
    LogSuccess(" [/api/ingredients] Get Request");
    let recipes = await Normalize();
    //We can get ingredients by Types
    if (types) {
      recipes.forEach((element) => {
        element.ingredients.forEach((ingredient) => {
          for (let type of types.split(",")) {
            if (ingredient.type == type) {
              response.push(ingredient.name);
            }
          }
        });
      });
      response = new Set(response);
      return [...response];
    }
    //If no type selected we get all ingredients
    recipes.forEach((element) => {
      element.ingredients.forEach((ingredient) => {
        response.push(ingredient.name);
      });
    });
    response = new Set(response);
    return [...response];
  }
}
