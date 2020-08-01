import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const TextInput = ({ placeholder, value, onChange, id, type, label }) => {
  return (
    <TextField
      size="small"
      variant="outlined"
      label={label}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  label: PropTypes.string,
};

TextInput.defauleProps = {
  label: "",
  value: "",
  type: "text",
};

export default TextInput;
