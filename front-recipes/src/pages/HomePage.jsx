import React, { useEffect, useState } from "react";
import { SimpleGrid, Text, Box, Flex, Stack } from "@chakra-ui/react";
import { getAllRecipes } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";
import MenuFilters from "../components/MenuFilters";

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
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
      >
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <Text>RECIPES</Text>
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px">
        <Flex display={{ base: "none", md: "flex" }} ml={10} paddingTop="20px">
          <Stack direction={"column"} spacing={4}>
            <MenuFilters />
            <MenuFilters />
          </Stack>
        </Flex>
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
    </Box>
  ) : (
    <Text color="blue" fontSize="xl" fontWeight="1000"></Text>
  );
};
