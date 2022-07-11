import AppController from "./AppController.js";
import { LogSuccess } from "../utils/logger.js";
import { Normalize } from "../utils/normalize.js";

export class RecipesController extends AppController {
  constructor(model) {
    super(model);
  }
  async getRecipes(page, limit) {
    let response = {};
    LogSuccess(" [/api/recipes] Get Request");
    let recipes = await Normalize();
    response.totalPages = Math.ceil(recipes.length / limit);
    response.currentPage = page;
    response.data = recipes.slice(
      (page - 1) * limit,
      (page - 1) * limit + Number(limit)
    );
    return response;
  }
}
