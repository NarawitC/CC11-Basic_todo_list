import Todo from './Todo';
function TodoList(props) {
  return (
    <div>
      <ul className="list-group shadow mt-4">
        {props.todoList.map((el) => (
          <Todo
            key={el.id}
            id={el.id}
            title={el.title}
            completed={el.completed}
            removeTodo={props.removeTodo}
            updateTodo={props.updateTodo}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
