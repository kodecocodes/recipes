import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TimeSlider from "./TimeSlider";
import { Text } from "@chakra-ui/react";

const animatedComponents = makeAnimated();
export default function MenuFilter(props) {
  function handleChangeTypes(value) {
    value.element = "type";
    props.onChange(value);
  }
  function handleChangeIngredients(value) {
    value.element = "ingredients";
    props.onChange(value);
  }
  function handleChangeTime(value) {
    let timeValue = {};
    timeValue.element = "time";
    timeValue.value = value;
    props.onChange(timeValue);
  }

  return (
    <>
      <Text>Choose an Ingredient Type</Text>
      <Select
        isMulti
        options={props.loadValuesT}
        components={animatedComponents}
        placeholder="Ingredient Types"
        onChange={handleChangeTypes}
      />
      <Text>Choose an Ingredient</Text>
      <Select
        isMulti
        options={props.loadValuesI}
        components={animatedComponents}
        placeholder="Ingredients"
        onChange={handleChangeIngredients}
      />
      <Text>Time Limit</Text>
      <TimeSlider onChange={handleChangeTime} />
    </>
  );
}
