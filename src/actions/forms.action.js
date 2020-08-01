import { toast } from "react-toastify";

export const notify = (msg) => toast(msg);
export const selectForm = (id) => {
  return {
    type: "selectItem",
    payload: id,
  };
};

export const formOnchange = (id, value) => {
  return {
    type: "updateForm",
    payload: {
      id,
      value,
    },
  };
};

export const deleteElement = (index) => {
  notify("element Deleted!");
  return {
    type: "deleteElement",
    payload: index,
  };
};

export const addFormItem = (object) => {
  notify("element added!");
  return {
    type: "addFormItem",
    payload: {
      ...object,
    },
  };
};

export const saveForm = () => {
  notify("save chnages !");
  return {
    type: "saveForm",
  };
};
