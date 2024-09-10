import useTodoStore from "./store/store";

function TodoItem({ todo }) {
  {
    /* ^^^ 맵으로 받아준 부분 ^^^^ */
  }
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.title}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
