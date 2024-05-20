import React, { useState } from "react";
import "./style.scss";
import Button from "../../../../Shared/UIKit/Button/Button";
import { NavLink } from "react-router-dom";
import { CourseCard } from "../../../../Shared/UIKit/CourseCard/ui";

interface CoursesListProps {
  theme?: "light" | "dark";
}
export const CoursesList = ({ theme = "light" }: CoursesListProps) => {
  const [Like, setLike] = useState<boolean>(false);
  // Здесь нужно подтянуть 10шт курсов из стейта
  const coursesItemList: {
    name: string;
    description: string;
    isSelected?: boolean;
    idCourse: string;
    isLike: boolean;
    setIsLike: (v: boolean) => void;
    theme?: "light" | "dark";
  }[] = [
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "1",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "2",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "3",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "4",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "5",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "6",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "7",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "8",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "9",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
    {
      name: "Название направления",
      description: "Краткое описание того, чем занимаются на направлении",
      idCourse: "10",
      isLike: Like,
      setIsLike: setLike,
      theme: theme ? theme : "light",
    },
  ];
  return (
    <section className={"coursesList" + " coursesList_theme_" + theme}>
      <div className="coursesList__wrap">
        <h2 className="coursesList__head">Направления обучения</h2>
        <ul className="coursesList__list">
          {coursesItemList.map((course) => {
            return (
              <li key={course.name} className="coursesList__item">
                <CourseCard {...course} />
              </li>
            );
          })}
        </ul>
        <NavLink to={"/catalog"} className="coursesList__btn">
          <Button label="В каталог" />
        </NavLink>
      </div>
    </section>
  );
};
