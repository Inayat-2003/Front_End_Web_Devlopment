import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo, deletetodo } from "./redux/todoslice";


function App() {

  const [text, settext] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleadd = () => {
    if (text.trim() !== "") {
      dispatch(addtodo(text));
      settext("");
    }
  }
  return (
    <div style={{ padding: "20px" , textAlign: "center", margin:"0 auto" ,height: "400px", width: "400px", border:"1px solid"}} >
      <h2>📝 Redux Todo App</h2>

      <input
        value={text}
        onChange={(e) => settext(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleadd}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: "10px" }}>
            <span
              onClick={() => dispatch(toggletodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(deletetodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App