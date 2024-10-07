"use client"
import { useRef } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
import { handleAddToDo } from "./action";

function TodoForm() {
    // const [name, setName] = useState('');
    // const router = useRouter();
    // const pathName = usePathname();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('http://localhost:3005/todoList', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name }),
    //     });
    //     if (response.ok) {
    //         router.push(`${pathName}`)
    //         router.refresh();
    //         // active at server side
    //     }

    // };
    // const handleChange = (e) => {
    //     setName(e.target.value);
    // }

    const formRef = useRef();
    return (
        <form
            ref={formRef}
            action={async (formData) => {
                handleAddToDo(formData);
                formRef.current.reset();
            }}>
            <input name="name" />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
