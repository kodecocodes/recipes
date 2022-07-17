import axios from "../utils/config/axios.config";

export const getAllRecipes = (limit, page, ingredients, time) => {
  const options = {
    params: {
      limit: limit,
      page: page,
      ingredients: ingredients,
      time: time,
    },
  };
  return axios.get("/recipes", options);
};
