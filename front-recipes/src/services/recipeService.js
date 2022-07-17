import axios from "../utils/config/axios.config";

export const getAllRecipes = (limit, page, ingredients) => {
  const options = {
    params: {
      limit: limit,
      page: page,
      ingredients: ingredients,
    },
  };
  console.log(ingredients);
  return axios.get("/recipes", options);
};
