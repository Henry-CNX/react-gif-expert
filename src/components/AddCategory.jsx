import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    /*const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };*/

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ... categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    const myStyle = {
        marginTop: "12px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "12px",
        padding: "12px",
        fontSize: "24px",
    };
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                />
            { /* <button type="submit" value="Submit" style={{marginTop: "12px"}}>Agregar</button> */}
            <button className="submit" type="submit" value="Submit" style={myStyle}>Agregar</button>
        </form>
    )
}
