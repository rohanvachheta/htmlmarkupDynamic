const newInitialForm = {
  name: "",
  elements: [],
};

const initialState = {
  list: [
    {
      name: "testing 1",
      createdAt: "22/12/2020 12:12",
      id: 1,
      elements: [
        {
          name: "input",
          position: "right",
        },
        {
          name: "input",
          position: "left",
        },
      ],
    },
    {
      name: "testing 2",
      createdAt: "22/12/2020 12:12",
      id: 2,
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
        id: state.list.length + 1,
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
      const { name, position } = payload;
      return {
        ...state,
        currentFormList: {
          ...state.currentFormList,
          elements: [...state.currentFormList.elements, { name, position }],
        },
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
