
import { ITodo } from "../type/types";

function TodoItem({todo}: {todo: ITodo}){
    return (
        <div>
            {todo.id} {todo.title}
        </div>
    )
}

export default TodoItem;