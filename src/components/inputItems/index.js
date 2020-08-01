import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

// own components
import DropdownOption from "./DropdownOption";
import { Box } from "../draggable/DraggableField";
import TextInput from "../textField/TextInput";
import Dropdown from "./Dropdown";

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
    addFormItem({
      name: selected,
      value: "",
      placeholder: placeHolderValue[selected] || `select a ${selected}`,
      options,
      id: uuidv4(),
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

  const addIconArrow = (
    <Tooltip title="add element" arrow>
      <AddIcon />
    </Tooltip>
  );

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <Box name="checkbox" type="checkbox" handleSelection={handleSelection}>
        <ListItem button id="checkBox">
          <ListItemIcon onClick={() => handleSelection("checkBox")}>
            {addIconArrow}
          </ListItemIcon>
          <TextInput
            placeholder="checkbox"
            id="checkBox"
            onChange={handleInputChange}
            value={placeHolderValue["checkBox"]}
          />
        </ListItem>
      </Box>
      <Box name="input" type="input" handleSelection={handleSelection}>
        <ListItem button id="input">
          <ListItemIcon onClick={() => handleSelection("input")}>
            {addIconArrow}
          </ListItemIcon>
          <ListItem>
            <TextInput
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
            {addIconArrow}
          </ListItemIcon>
          <ListItem>
            <TextInput
              label={placeHolderValue["email"]}
              placeholder="Email"
              id="email"
              value={placeHolderValue["email"]}
              onChange={handleInputChange}
            />
          </ListItem>
        </ListItem>
      </Box>
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
            {addIconArrow}
          </ListItemIcon>

          <ListItem>
            <Dropdown
              options={dropdownOption}
              id="dropdown-drag"
              label="Add Dropdown"
            />
          </ListItem>
          <DropdownOption setdropdownOption={setdropdownOption} />
        </ListItem>
      </Box>
    </List>
  );
}
