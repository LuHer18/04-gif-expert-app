import { useState } from "react"

const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length<=1){
            return;
        }
        onAddCategory(inputValue.trim())
        setInputValue('')
    }
  return (
    <form  onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
        <button>agregar</button>
    </form>
  )
}

export {AddCategory}
