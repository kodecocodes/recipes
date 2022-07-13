import React from "react";
import { Button } from "@chakra-ui/react";

export const HomePage = () => {
  function sayHello() {
    alert("Hello, World!");
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
