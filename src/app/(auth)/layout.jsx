import React from 'react'

function layout({ children }) {
    return (<>
        <h1>Authentication</h1>
        <main>
            {children}
        </main>
    </>)
}

export default layout