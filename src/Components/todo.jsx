//todo.jsx

import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState('');

  function addTodo() {
    if (!newTask) return;
    setTodos([...todos, { id: Date.now(), task: newTask, completed: false }]);
    setNewTask('');}

  function startEdit(todo) {
    setEditId(todo.id);
    setEditTask(todo.task);}

  function saveEdit(id) {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task: editTask } : todo
    ));
    setEditId(null);
    setEditTask('');}

  function toggleComplete(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))}

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));}

  return (
    <>
    <div>
      <h1>MY TODO LIST </h1>
    </div>
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="할 일을 입력하세요"/>
      <button onClick={addTodo}>추가</button>
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {editId === todo.id ? (
              <div> <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}/>
                <button onClick={() => saveEdit(todo.id)}>저장</button>
              </div> ) : (
              <div>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.task}
                </span>
                <button onClick={() => startEdit(todo)}>수정</button>
                <button onClick={() => toggleComplete(todo.id)}>
                  {todo.completed ? '취소' : '완료'}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default TodoApp;
