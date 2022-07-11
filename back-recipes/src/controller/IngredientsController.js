import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class IngredientsController extends AppController {
  constructor(model) {
    super(model);
  }
  async getIngredients() {
    let response = "";
    LogSuccess(" [/api/ingredients] Get Request");
    response = await Normalize();
    return response;
  }
}
