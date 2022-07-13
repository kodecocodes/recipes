import React from "react";
import { Button } from "@chakra-ui/react";
import { getAllRecipes } from "../services/recipeService";

export const HomePage = () => {
  function sayHello() {
    getAllRecipes(1, 1, "").then((response) => {
      if (
        response.status === 200 &&
        response.data.data &&
        response.data.totalPages &&
        response.data.currentPage
      ) {
        let { totalPages, currentPage, data } = response.data;
        alert(data[0].name);
      } else {
        throw new Error(`Error obtaining recipes: ${response.data}`);
      }
    });
    //alert("Hello, World!");
  }

  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w="100%"
      h="50"
      mb="24px"
      onClick={sayHello}
    >
      Click me!
    </Button>
  );
};
