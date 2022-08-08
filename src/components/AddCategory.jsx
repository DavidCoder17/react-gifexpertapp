import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    // ? PUEDES MANDAR EL ESTADO DE UN COMPONENTE PADRE A UN COMPONENTE HIJO
    // ? MEDIANTE LAS PROPIEDADES.

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target })=>{
        setInputValue(target.value)
    }

    const onFormSubmit = (e)=>{
        e.preventDefault()

        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() )

        setInputValue('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
        
    )
}
