import { Actions } from "../constance";

const initialState = {
  selectItem: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.SELECT_FORM_ITEM:
      return {
        ...state,
        selectItem: payload,
        backUplist: payload,
      };

    case Actions.UNMOUNT_COMPONENT:
      return initialState;

    case Actions.ADD_RECORD:
      return {
        ...state,
        selectItem: state.backUplist,
      };

    case Actions.CHANGE_ELEMENT_VALUE:
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
