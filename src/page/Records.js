import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import FormList from "../components/formList";
import { onchangeRecord } from "../actions/formsRecord.action";
import FormItem from "../components/formList/formItem";
import { handleRecordChange, saveRecord } from "../actions/records.action";
import { Button } from "@material-ui/core";

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

export const Records = ({
  formList,
  onChange,
  handleRecordChange,
  saveRecord,
}) => {
  const { currentFormList } = formList;
  const currentForm = currentFormList && currentFormList.id;
  const classes = useStyles();
  let text = "please select any form ";
  if (!formList.list.length) {
    text = "No form exists !! create new one";
  }

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Records page:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FormList
              activeItem={currentForm}
              list={formList.list}
              handleSelect={onChange}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {currentForm ? (
              <>
                <FormItem
                  data={currentFormList}
                  handleElementChange={handleRecordChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.divider}
                  onClick={saveRecord}
                >
                  save changes
                </Button>
              </>
            ) : (
              text
            )}
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
};

Records.propTypes = {
  // prop: PropTypes
};

const mapStateToProps = (state) => ({
  formList: state.records,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (id, value) => {
    dispatch(onchangeRecord(id, value));
  },
  handleRecordChange: (id, value) => {
    dispatch(handleRecordChange(id, value));
  },
  saveRecord: () => {
    dispatch(saveRecord());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
