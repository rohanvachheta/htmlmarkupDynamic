import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  FormGroup,
  FormControlLabel,
  Input,
  IconButton,
} from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ setdropdownOption }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [options, setoptions] = React.useState(["option1", "option2"]);
  const [inputValue, setinputValue] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addListItem = () => {
    if (!inputValue) return;
    setoptions([...options, inputValue]);
    setinputValue("");
  };

  const handleRemove = (item) => {
    setoptions(options.filter((option) => item !== option));
  };

  const handleChange = (e) => setinputValue(e.target.value);

  const handleSubmit = () => {
    setdropdownOption(options);
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <List component="nav" className={classes.root} aria-label="contacts">
        {options.map((item) => (
          <ListItem button>
            <ListItemText primary={item} />
            <IconButton
              aria-label="delete"
              className={classes.margin}
              onClick={() => handleRemove(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div style={{ marginTop: "10px", padding: "10px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Input
                value={inputValue}
                onChange={handleChange}
                placeholder="option text"
                name="checkedA"
                fullWidth
              />
            }
          />
        </FormGroup>
      </div>
      <Button
        variant="outlined"
        style={{ marginTop: "10px" }}
        color="primary"
        onClick={addListItem}
        fullWidth
      >
        Add new Option
      </Button>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        size="small"
        className={classes.button}
        style={{ marginTop: "10px" }}
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        change option
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
