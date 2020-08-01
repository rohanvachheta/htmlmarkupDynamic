import { toast } from "react-toastify";
import { Actions } from "../constance";

export const notify = (msg) => toast(msg);
export const selectForm = (id) => {
  return {
    type: Actions.SELECT_ITEM,
    payload: id,
  };
};

export const formOnchange = (id, value) => {
  return {
    type: Actions.UPDATE_FORM,
    payload: {
      id,
      value,
    },
  };
};

export const deleteElement = (index) => {
  return {
    type: Actions.DELETE_ELEMENT,
    payload: index,
  };
};

export const addFormItem = (object) => {
  return {
    type: Actions.ADD_FORM_ELEMENT,
    payload: {
      ...object,
    },
  };
};

export const saveForm = () => {
  notify("saved form chnages !");
  return {
    type: Actions.SAVE_FORM,
  };
};
