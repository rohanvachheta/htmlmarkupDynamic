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

export const addFormItem = (name) => {
  return {
    type: "addFormItem",
    payload: {
      name,
    },
  };
};

export const saveForm = () => {
  return {
    type: "saveForm",
  };
};
