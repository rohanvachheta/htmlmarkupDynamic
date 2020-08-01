import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import FormList from "../components/formList";
import InputItems from "../components/inputItems";
import { connect } from "react-redux";
import {
  selectForm,
  formOnchange,
  addFormItem,
  saveForm,
  deleteElement,
} from "../actions/forms.action";
import FormItem from "../components/formList/formItem";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../learn-dnd/Constant";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const style = {
  height: "100%",
  width: "100%",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export const HomePage = ({
  formList,
  selectFormItem,
  onChange,
  addFormItem,
  saveForm,
  deleteElement,
}) => {
  const classes = useStyles();
  const { currentForm, currentFormList } = formList;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#fff";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  if (!currentForm) {
    backgroundColor = "#fff";
  }

  const handleAddItem = (name) => {
    if (!currentForm) return;
    addFormItem(name);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => selectFormItem(currentForm ? "" : "newForm")}
            >
              {currentForm ? "cancel" : " create form"}
            </Button>
            {currentForm && currentFormList && currentFormList.name && (
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "5px" }}
                onClick={() => saveForm()}
              >
                save changes
              </Button>
            )}
            <FormList
              activeItem={currentForm}
              list={formList.list}
              handleSelect={selectFormItem}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <div ref={drop} style={{ ...style, backgroundColor }}>
            <Paper className={classes.paper}>
              {!currentForm && "No Forms found ,please create new !!"}

              {currentForm && (
                <FormItem
                  showDeleteIcon
                  data={currentFormList}
                  onChange={onChange}
                  deleteElement={deleteElement}
                />
              )}
            </Paper>
          </div>
        </Grid>
        <Grid item xs>
          {/* <Paper className={classes.paper}> */}
          <InputItems addFormItem={handleAddItem} />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formList: state.formsList,
});

const mapDispatchToProps = (dispatch) => ({
  selectFormItem: (id) => {
    dispatch(selectForm(id));
  },
  onChange: (id, value) => {
    dispatch(formOnchange(id, value));
  },
  addFormItem: (name) => {
    dispatch(addFormItem(name));
  },
  saveForm: () => {
    dispatch(saveForm());
  },
  deleteElement: (index) => {
    dispatch(deleteElement(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
