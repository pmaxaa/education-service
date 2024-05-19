import React from "react"
import './style.scss'

interface CheckboxProps{
    name: string,
    time: string,
    id: string,
    style:boolean,
}
function Checkbox({
    name='Задание 1. Очень длинное название задания аж на 2 строчки',
    time='15 мин',
    id='one',
    style=true
}){
    return(
        <div className={ style? "bs-box dark" : "bs-box"}>
            <div className='bs-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" stroke="#797979" stroke-width="2"/>
                    <path d="M17 12L9.5 16.3301L9.5 7.66987L17 12Z" fill="#797979"/>
                </svg>
            </div>

            <div className='txt'>
                <p>{name}</p>
                <span className='time'>{time}</span>
            </div>

            <div className='bs-checkbox'>
                <input type='checkbox' id={id}/>
                <label htmlFor={id}></label>
                <span className="border-fake"></span>
            </div>
        </div>
    )
}
export default Checkbox;