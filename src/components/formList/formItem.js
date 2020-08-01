import React from "react";
import { TextField } from "@material-ui/core";

import PropTypes from "prop-types";

const FormItem = ({
  data: { name, elements },
  onChange,
  handleElementChange,
}) => {
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
      {elements.map(({ name, postition, id, value }, index) => {
        if (name === "input") {
          return (
            <div key={id}>
              <TextField
                id={id}
                placeholder="enter title"
                type="text"
                value={value}
                margin="dense"
                onChange={(event) => {
                  handleElementChange(index, event.target.value);
                }}
              />
            </div>
          );
        }
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

FormItem.propTypes = {
  handleElementChange: PropTypes.func,
  onChange: PropTypes.func,
};

FormItem.defaultProps = {
  handleElementChange: () => {},
  onChange: () => {},
};

export default FormItem;
