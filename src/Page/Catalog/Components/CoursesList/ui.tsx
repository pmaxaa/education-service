import React, { useState } from "react";
import "./style.scss";
import { filterStateType } from "../Filter/ui";
import { CourseCard } from "../../../../Shared/UIKit/CourseCard/ui";

interface CoursesListProps {
  textFilter: string;
  currentCategory: string;
  filterState: filterStateType;
  theme?: "light" | "dark";
  className?: string;
}
export const CoursesList = ({
  textFilter,
  currentCategory,
  filterState,
  className,
  theme = "light",
}: CoursesListProps) => {
  const [Like, setLike] = useState<boolean>(false);
  // Здесь нужно подтянуть все курсы из стейта
  const coursesItemList: {
    id: string;
    title: string;
    description: string;
    favourite: boolean;
    cost: "бесплатно" | "платно";
    level: "новичкам" | "продвинутым" | "специалистам";
    duration_months: number;
    format: "самообучение" | "с наставником";
    status: "пройден" | "в процессе" | "новый" | "в избранном";
    categories: string[];
    questions: [{ question: string; answer: string }];
  }[] = [
    {
      id: "1",
      title: "1Название направления",
      description: "1Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "бесплатно",
      level: "специалистам",
      duration_months: 18,
      format: "с наставником",
      status: "новый",
      categories: ["Дизайн"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "2",
      title: "2Название направления",
      description: "2Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "платно",
      level: "новичкам",
      duration_months: 2,
      format: "самообучение",
      status: "пройден",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "3",
      title: "3Название направления",
      description: "3Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "бесплатно",
      level: "новичкам",
      duration_months: 4,
      format: "с наставником",
      status: "в процессе",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "4",
      title: "4Название направления",
      description: "4Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "платно",
      level: "новичкам",
      duration_months: 18,
      format: "самообучение",
      status: "в избранном",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "5",
      title: "5Название направления",
      description: "5Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "бесплатно",
      level: "специалистам",
      duration_months: 1,
      format: "самообучение",
      status: "новый",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "6",
      title: "6Название направления",
      description: "6Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "платно",
      level: "новичкам",
      duration_months: 13,
      format: "самообучение",
      status: "пройден",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
    {
      id: "7",
      title: "7Название направления",
      description: "7Краткое описание того, чем занимаются на направлении",
      favourite: Like,
      cost: "платно",
      level: "специалистам",
      duration_months: 5,
      format: "самообучение",
      status: "в избранном",
      categories: ["Игры"],
      questions: [{ question: "", answer: "" }],
    },
  ];

  const filterCoursesItem = () => {
    return coursesItemList.filter((course) => {
      if (
        currentCategory !== "" &&
        !course.categories.includes(currentCategory)
      ) {
        return false;
      }

      if (
        textFilter !== "" &&
        !course.title
          .toLocaleLowerCase()
          .trim()
          .includes(textFilter.toLocaleLowerCase().trim()) &&
        !course.description
          .toLocaleLowerCase()
          .trim()
          .includes(textFilter.toLocaleLowerCase().trim())
      ) {
        return false;
      }

      if (
        filterState.cost.length !== 0 &&
        !filterState.cost.includes(course.cost)
      ) {
        return false;
      }

      if (
        filterState.format.length !== 0 &&
        !filterState.format.includes(course.format)
      ) {
        return false;
      }

      if (
        filterState.level.length !== 0 &&
        !filterState.level.includes(course.level)
      ) {
        return false;
      }

      if (
        filterState.status.length !== 0 &&
        !filterState.status.includes(course.status)
      ) {
        return false;
      }

      if (
        filterState.duration.length !== 0 &&
        !(Math.max(...filterState.duration) > course.duration_months)
      ) {
        return false;
      }
      return true;
    });
  };
  return (
    <section
      className={
        "CoursesList CoursesList_theme_" +
        theme +
        (className ? " " + className : "")
      }
    >
      <p className="CoursesList__info">
        {(textFilter === ""
          ? "Найдено: "
          : `Найдено по запросу "${textFilter}": `) +
          filterCoursesItem().length}
      </p>
      <ul className="CoursesList__list">
        {filterCoursesItem().map((course) => {
          return (
            <li key={course.id} className="CoursesList__item">
              {
                <CourseCard
                  name={course.title}
                  description={course.description}
                  isLike={course.favourite}
                  setIsLike={setLike}
                  idCourse={course.id}
                  theme={theme}
                />
              }
            </li>
          );
        })}
      </ul>
    </section>
  );
};
