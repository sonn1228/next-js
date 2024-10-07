"use client";
import React, { useEffect, useState } from 'react';

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch(`http://localhost:3005/todoList`, {
                cache: 'no-cache',
                next: {
                    revalidate: 0
                }
            });
            const todoList = await res.json();
            setTodoList(todoList);
        }
        getTodos();
    }, []);
    return (<>
        {(todoList.length > 0) && todoList.map((item, index) => {
            return <li key={index}>{item.name}</li>
        })}
    </>)
}

export default TodoList;