import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Logo } from "../Logo/ui";
import { DropDown } from "../DropDown/ui";
import Button from "../../UI/Button/Button";

interface HeaderTemplateProps {
  children: React.ReactNode | React.ReactNode[];
  theme?: "light" | "dark";
  isWithMenu?: boolean;
}
export const HeaderTemplate = ({
  theme = "light",
  children,
  isWithMenu = true,
}: HeaderTemplateProps) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const menuItems: {
    title: string;
    path: string;
  }[] = [
    {
      title: "Каталог",
      path: "/catalog",
    },
    {
      title: "О проекте",
      path: "/",
    },
    {
      title: "Контакты",
      path: "/",
    },
  ];
  return (
    <header className={"header" + (!isWithMenu ? " header_withoutMenu" : "")}>
      <button
        type="button"
        className={
          "header__burger" + (isShowMenu ? " header__burger_active" : "")
        }
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <span className="header__burger__helper"></span>
        Open/close nav menu
      </button>
      <NavLink className={"header__logo"} to={"/"}>
        <Logo color="white" />
      </NavLink>
      {isWithMenu && (
        <nav
          className={
            "header__menu" + (isShowMenu ? " header__menu_active" : "")
          }
        >
          <ul className="header__menuList">
            {menuItems.map((item) => {
              return (
                <li className="header__menuItem" key={item.title}>
                  <NavLink className="header__menuBtn" to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <div className="header__slot">{children}</div>
      <button
        className={
          "header__themeBtn" +
          (theme === "dark" ? " header__themeBtn_dark" : "")
        }
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10 18.5V1.5C12.2543 1.5 14.4163 2.39553 16.0104 3.98959C17.6045 5.58365 18.5 7.74566 18.5 10C18.5 12.2543 17.6045 14.4163 16.0104 16.0104C14.4163 17.6045 12.2543 18.5 10 18.5Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Button
        className="header__educationBtn"
        href="/"
        label="Моё обучение"
        tag="a"
        size="header"
        theme="stroke"
      />
      <DropDown
        className="header__notification"
        mainBlockSlot={
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z"
              fill="currentColor"
            />
          </svg>
        }
        dropdownBlockSlot={<div>Здесь лежат уведомления</div>}
      />
      <a href="/" className="header__profile">
        S
      </a>
    </header>
  );
};
