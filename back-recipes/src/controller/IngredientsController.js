import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class IngredientsController extends AppController {
  constructor(model) {
    super(model);
  }
  async getIngredients() {
    let response = [];
    LogSuccess(" [/api/ingredients] Get Request");
    let recipes = await Normalize();
    recipes.forEach((element) => {
      element.ingredients.forEach((ingredient) => {
        response.push(ingredient.name);
      });
    });
    response = new Set(response);
    return [...response];
  }
}
