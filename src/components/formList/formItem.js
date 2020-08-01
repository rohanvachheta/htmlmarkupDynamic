import React from "react";

import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const FormItem = ({
  data: { name, elements },
  onChange,
  handleElementChange,
  deleteElement,
  showDeleteIcon,
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
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </div>
      {elements.map(({ name, id, value, placeholder, options }, index) => {
        return (
          <div key={index}>
            <ListItem
              key={id}
              showDeleteIcon={showDeleteIcon}
              name={name}
              value={value}
              placeholder={placeholder}
              options={options}
              index={index}
              deleteElement={deleteElement}
              handleElementChange={handleElementChange}
            />
          </div>
        );
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
  deleteElement: () => {},
};

export default FormItem;
