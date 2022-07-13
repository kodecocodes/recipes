import React, { useEffect, useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { getAllRecipes } from "../services/recipeService";
import Card from "../components/Card";

export const HomePage = () => {
  // State of the component
  const [recipes, setRecipes] = useState();
  const [hasLoaded, setHasLoaded] = useState();

  useEffect(() => {
    getAllRecipes(3, 1, "")
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.data &&
          response.data.totalPages &&
          response.data.currentPage
        ) {
          let { totalPages, currentPage, data } = response.data;
          setRecipes(data);
          setHasLoaded(true);
        } else {
          throw new Error(`Error obtaining recipes: ${response.data}`);
        }
      })
      .catch((error) => console.error(`[GET ALL RECIPES ERROR]: ${error}`));
  }, []);

  return hasLoaded ? (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      {recipes.map((recipe, key) => (
        <Text key={key} color="blue" fontSize="xl" fontWeight="1000">
          {recipe.name}
        </Text>
      ))}
    </Card>
  ) : (
    <Text color="blue" fontSize="xl" fontWeight="1000"></Text>
  );
};
