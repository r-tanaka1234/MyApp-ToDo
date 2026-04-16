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

// トップ
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});