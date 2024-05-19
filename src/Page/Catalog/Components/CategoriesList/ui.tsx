import React from "react";
import "./style.scss";
import Button from "../../../../Shared/UIKit/Button/Button";

interface CategoriesListProps {
  theme?: "light" | "dark";
  currentCategory: string;
  setCurrentCategory: (v: string) => void;
  className?: string;
}
export const CategoriesList = ({
  theme = "light",
  currentCategory,
  setCurrentCategory,
  className,
}: CategoriesListProps) => {
  // Здесь нужно получить все категории(направления или теги) из стейта. Пока заполнен от руки
  const allCategories = [
    "Программирование",
    "Английский",
    "Бизнес",
    "Менеджмент",
    "Инвестиции",
    "Маркетинг",
    "Психология",
    "Инженерия",
    "Аналитика",
    "Дизайн",
    "Игры",
    "Здоровье",
    "Текст",
    "Финансы",
    "Другое",
  ];
  return (
    <section
      className={
        "categoriesList" +
        " categoriesList_theme_" +
        theme +
        (className ? " " + className : "")
      }
    >
      <h1 className="categoriesList__head">
        {currentCategory === "" ? "Все курсы" : currentCategory}
      </h1>
      <ul
        className={
          "categoriesList__categoryList" +
          " categoriesList__categoryList_theme_" +
          theme
        }
      >
        <li className="categoriesList__categoryItem">
          {
            <Button
              className={
                currentCategory.toLocaleLowerCase().trim() === ""
                  ? "categoriesList__categoryItemBtn_activ"
                  : ""
              }
              theme={
                currentCategory.toLocaleLowerCase().trim() === ""
                  ? "filled"
                  : "stroke"
              }
              label={"Все курсы"}
              size="search"
              onClick={() => {
                setCurrentCategory("");
              }}
            />
          }
        </li>
        {allCategories.map((category) => {
          return (
            <li key={category} className="categoriesList__categoryItem">
              <Button
                theme={
                  currentCategory.toLocaleLowerCase().trim() ===
                  category.toLocaleLowerCase().trim()
                    ? "filled"
                    : "stroke"
                }
                label={category}
                size="search"
                onClick={() => {
                  setCurrentCategory(category);
                }}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
