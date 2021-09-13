import React from 'react'
import Button from '../button/Button'
import styles from "./Form.module.css"

interface InputObject {
    label: string;
    type: string;
    placeholder?: string;
    value?: string | undefined;
    name?: string | undefined;
}

interface Props {
    inputs: InputObject[];
}

const Form = (props: Props) => {
    return (
        <div>
            <form className={styles["form-style"]}>
                {
                    props.inputs.map(({label,type,placeholder,name,value},i: number)=>{
                        return(
                            <div key={i}>
                                <label>{label}</label>
                                <input  type={type} placeholder={placeholder} name={name || ""} value={value || ""} />
                            </div>
                        ) 
                    })
                }
                <div>
                    <Button typeButton='submit' color="primary">
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form
