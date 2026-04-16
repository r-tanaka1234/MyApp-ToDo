import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h1>ToDo一覧</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} ({todo.completed ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;