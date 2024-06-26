import { NavLink } from 'react-router-dom';
import './style.scss'
import React from 'react'

interface Props {
    theme: "dark" | "light",
    menuLinks: {title: string, path: string}[]
}
const Consecutivelinks = ({...props}:Props) =>{
    return(
        <nav className={ props.theme === "light"? "headerLesson" : "headerLesson dark"}>
            <ul>
                <li>
                    <NavLink to={"/catalog"}>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#797979"/>
                        </svg>
                    </NavLink>
                </li>
                {
                    props.menuLinks.map((item) => {
                        return(
                            <>
                            <span>/</span>
                            <li key={item.title}>
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>
                            </>
                        );
                    })
                }
            </ul>
        </nav>
    )
}

export default Consecutivelinks;