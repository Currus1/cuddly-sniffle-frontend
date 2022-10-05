import React, { Component } from "react";
const Checkbox = ({ id, title, handleChange, checked }) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
