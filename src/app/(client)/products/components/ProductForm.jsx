"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function ProductForm() {
    const [form, setForm] = useState({
        status: 'all',
        query: ''
    })
    const pathName = usePathname();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `${pathName}?${new URLSearchParams(form)}`;
        router.push(url)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (<>
        <form onSubmit={(e) => handleSubmit(e)}>
            <select onChange={(e) => handleChange(e)} name="status" id="">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <input onChange={(e) => handleChange(e)} name="query" placeholder="Từ khóa" />
            <button>Tìm kiếm</button>
        </form>
    </>)
}

export default ProductForm;