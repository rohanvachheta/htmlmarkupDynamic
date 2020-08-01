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
  return {
    type: "deleteElement",
    payload: index,
  };
};

export const addFormItem = (object) => {
  return {
    type: "addFormItem",
    payload: {
      ...object,
    },
  };
};

export const saveForm = () => {
  return {
    type: "saveForm",
  };
};
