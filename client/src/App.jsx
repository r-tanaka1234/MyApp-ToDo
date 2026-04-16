import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState("");

  // 一覧取得
  useEffect(() => {
    fetch('http://localhost:3001/api/todos')
      .then(res => res.json())
      .then(data => {
        console.log("取得データ:", data);
        setTodos(data);
      })
      .catch(err => {
        console.error("エラー:", err);
      });
  }, []);

  // 
  const addTodo = () => {
    fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newText })
    })
      .then(res => res.json())
      .then(data => {
        // 画面に即反映
        setTodos([...todos, data]);
        setNewText(""); // 入力欄クリア
      });
  };

  const toggleTodo = async (id, currentStatus) => {
    const res = await fetch(`http://localhost:3001/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !currentStatus
      })
    });
  
    const updatedTodo = await res.json();
    console.log("updateTodo:",updatedTodo)
  
    // UI更新
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? updatedTodo : todo
      )
    );
  };

  return (
    <div>
      <h1>ToDo一覧</h1>

      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id,todo.completed)}
              />
            {todo.text}（{todo.completed ? "完了" : "未完了"}）
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;