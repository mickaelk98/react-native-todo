import DisplayTodo from './DisplayTodo';
import EditTodo from './EditTodo';

export default function TodoItem({ todo, toogleTodo, editTodo, deleteTodo }) {
    return todo.edit ? <EditTodo todo={todo} toogleTodo={toogleTodo} editTodo={editTodo} /> : <DisplayTodo todo={todo} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
}