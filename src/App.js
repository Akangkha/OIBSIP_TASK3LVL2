import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Cardc from "./components/Cardc";
import Carde from "./components/Carde";
function App() {
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState("");
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: uuidv4(), title: value, description: detail, completed: false },
    ]);
    setValue("");
    setDetail("");
  };

  


  return (
    <div className="body">
      <div className="header">Todo-list</div>
      <div className="grid">
        <div className="todo_new">
          <form onSubmit={formSubmit}>
            <div className="add">
              <input
                type="text"
                placeholder="What's the new task..."
                className="newInput"
                maxLength={39}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button>ADD</button>
            </div>

            <div className="details_parent">
              <textarea
                placeholder="Details....."
                className="details"
                id="detail"
                name="description"
                maxLength={100}
                value={detail}
                onChange={(d) => setDetail(d.target.value)}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="todo_pending">
          <p>Pending tasks</p>
          <div className="title">
            <div>Title</div>
            <div>Description</div>
            <div></div>
          </div>

          <Cardc
            todos={todos}
            setTodos={setTodos}
            complete={complete}
            setComplete={setComplete}
           
            formSubmit={formSubmit}
          />
        </div>
        <div className="todo_completed">
          <p>
            Completed Tasks{" "}
            < DeleteIcon className="deleted" sx={{ fontSize: "20px" }} onClick={() => setComplete([])} />
          </p>
          <Carde complete={complete} />
        </div>
      </div>
    </div>
  );
}

export default App;
