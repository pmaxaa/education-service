import React from "react";
import './style.scss'

interface Props{
    called: string,
    id: string
}

function FilterChosen({
    called = 'Бесплатно',
    id="one"
}){
    return(
        <div className="filter">
                <input type='checkbox' id={id}/>
                <label htmlFor={id}>{called}</label>
        </div>
    )
}

export default FilterChosen;