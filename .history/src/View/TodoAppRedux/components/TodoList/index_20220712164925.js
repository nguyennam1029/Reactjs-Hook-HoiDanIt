import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { addTodo } from "../../Redux/action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { selector } from "../../Redux/selector";
export default function TodoList() {
  const dispath = useDispatch();
  const todoList = useSelector(selector);
  console.log("todoList: ", todoList);
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");
  const handleInput = (e) => {
    // console.log("check input", e.target.value);
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setTodoPriority(value);
  };
  const handleClickAdd = () => {
    dispath(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item) => (
            <Todo name={item.name} prioriry={item.priority} />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInput} value={todoName} />
          <Select
            defaultValue="Medium"
            value={todoPriority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClickAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
