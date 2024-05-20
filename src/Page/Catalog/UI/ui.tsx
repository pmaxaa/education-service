import React, { useState } from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import { MainHeader } from "../../../Widgets/MainHeader/ui";
import { CategoriesList } from "../Components/CategoriesList/ui";
import { Filter, filterStateType } from "../Components/Filter/ui";
import { CoursesList } from "../Components/CoursesList/ui";

export const CatalogPage = () => {
  const location = useLocation();
  console.log("CatalogPage state", location.state);

  const [CurrentCategory, setCurrentCategory] = useState<string>("");
  const [TextFilter, setTextFilter] = useState<string>("");
  const [Theme, setTheme] = useState<"light" | "dark">("light");

  const [FilterState, setFilterState] = useState<filterStateType>({
    cost: [],
    level: [],
    duration: [],
    format: [],
    status: [],
  });

  return (
    <>
      <MainHeader
        theme={Theme}
        setTheme={setTheme}
        textFilter={TextFilter}
        setTextFilter={setTextFilter}
      />
      <main className={"catalogPage__main catalogPage__main_theme_" + Theme}>
        <div className="catalogPage__mainWrap">
          <div className="catalogPage__helpBlock"></div>
          <CategoriesList
            currentCategory={CurrentCategory}
            setCurrentCategory={setCurrentCategory}
            theme={Theme}
            className="catalogPage__categoris"
          />
          <Filter
            theme={Theme}
            filterState={FilterState}
            setFilterState={setFilterState}
            className="catalogPage__filter"
          />
          <CoursesList
            currentCategory={CurrentCategory}
            textFilter={TextFilter}
            filterState={FilterState}
            theme={Theme}
            className="catalogPage__courses"
          />
        </div>
      </main>
    </>
  );
};
