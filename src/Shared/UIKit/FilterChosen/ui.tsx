import React, { useState } from "react";
import './style.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    called: string,
    darkStyle: boolean,
}

function FilterChosen({
    called = 'Бесплатно',
    darkStyle=true,
    className,
    ...props
}:Props){
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const changeIsChecked = () =>{
        if(isChecked){
            setIsChecked(false)
        }else{
            setIsChecked(true)
        }
    }
    return(
        <div className={( darkStyle? "filter dark" : "filter")+(className? " " + className : "" )}>
            <label className={isChecked ? "checked" : "unChecked"} htmlFor="1">
                <input type='checkbox' id="1" onClick={changeIsChecked} {...props}/>
            {called}</label>
        </div>
    )
}

export default FilterChosen;