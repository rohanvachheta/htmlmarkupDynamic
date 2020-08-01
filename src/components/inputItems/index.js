import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import { Checkbox, Button, Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetList({ addFormItem }) {
  const classes = useStyles();

  const handleSelection = (selected) => {
    addFormItem(selected);
  };

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button id="checkBox">
        <ListItemIcon onClick={() => handleSelection("checkBox")}>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="CheckBox" />
      </ListItem>
      <ListItem
        button
        id="textInput"
        onClick={() => handleSelection("textInput")}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItem>
          <Input placeholder="text input" />
        </ListItem>
      </ListItem>{" "}
      <ListItem button id="email" onClick={() => handleSelection("email")}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItem>
          <Input placeholder="Email" style={{ padding: 0 }} />
        </ListItem>
      </ListItem>
      <ListItem
        button
        id="dropdown"
        onClick={() => handleSelection("dropdown")}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItem>
          <form>
            <label for="test">Add Dropdown </label>
            <select name="test" id="test">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
            </select>
            <br></br>
          </form>
        </ListItem>
      </ListItem>
    </List>
  );
}
