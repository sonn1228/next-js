import Navigation from '@/components/Navigation';
import React from 'react'

function ClientLayout({ children }) {
    return (<>

        <Navigation />
        {children}

    </>)
}

export default ClientLayout;