import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // FIX dropdown not closing when click outside of dropdown
  // attach event listener to body to take advantage of event bubbling
  //    sets open to false
  //    detect click in / out the dropdown with useRef
  //    return early if current ref contains click target
  // cleanup: remove body-wide event listener
  const onBodyClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        onClick={() => onSelectedChange(option)}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
