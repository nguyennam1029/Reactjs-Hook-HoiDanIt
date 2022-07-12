const initState = {
  fillter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Dev",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Front End",
      completed: false,
      priority: "Low",
    },
    {
      id: 2,
      name: "BackEnd",
      completed: false,
      priority: "Medium",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  // VD: {
  //     type : 'todoList/addTodo',
  //     payload : {
  //   id: 2,
  //   name: "BackEnd",
  //   completed: false,
  //   priority: "Medium",
  // }
  // }
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: 2,
            name: "BackEnd",
            completed: false,
            priority: "Medium",
          },
        ],
      };

    default:
      return state;
  }
};
export default rootReducer;
