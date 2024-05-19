import React from "react";
import { Checkbox } from "../../../../Shared";
import './style.scss'
import { ALL } from "dns";
interface Props{
    setTask: (v:string) => void,
    taskArr: {id:string , name: string , time: string}[],
    idCurrent: string,
    theme?: "light" | "dark"
}

const ColumnLessons = ({setTask, taskArr, idCurrent, theme}:Props) => {
    return(
        <ul className={ theme === "light" ? "columnLessons" : 'columnLessons dark'}>
            {
                taskArr.map((task) => {
                    return(
                        <li 
                        className={idCurrent === task.id ? "active" : "not"} 
                        key={task.id} 
                        onClick={() => {
                            setTask(task.id);
                        }}>
                            <Checkbox {...task} darkStyle={theme === "dark"}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ColumnLessons;