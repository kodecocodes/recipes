import { useNavigate } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "./Card";
// Assets
import React from "react";
import DefaultImage from "../assets/img/defaultImage.png";

export default function RecipeCard(props) {
  let navigate = useNavigate();
  const { image, name, ingredients, sourceURL, time } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");
  return (
    <Card
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
      cursor="pointer"
      p="20px"
    >
      <Flex
        direction={{ base: "column" }}
        justify="center"
        onClick={() => {
          navigate(`/detail/${props.id}`);
        }}
      >
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={image}
            height="auto"
            maxHeight="150px"
            width="auto"
            maxWidth="150px"
            borderRadius="20px"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaultImage;
            }}
          />
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              {ingredients.map((ingredient, index) => (
                <Text
                  key={index}
                  color="secondaryGray.600"
                  fontSize={{
                    base: "xs",
                  }}
                  fontWeight="400"
                  me="14px"
                >
                  {ingredient.name}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="flex-end"
        direction="row"
        pos="absolute"
        bottom="5"
        right="5"
      >
        <Text
          fontWeight="700"
          fontSize="sm"
          color={textColorBid}
          paddingRight="20px"
          paddingTop="8px"
        >
          {" ⏱️ " + time}
        </Text>
        <Link href={sourceURL}>
          <Button
            variant="darkBrand"
            color="white"
            fontSize="sm"
            fontWeight="500"
            borderRadius="70px"
            px="24px"
            py="5px"
          >
            Source
          </Button>
        </Link>
      </Flex>
    </Card>
  );
}
