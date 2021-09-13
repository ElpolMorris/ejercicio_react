import React from 'react'

interface Props {
    title: string
}

const NotFound = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default NotFound
