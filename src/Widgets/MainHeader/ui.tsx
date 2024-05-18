import React from "react";
import { HeaderTemplate } from "../../Shared/UIKit/HeaderTemplate/ui";
import { SearchDropDown } from "../../Features/SearchDropDown/ui";

interface MainHeaderProps {
  theme?: "light" | "dark";
  onClickCategory?: (v: string) => void;
  textFilter?: string;
  setTextFilter?: (v: string) => void;
}
export const MainHeader = ({ ...props }: MainHeaderProps) => {
  // Здесь нужно получить все категории(направления или теги) из стейта. Пока заполнен от руки
  const allCategories = [
    "Все курсы",
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
    <HeaderTemplate>
      <SearchDropDown allCategories={allCategories} {...props} />
    </HeaderTemplate>
  );
};
