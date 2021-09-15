import { useState } from 'react'

const useInput = (initialState: string) => {
    const [val, setVa] = useState(initialState);

    const handlertChange: any = (event: any) => {
        const { value } = event.target
        setVa(value)
    }
    return [val, handlertChange]
}

export default useInput