export const selectFormRecord = (payload) => ({
  type: "selecFormtItem",
  payload,
});

export const handleElementChange = (id, value) => ({
  type: "changeElementValue",
  payload: {
    id,
    value,
  },
});

export const onchangeRecord = (id, value) => {
  return {
    type: "selectrecord",
    payload: {
      id,
      value,
    },
  };
};

export const unmountComponent = () => {
  return {
    type: "unmount",
  };
};
