import React, { useState } from "react";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
const Cardc = ({ todos, setTodos, complete, setComplete }) => {
  const task_complete = (id) => {
    const filtered = todos.filter((x) => x.id !== id);
    const deleted = todos.filter((x) => x.id == id);
    setTodos(filtered);
    setComplete([...complete, deleted]);
  };

  const updateTask = (todos) => {
    setTodos((prevState) =>
      prevState.map((t) =>
        t.id == todos.id
          ? [...t, { title: todos.title, description: todos.desciption }]
          : t
      )
    );
  };

  const delete_task = (id) => {
    const delete_ct = todos.filter((x) => x.id != id);
    setTodos(delete_ct);
  };
  return todos.map((todo) => (
    <div className="cardc">
      <div className="cardch">
        <div className="task">{todo.title}</div>
        <div className="card_details">{todo.description}</div>
        <div className="border">
          <CheckIcon
            className="check"
            onClick={() => {
              task_complete(todo.id);
              todo.completed = true;
            }}
          />

          <DeleteIcon className="delete" onClick={() => delete_task(todo.id)} />
        </div>
      </div>
    </div>
  ));
};

export default Cardc;
