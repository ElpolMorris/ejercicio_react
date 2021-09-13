import React from 'react'
import Form from '../../components/form/Form'
import formLogin from "../../content/content-json/formLogin.json"
interface Props {
    title: string
}

const Login = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Form inputs={formLogin}/>
        </div>
    )
}

export default Login
