import axios from "../utils/config/axios.config";

export const getAllTypes = () => {
  const options = {
    params: {},
  };
  return axios.get("/types", options);
};
