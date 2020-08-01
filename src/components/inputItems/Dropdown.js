import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, id, label }) => {
  return (
    <form>
      <label htmlFor={id}>{label} </label>
      <select name={id} id={id}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <br></br>
    </form>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
