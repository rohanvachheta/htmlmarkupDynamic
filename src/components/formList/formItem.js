import React from "react";
import { TextField, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import PropTypes from "prop-types";

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
      {elements.map(
        ({ name, postition, id, value, placeholder, options }, index) => {
          let deleteIcon = (
            <IconButton
              key={id}
              aria-label="delete"
              onClick={() => deleteElement(index)}
            >
              <DeleteIcon />
            </IconButton>
          );
          if (!showDeleteIcon) {
            deleteIcon = null;
          }
          if (name === "input" || name === "email") {
            return (
              <div key={id}>
                <TextField
                  id={id}
                  size="small"
                  label={placeholder}
                  variant="outlined"
                  placeholder={placeholder}
                  type={name === "email" ? "email" : "text"}
                  value={value}
                  margin="dense"
                  required={!!name === "email"}
                  onChange={(event) => {
                    handleElementChange(index, event.target.value);
                  }}
                />
                {deleteIcon}
              </div>
            );
          }

          if (name === "checkBox") {
            return (
              <div key={id}>
                <Checkbox
                  id={id}
                  checked={!!value}
                  onChange={(event) => {
                    handleElementChange(index, event.target.checked);
                  }}
                />
                {placeholder}
                {deleteIcon}
              </div>
            );
          }

          if (name === "dropdown") {
            return (
              <div key={id}>
                <select
                  name="test"
                  id="test"
                  value={value}
                  onChange={(event) => {
                    handleElementChange(index, event.target.value);
                  }}
                >
                  {options &&
                    options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
            );
          }

          return (
            <div key={id}>
              {name} {deleteIcon}
            </div>
          );
        }
      )}
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
