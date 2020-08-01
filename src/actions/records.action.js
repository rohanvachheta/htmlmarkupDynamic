import { notify } from "./forms.action";

export const addRecords = (payload) => {
  notify("record submitted !");
  return {
    type: "addRecord",
    payload,
  };
};

export const handleRecordChange = (id, value) => {
  return {
    type: "recordChange",
    payload: {
      id,
      value,
    },
  };
};

export const saveRecord = () => {
  return {
    type: "saveRecord",
  };
};
