import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

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

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          label={"Select a Color"}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
