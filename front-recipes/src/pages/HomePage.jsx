import React, { useEffect, useState } from "react";
import { Image, Box, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
    <Box>
      {recipes.map((recipe, key) => (
        <Card key={key} mb={{ base: "0px", lg: "20px" }} align="center">
          <Text color="blue" fontSize="xl" fontWeight="1000">
            {recipe.name}
          </Text>
          <Image
            alignSelf="center"
            boxSize="150px"
            objectFit="cover"
            src={recipe.imageURL}
          />
          {recipe.ingredients.map((ingredient, key) => (
            <Text key={key} color="blue" fontSize="sm" fontWeight="1000">
              {ingredient.name}
            </Text>
          ))}
          <Text key={key} color="blue" fontSize="sm" fontWeight="1000">
            {recipe.timers.reduce((acc, curr) => acc + curr)}
          </Text>
          <Link href={recipe.originalURL} isExternal>
            Source URL <ExternalLinkIcon mx="2px" />
          </Link>
        </Card>
      ))}
    </Box>
  ) : (
    <Text color="blue" fontSize="xl" fontWeight="1000"></Text>
  );
};
