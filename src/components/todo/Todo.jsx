import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelateTodos, getAllTodos, getTodos } from "../redux/todo/ActionTodo";
import "./todo.scss";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todo);

  const handleTodoAdd = () => {
    dispatch(getAllTodos(todo));
  };

  const handleDelate = (id) => {
    dispatch(DelateTodos(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2>hello</h2>
                <form action="">
                  <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="form-control"
                  />
                  <button
                    className="btn btn-success"
                    value="submit"
                    onClick={handleTodoAdd}
                  >
                    Send
                  </button>
                </form>
                <ul className="list-group mamu">
                  {todos.map(({ name, id }, index) => {
                    return (
                      <li className="list-group-item" key={index}>
                        {name}{" "}
                        <button onClick={() => handleDelate(id)}>ff</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
