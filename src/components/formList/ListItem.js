import React from "react";
import { TextField, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const ListItem = ({
  name,
  id,
  value,
  placeholder,
  options,
  index,
  showDeleteIcon,
  deleteElement,
  handleElementChange,
}) => {
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
};

ListItem.propTypes = {};

export default ListItem;
