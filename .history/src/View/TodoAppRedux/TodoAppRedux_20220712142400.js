import { Typography, Divider } from "antd";
import "../TodoAppRedux/Todo.scss";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
const TodoApp = () => {
  return (
    <>
      <div
        style={{
          width: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 2px #bfbfbf",
          borderRadius: 5,
          height: "90vh",
        }}
      >
        <h2 style={{ textAlign: "center" }}>TODO APP with REDUX</h2>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </>
  );
};
export default TodoApp;
