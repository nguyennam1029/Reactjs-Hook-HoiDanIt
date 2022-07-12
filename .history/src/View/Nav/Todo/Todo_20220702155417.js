const Todo = (props) => {
  const { todos } = props;
  const handleDelete = (item) => {
    // console.log();
    alert(item);
  };
  return (
    <div className="list todo">
      {todos.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.name}
              <span onClick={() => handleDelete(item.id)}>x</span>
            </li>
          </>
        );
      })}
    </div>
  );
};
export default Todo;
