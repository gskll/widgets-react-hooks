import React from "react";
import Accordion from "./Accordion";

const App = (props) => {
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
      <Accordion items={items} />
    </div>
  );
};

export default App;
