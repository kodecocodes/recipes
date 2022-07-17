import React, { useEffect, useState } from "react";
import { SimpleGrid, Text, Box, Flex, Stack } from "@chakra-ui/react";
import { getAllRecipes } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";
import MenuFilters from "../components/MenuFilters";
import { getAllTypes } from "../services/typesService";
import { getAllIngredients } from "../services/ingredientsService";

export const HomePage = () => {
  // State of the component
  const [recipes, setRecipes] = useState();
  const [hasLoaded, setHasLoaded] = useState();
  const [loadTypes, setLoadTypes] = useState([]);
  const [loadIngredients, setLoadIngredients] = useState([]);
  const [types, setTypes] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState();
  function handleChange(newValue) {
    if (newValue.element === "type") {
      let extract = "";
      newValue.map((type) => (extract = extract + "," + type.label));
      setTypes(extract.slice(1));
      return;
    }
    if (newValue.element === "ingredients") {
      let extract = "";
      newValue.map(
        (ingredient) => (extract = extract + "," + ingredient.label)
      );
      setIngredients(extract.slice(1));
      return;
    }
    if (newValue.element === "time") {
      setTime(newValue.value);
      console.log(newValue.value);
      return;
    }
  }

  useEffect(() => {
    getAllTypes()
      .then((response) => {
        if (response.status === 200 && response.data) {
          let opt = [];
          response.data.map((element, key) =>
            opt.push({ value: key + 1, label: element })
          );

          setLoadTypes(opt);
        } else {
          throw new Error(`Error obtaining types: ${response.data}`);
        }
      })
      .catch((error) => console.error(`[GET ALL TYPES ERROR]: ${error}`));
    getAllIngredients(types)
      .then((response) => {
        if (response.status === 200 && response.data) {
          let opt = [];
          response.data.map((element, key) =>
            opt.push({ value: key + 1, label: element })
          );

          setLoadIngredients(opt);
        } else {
          throw new Error(`Error obtaining types: ${response.data}`);
        }
      })
      .catch((error) => console.error(`[GET ALL TYPES ERROR]: ${error}`));
    getAllRecipes(3, 1, ingredients, time)
      .then((response) => {
        if (response.status === 200 && response.data.data) {
          let { totalPages, currentPage, data } = response.data;
          setRecipes(data);
          setHasLoaded(true);
        } else {
          throw new Error(`Error obtaining recipes: ${response.data}`);
        }
      })
      .catch((error) => console.error(`[GET ALL RECIPES ERROR]: ${error}`));
  }, [types, ingredients, time]);

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
      <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px" paddingTop="20px">
        <Flex display={{ base: "none", md: "flex" }} ml={10} paddingTop="20px">
          <Stack direction={"column"} spacing={4}>
            <MenuFilters
              onChange={handleChange}
              loadValuesT={loadTypes}
              loadValuesI={loadIngredients}
            />
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
