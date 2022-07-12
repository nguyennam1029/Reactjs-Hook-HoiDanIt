const Todo = (props) => {
  const { todos, handleDelete } = props;
  const handleId = (id) => {
    // console.log();
    handleDelete(id);
  };
  return (
    // <div className="list todo">
    //   {todos.map((item) => {
    //     return (
    //       <>
    //         <li key={item.id}>
    //           {item.name}
    //           <span onClick={() => handleId(item.id)}>x</span>
    //         </li>
    //       </>
    //     );
    //   })}
    // </div>
    <h3>Todo App</h3>
  );
};
export default Todo;
