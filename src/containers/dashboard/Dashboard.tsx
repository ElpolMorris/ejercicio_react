import React from 'react'

interface Props {
    title: string
}

const Dashboard = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Dashboard
