import TodoInput from './components/TodoInput';
import Filter from './components/filter/Filter';
import PageLimit from './components/pageLimit.js/PageLimit';
import TodoList from './components/todoList/TodoList';
import Pagination from './components/pageLimit.js/pagination/Pagination';

function App() {
  return (
    <div className="container max-w-xs pt-5">
      <TodoInput></TodoInput>
      <Filter></Filter>
      <PageLimit></PageLimit>
      <TodoList></TodoList>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
