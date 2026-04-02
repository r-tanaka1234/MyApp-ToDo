const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 仮データ（DBの代わり）
let todos = [
  { id: 1, text: "勉強する" },
  { id: 2, text: "買い物する" }
];

//rootにアクセスした際の表示
app.get("/", (req, res) => {
  res.send("Hello World");
});

// 一覧取得
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});