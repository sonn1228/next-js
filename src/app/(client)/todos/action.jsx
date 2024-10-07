"use server"

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";

export const handleAddToDo = async (formData) => {
    const name = formData.get('name');
    const response = await fetch('http://localhost:3005/todoList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    if (response.ok) {
        const allHeaders = headers();
        console.log('All headers: ', allHeaders);
        const path = allHeaders.get("next-url") || '/default-path'; // Fallback path
        console.log('path: ', path);
        revalidatePath('/todos');
        cookies().set("title", name);
    }
}
