"use client";
import "@/assets/style.scss"
import clsx from "clsx";
import Link from 'next/link'
import { usePathname } from "next/navigation"
import React from 'react'

function Navigation() {
    const pathName = usePathname();
    const isActive = (path) => {
        return path == pathName;
    }
    return (<>
        <ul className="menu">
            <li className={clsx(isActive('/') && 'active')}>
                <Link href='/'>Home</Link>
            </li>
            <li className={clsx(isActive('/products') && 'active')}>
                <Link href='/products'>products</Link>
            </li>
            <li className={clsx(isActive('/posts') && 'active')}>
                <Link href='/posts'>posts</Link>
            </li>
            <li className={clsx(isActive('/about') && 'active')}>
                <Link href='/about'>about</Link>
            </li>
            <li className={clsx(isActive('/todos') && 'active')}>
                <Link href='/todos'>todos</Link>
            </li>

        </ul>
    </>)
}

export default Navigation;