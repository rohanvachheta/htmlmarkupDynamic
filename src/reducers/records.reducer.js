import { v4 as uuidv4 } from "uuid";
import { Actions } from "../constance";

const initialState = {
  list: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_RECORD:
      return { ...state, list: [...state.list, { ...payload, id: uuidv4() }] };

    case Actions.SAVE_RECORD:
      const indexOfItem = state.list.findIndex(
        (item) => item.id === state.currentFormList.id
      );

      if (indexOfItem !== -1) {
        let newList = state.list;
        newList[indexOfItem] = state.currentFormList;
        return {
          ...state,
          list: [...newList],
        };
      }
      return {
        ...state,
        list: [...state.list, state.currentFormList],
      };

    case Actions.RECORD_CHANGE:
      const { id, value } = payload;
      const newRecordElement = [...state.currentFormList.elements];
      newRecordElement[id].value = value;

      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          elements: newRecordElement,
        },
      };

    case Actions.SELECT_RECORD:
      const newCurrFormList = state.list.find((item) => item.id === payload.id);
      return {
        ...state,
        currentForm: payload,
        currentFormList: newCurrFormList,
      };
    default:
      return state;
  }
};
