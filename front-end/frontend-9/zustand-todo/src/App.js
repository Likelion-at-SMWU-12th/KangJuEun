import "./App.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "./store/store";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      //trim = 공백, 줄바꿈, 스페이스바 없애는 내장함수. 공백은 입력 못하게!
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>투두리스트^_^</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 추가해봐~"
        />
        <button onClick={handleAddTodo}>할일추가</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
