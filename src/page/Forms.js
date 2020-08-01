import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import FormList from "../components/formList";
import FormItem from "../components/formList/formItem";
import {
  selectFormRecord,
  handleElementChange,
  unmountComponent,
} from "../actions/formsRecord.action";
import { Button } from "@material-ui/core";
import { addRecords } from "../actions/records.action";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export const Forms = ({
  formList,
  formRecords,
  selectFormRecord,
  handleElementChange,
  addRecord,
  unMount,
}) => {
  useEffect(() => {
    return () => {
      unMount();
    };
  }, [unMount]);

  const { selectItem } = formRecords;
  const currentForm = formRecords && formRecords.selectItem && selectItem.id;

  const classes = useStyles();
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Forms page:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {currentForm && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const date = new Date();
                addRecord({
                  ...selectItem,
                  createdAt: date,
                  name: `Id: ${selectItem.id.substr(
                    0,
                    5
                  )}, createdAt: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ,${date.getHours()}:${date.getMinutes()}`,
                });
              }}
            >
              create form
            </Button>
          )}
          <Paper className={classes.paper}>
            <FormList
              activeItem={currentForm}
              list={formList.list}
              handleSelect={(id, item) => {
                selectFormRecord({
                  id,
                  ...item,
                });
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {currentForm ? (
              <FormItem
                data={selectItem}
                handleElementChange={handleElementChange}
              />
            ) : (
              "No form exists, please make a new Form !!"
            )}
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
};

Forms.propTypes = {
  // prop: PropTypes
};

const mapStateToProps = (state) => ({
  formList: state.formsList,
  formRecords: state.formRecords,
});

const mapDispatchToProps = (dispatch) => ({
  selectFormRecord: (item) => {
    dispatch(selectFormRecord(item));
  },
  handleElementChange: (id, value) => {
    dispatch(handleElementChange(id, value));
  },
  addRecord: (value) => {
    dispatch(addRecords(value));
  },
  unMount: () => {
    dispatch(unmountComponent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
