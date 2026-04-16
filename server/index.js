const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// 仮データ
let todos = [
  { id: 1, text: "買い物", completed: false },
  { id: 2, text: "勉強", completed: true }
];

// 一覧取得
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 追加
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// 完了状態の更新
app.put('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Not found" });
  }

  todo.completed = Boolean(completed);

  res.json(todo);
});

// トップ
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});