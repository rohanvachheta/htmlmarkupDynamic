import { v4 as uuidv4 } from "uuid";

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
      elements: [
        {
          name: "input",
          position: "right",
        },
        {
          name: "dropdown",
          position: "left",
        },
      ],
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "selectItem":
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

    case "updateForm":
      const { id, value } = payload;
      if (!id) return state;
      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          [id]: value,
        },
      };

    case "addFormItem":
      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          elements: [...(state.currentFormList.elements || []), { ...payload }],
        },
      };

    case "deleteElement":
      const newList = state.currentFormList;
      newList.elements = newList.elements.filter(
        (i, index) => index !== payload
      );
      return {
        ...state,
        currentFormList: { ...newList },
      };

    case "saveForm":
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
