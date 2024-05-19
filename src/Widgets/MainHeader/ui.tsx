import React from "react";
import { HeaderTemplate } from "../../Shared/UIKit/HeaderTemplate/ui";
import { SearchDropDown } from "../../Features/SearchDropDown/ui";

interface MainHeaderProps {
  theme?: "light" | "dark";
  onClickCategory?: (v: string) => void;
  textFilter?: string;
  setTextFilter?: (v: string) => void;
  setTheme?: (v: "light" | "dark") => void;
}
export const MainHeader = ({ setTheme, ...props }: MainHeaderProps) => {
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
    <HeaderTemplate theme={props.theme} setTheme={setTheme}>
      <SearchDropDown allCategories={allCategories} {...props} />
    </HeaderTemplate>
  );
};
