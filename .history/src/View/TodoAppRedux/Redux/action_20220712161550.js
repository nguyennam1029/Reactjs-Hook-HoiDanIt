export const action = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
