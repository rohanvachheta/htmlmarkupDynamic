import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import FormList from "../../components/formList";
import InputItems from "../../components/inputItems";
import { connect } from "react-redux";
import {
  selectForm,
  formOnchange,
  addFormItem,
  saveForm,
  deleteElement,
} from "../../actions/forms.action";
import FormItem from "../../components/formList/formItem";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../constance";

import "./Home.css";

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
    drop: () => ({ name: "form-list" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#fff";
  if (isActive) {
    backgroundColor = "#8e8f9161";
  } else if (canDrop) {
    backgroundColor = "#8e8f9161";
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
          <div ref={drop} className="drop-box" style={{ backgroundColor }}>
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
          <InputItems addFormItem={handleAddItem} />
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
