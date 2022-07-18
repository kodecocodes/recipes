import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DefaultImage from "../assets/img/defaultImage.png";
// Chakra imports
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { getRecipeByID } from "../services/recipeService";

export const DetailsPage = (props) => {
  // Find id from params
  const { id } = useParams();
  // Navigate
  let navigate = useNavigate();
  // Define variable
  const [recipe, setRecipe] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    getRecipeByID(id)
      .then((response) => {
        if (response.status === 200 && response.data.data) {
          setRecipe(response.data.data);
          setHasLoaded(true);
        } else {
          throw new Error(`Error obtaining recipes: ${response.data}`);
        }
      })
      .catch((error) => console.error(`[GET ALL RECIPES ERROR]: ${error}`));
  }, [id]);

  return hasLoaded ? (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"recipe image"}
            src={recipe.imageURL}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaultImage;
            }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {recipe.name}
            </Heading>
            {recipe.originalURL ? (
              <Link href={recipe.originalURL}>
                <Text color="gray.900" fontWeight={300} fontSize={"2xl"}>
                  🔗 Original URL
                </Text>
              </Link>
            ) : (
              <Text></Text>
            )}
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor="gray.200" />}
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="yellow.500"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Ingredients
              </Text>

              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
                <List spacing={2}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListItem>
                      {ingredient.quantity +
                        " " +
                        ingredient.name +
                        " (" +
                        ingredient.type +
                        ")"}
                    </ListItem>
                  ))}
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="yellow.500"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Directions
              </Text>

              <List spacing={2}>
                {recipe.steps.map((step, index) => (
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Step {index + 1}:
                    </Text>{" "}
                    {recipe.timers[index] > 0
                      ? step + " - ⏱️ " + recipe.timers[index] + " minutes"
                      : step}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg="gray.900"
            color="white"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              navigate(`/home`);
            }}
          >
            Come Back!
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  ) : (
    <Container></Container>
  );
};
