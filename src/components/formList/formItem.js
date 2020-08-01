import React from "react";
import { TextField } from "@material-ui/core";

import PropTypes from "prop-types";

const FormItem = ({ data: { name, elements }, onChange }) => {
  const handleChange = (object) => {
    const { id, value } = object.target;
    onChange(id, value);
  };
  return (
    <div>
      <div>
        <TextField
          id="name"
          placeholder="enter title"
          type="text"
          value={name}
          margin="dense"
          fullWidth
          onChange={handleChange}
        />
      </div>
      {elements.map(({ name, postition }, i) => {
        return <div key={i}>{name}</div>;
      })}
    </div>
  );
};

FormItem.propTypes = {};

export default FormItem;
