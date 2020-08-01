import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "addRecord":
      return { ...state, list: [...state.list, { ...payload, id: uuidv4() }] };

    case "selectrecord":
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
