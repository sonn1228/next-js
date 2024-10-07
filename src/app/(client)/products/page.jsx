// http://localhost:3000/products?status=active&query=abc
import ProductForm from "./components/ProductForm"
export const metadata = {
    title: 'product page'
}
function Products({ searchParams: { status, query } }) {
    return (<>
        <h1>searchParams</h1>
        <h2>status: {status}</h2>
        <h2>query: {query}</h2>
        <ProductForm />
    </>)
}

export default Products