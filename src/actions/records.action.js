import { notify } from "./forms.action";
import { Actions } from "../constance";

export const addRecords = (payload) => {
  notify("Record added !");
  return {
    type: Actions.ADD_RECORD,
    payload,
  };
};

export const handleRecordChange = (id, value) => {
  return {
    type: Actions.RECORD_CHANGE,
    payload: {
      id,
      value,
    },
  };
};

export const saveRecord = () => {
  return {
    type: Actions.SAVE_RECORD,
  };
};
