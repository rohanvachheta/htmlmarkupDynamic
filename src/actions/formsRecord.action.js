import { Actions } from "../constance";

export const selectFormRecord = (payload) => ({
  type: Actions.SELECT_FORM_ITEM,
  payload,
});

export const handleElementChange = (id, value) => ({
  type: Actions.CHANGE_ELEMENT_VALUE,
  payload: {
    id,
    value,
  },
});

export const onchangeRecord = (id, value) => {
  return {
    type: Actions.SELECT_RECORD,
    payload: {
      id,
      value,
    },
  };
};

export const unmountComponent = () => {
  return {
    type: Actions.UNMOUNT_COMPONENT,
  };
};
