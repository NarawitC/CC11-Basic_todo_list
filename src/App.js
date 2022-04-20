import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import Filter from './components/filter/Filter';
import PageLimit from './components/pageLimit.js/PageLimit';
import TodoList from './components/todoList/TodoList';
import Pagination from './components/pageLimit.js/pagination/Pagination';
import { useState } from 'react';

const initialTodoLits = [
  { title: 'Sport', completed: true, id: uuidv4() },
  { title: 'Gaming', completed: false, id: uuidv4() },
  { title: 'Entertain', completed: true, id: uuidv4() },
];
function App() {
  const [todoList, setTodoList] = useState(initialTodoLits);
  const handleAddTodoList = (title) => {
    let newTodoList = { title, completed: true, id: uuidv4() };
    setTodoList(() => [newTodoList, ...todoList]);
  };
  const removeTodo = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList.splice(idx, 1);
      setTodoList(oldTodoList);
    }
  };
  const updateTodo = (newValue, id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList[idx] = { ...oldTodoList[idx], ...newValue };
      setTodoList(oldTodoList);
    }
  };
  return (
    <div className="container max-w-xs pt-5">
      <TodoInput handleAddTodoList={handleAddTodoList}></TodoInput>
      <Filter></Filter>
      <PageLimit></PageLimit>
      <TodoList todoList={todoList} removeTodo={removeTodo} updateTodo={updateTodo}></TodoList>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
