import React, { useState } from "react";
import './style.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    called: string,
    theme: "dark" | "light" ,

}

function FilterChosen({
    called,
    theme,
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
        <div className={( theme === "dark" ? "filter-checkBox dark" : "filter-checkBox")+(className? " " + className : "" )}>
            <label className={props.checked ? "checked" : "unChecked"}>
                <input type='checkbox' onClick={changeIsChecked} {...props}/>
            {called}</label>
        </div>
    )
}

export default FilterChosen;