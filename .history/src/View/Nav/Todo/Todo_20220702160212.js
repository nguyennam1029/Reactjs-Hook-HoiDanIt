const Todo = (props) => {
  const { todos, handleDelete } = props;
  const handleId = (item) => {
    // console.log();
    handleDelete(item);
  };
  return (
    <div className="list todo">
      {todos.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.name}
              <span onClick={() => handleId(item.id)}>x</span>
            </li>
          </>
        );
      })}
    </div>
  );
};
export default Todo;
