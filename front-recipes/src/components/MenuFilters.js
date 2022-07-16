import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const options = [
  { value: 1, label: "aaaaaa" },
  { value: 2, label: "bbbbbb" },
  { value: 3, label: "cccccc" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
  { value: 4, label: "dddddd" },
];
const animatedComponents = makeAnimated();
export default function MenuFilter() {
  const [options1, setOption1] = React.useState(options);
  const [options2, setOption2] = React.useState(options);

  return (
    <>
      <Select
        isMulti
        options={options1}
        components={animatedComponents}
        placeholder="Ingredient Types"
      />
    </>
  );
}
