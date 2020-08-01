import { v4 as uuidv4 } from "uuid";
import { Actions } from "../constance";

const newInitialForm = {
  name: "",
  elements: [],
};

const initialState = {
  list: [],
  currentForm: null,
  currentFormList: [
    {
      name: "",
      elements: [],
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.SELECT_ITEM:
      let newCurrFormList = {
        ...newInitialForm,
        id: uuidv4(),
      };

      if (payload !== "newForm") {
        newCurrFormList = state.list.find((item) => item.id === payload);
      }

      return {
        ...state,
        currentForm: payload,
        currentFormList: newCurrFormList,
      };

    case Actions.UPDATE_FORM:
      const { id, value } = payload;
      if (!id) return state;
      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          [id]: value,
        },
      };

    case Actions.ADD_FORM_ELEMENT:
      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          elements: [...(state.currentFormList.elements || []), { ...payload }],
        },
      };

    case Actions.DELETE_ELEMENT:
      const newList = state.currentFormList;
      newList.elements = newList.elements.filter(
        (element, index) => element && index !== payload
      );

      return {
        ...state,
        currentFormList: { ...newList },
      };

    case Actions.SAVE_FORM:
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

    default:
      return state;
  }
};
