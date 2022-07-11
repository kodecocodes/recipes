import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class TypesController extends AppController {
  constructor(model) {
    super(model);
  }
  async getTypes() {
    let response = [];
    LogSuccess(" [/api/types] Get Request");
    let recipes = await Normalize();
    recipes.forEach((element) => {
      element.ingredients.forEach((ingredient) => {
        response.push(ingredient.type);
      });
    });
    response = new Set(response);
    return [...response];
  }
}
