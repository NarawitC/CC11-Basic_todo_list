import Todo from './Todo';
function TodoList() {
  return (
    <div>
      <ul className="list-group shadow mt-4">
        <Todo title="Homework" completed={true}></Todo>
        <Todo title="Personal project figma" completed={false}></Todo>
        <Todo title="Midterm exam" completed={false}></Todo>
        <Todo title="Lab" completed={true}></Todo>
      </ul>
    </div>
  );
}
export default TodoList;
