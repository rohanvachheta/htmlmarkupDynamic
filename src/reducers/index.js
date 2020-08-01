import { combineReducers } from "redux";
import forms from "./formList.reducer";
import records from "./records.reducer";
import formRecords from "./formRecord.reducer";

const appReducers = combineReducers({
  records,
  formsList: forms,
  formRecords,
});

export default appReducers;
