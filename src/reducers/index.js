import { combineReducers } from "redux";
import forms from "./formList.reducer";
import records from "./records.reducer";

const appReducers = combineReducers({
  records,
  forms,
});

export default appReducers;
