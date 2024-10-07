import { revalidatePath, revalidateTag } from 'next/cache';
import TodoForm from './TodoForm';
const getTodos = async () => {
    const res = await fetch(`http://localhost:3005/todoList`, {
        cache: 'no-cache',
        tags: ['todos']
    });
    const data = await res.json();
    return data;
}
const handleRefresh = async () => {
    "use server";
    revalidatePath('/todos');
    revalidateTag('todos')
}
const handleDeleteAll = async () => {
    "use server";
    revalidatePath('/todos');
    revalidateTag('todos')
}
// const handleDeleteTodo = async () => {
//     "use server";
//     revalidatePath('/todos');
//     revalidateTag('todos')
// }

const handleDeleteTodo = async (id) => {
    "use server";
    const response = await fetch(`http://localhost:3005/todoList/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.ok)
    revalidatePath('/todos');
    revalidateTag('todos')
}
const TodoPage = async () => {
    const todoList = await getTodos();
    return (
        <>
            <form action={handleRefresh}>
                <button>Refresh</button>
            </form>
            <form action={handleDeleteAll}>
                <button>Deleted All</button>
            </form>

            <h1>Todo Page</h1>
            {(todoList.length > 0) && todoList.map((item, index) => {
                return <li key={index}>{item.name}
                    <form action={handleDeleteTodo}>
                        <button>X</button>
                    </form>
                </li>
            })}
            <TodoForm />
        </>
    );
};
export default TodoPage;