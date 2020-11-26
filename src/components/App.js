import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const App = () => {
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

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
