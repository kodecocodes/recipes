import React, { useEffect, useState } from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

function TimeSlider(props) {
  const [sliderValue, setSliderValue] = useState(50);
  function handleChange(value) {
    setSliderValue(value);
    props.onChange(value * 5);
  }

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box pt={6} pb={2}>
      <Slider aria-label="slider-ex-6" onChange={handleChange}>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="20"
        >
          {sliderValue * 5} min
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
export default TimeSlider;
