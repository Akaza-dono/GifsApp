import { useState } from "react"

export const AddCategory = ({onNewValue}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return
        // onAddCategory(e => [inputValue, ...e])
        onNewValue(inputValue.trim())
        setInputValue('')
    }

    return(
        <form onSubmit={ e => onSubmit(e) }>
            <input 
                type="text"  
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}