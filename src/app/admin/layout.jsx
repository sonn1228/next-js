function AdminLayout({ children }) {
    return (<>
        <header>
            <h1>Admin header</h1>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <h1>Admin footer</h1>
        </footer>
    </>)
}

export default AdminLayout;