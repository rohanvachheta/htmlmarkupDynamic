import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import { Checkbox, Button, Input, TextField } from "@material-ui/core";
import DropdownOption from "./DropdownOption";
import { Box } from "../draggable/DraggableField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetList({ addFormItem }) {
  const classes = useStyles();

  const [placeHolderValue, setplaceHolderValue] = useState({});
  const [dropdownOption, setdropdownOption] = useState(["option1", "option2"]);

  const handleSelection = (selected, options = []) => {
    console.log("handleSelection -> selected", selected);
    addFormItem({
      name: selected,
      value: "",
      placeholder: placeHolderValue[selected] || `select a ${selected}`,
      options,
    });
    setplaceHolderValue((prevState) => ({
      ...prevState,
      [selected]: "",
    }));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setplaceHolderValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <Box name="checkbox" type="checkbox" handleSelection={handleSelection}>
        <ListItem button id="checkBox">
          <ListItemIcon onClick={() => handleSelection("checkBox")}>
            <AddIcon />
          </ListItemIcon>
          <TextField
            placeholder="checkbox"
            id="checkBox"
            style={{ padding: 0 }}
            onChange={handleInputChange}
            value={placeHolderValue["checkBox"]}
          />
        </ListItem>
      </Box>
      <Box name="input" type="input" handleSelection={handleSelection}>
        <ListItem button id="input">
          <ListItemIcon onClick={() => handleSelection("input")}>
            <AddIcon />
          </ListItemIcon>
          <ListItem>
            <TextField
              variant="outlined"
              label={placeHolderValue["input"]}
              placeholder="text input"
              id="input"
              value={placeHolderValue["input"]}
              onChange={handleInputChange}
            />
          </ListItem>
        </ListItem>
      </Box>
      <Box name="email" type="email" handleSelection={handleSelection}>
        <ListItem button id="email">
          <ListItemIcon onClick={() => handleSelection("email")}>
            <AddIcon />
          </ListItemIcon>
          <ListItem>
            <TextField
              variant="outlined"
              label={placeHolderValue["email"]}
              placeholder="Email"
              id="email"
              value={placeHolderValue["email"]}
              onChange={handleInputChange}
            />
          </ListItem>
        </ListItem>
      </Box>{" "}
      <Box
        name="dropdown"
        dropdownOption={dropdownOption}
        type="dropdown"
        handleSelection={handleSelection}
      >
        <ListItem button id="dropdown">
          <ListItemIcon
            onClick={() => handleSelection("dropdown", dropdownOption)}
          >
            <AddIcon />
          </ListItemIcon>

          <ListItem>
            <form>
              <label for="test">Add Dropdown </label>
              <select name="test" id="test">
                {dropdownOption.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              <br></br>
            </form>
          </ListItem>
          <DropdownOption setdropdownOption={setdropdownOption} />
        </ListItem>
      </Box>
    </List>
  );
}
