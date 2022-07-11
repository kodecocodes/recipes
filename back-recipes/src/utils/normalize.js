import fs from "fs";
export const Normalize = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("../Recipes.json", (err, data) => {
      if (err) reject(err);
      let recipes = JSON.parse(data);
      resolve(recipes);
    });
  });
};
