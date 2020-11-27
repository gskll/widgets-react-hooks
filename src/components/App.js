import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
  {
    title: "What is React?",
    content: "A frontend javascript framework",
  },
  {
    title: "Why React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label={"Select a Color"}
        />
      ) : null}
    </div>
  );
};

export default App;
