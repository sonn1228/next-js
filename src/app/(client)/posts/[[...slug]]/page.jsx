import React from 'react'

function PostSlug({ params }) {
    const { slug } = params;
    return (<>
        {slug}
    </>)
}

export default PostSlug