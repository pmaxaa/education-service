import React from "react";
import './style.scss'

interface Props{
    called: string,
    id: string,
    style: boolean,
}

function FilterChosen({
    called = 'Бесплатно',
    id="one",
    style=true,
}){
    return(
        <div className={ style? "filter dark" : "filter"}>
                <input type='checkbox' id={id}/>
                <label htmlFor={id}>{called}</label>
        </div>
    )
}

export default FilterChosen;