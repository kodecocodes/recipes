import axios from "../utils/config/axios.config";

export const getAllIngredients = () => {
  const options = {
    params: {},
  };
  return axios.get("/ingredients", options);
};
