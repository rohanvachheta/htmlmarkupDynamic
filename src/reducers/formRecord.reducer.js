const initialState = {
  selectItem: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "selecFormtItem":
      return {
        ...state,
        selectItem: payload,
        backUplist: payload,
      };

    case "unmount":
      return initialState;

    case "addRecord":
      return {
        ...state,
        selectItem: state.backUplist,
      };

    case "changeElementValue":
      const { id, value } = payload;
      let newList = [...state.selectItem.elements];
      newList[id] = {
        ...newList[id],
        value,
      };
      return {
        ...state,
        selectItem: {
          ...state.selectItem,
          elements: [...newList],
        },
      };
    default:
      return state;
  }
};
