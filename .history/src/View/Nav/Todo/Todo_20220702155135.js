const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="list todo">
      {todos.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.name}
              <span>x</span>
            </li>
          </>
        );
      })}
    </div>
  );
};
export default Todo;
