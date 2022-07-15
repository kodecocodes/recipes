import React, { useEffect, useState } from "react";
import { Image, SimpleGrid, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { getAllRecipes } from "../services/recipeService";
import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";

export const HomePage = () => {
  // State of the component
  const [recipes, setRecipes] = useState();
  const [hasLoaded, setHasLoaded] = useState();

  useEffect(() => {
    getAllRecipes(3, 3, "")
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
    <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px">
      <Text></Text>
      {recipes.map((recipe, key) => (
        <RecipeCard
          image={recipe.imageURL}
          name={recipe.name}
          ingredients={recipe.ingredients}
          sourceURL={recipe.originalURL}
          time={recipe.timers.reduce((acc, curr) => acc + curr)}
          key={key}
          mb={{ base: "0px", lg: "20px" }}
          align="center"
        ></RecipeCard>
      ))}
    </SimpleGrid>
  ) : (
    <Text color="blue" fontSize="xl" fontWeight="1000"></Text>
  );
};
