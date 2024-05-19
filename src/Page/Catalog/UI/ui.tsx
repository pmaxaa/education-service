import React, { useState } from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import { MainHeader } from "../../../Widgets/MainHeader/ui";
import { CategoriesList } from "../Components/CategoriesList/ui";
import { Filter, filterStateType } from "../Components/Filter/ui";

export const CatalogPage = () => {
  const location = useLocation();
  console.log("CatalogPage state", location.state);

  const [CurrentCategory, setCurrentCategory] = useState<string>("");
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
      <MainHeader theme={Theme} setTheme={setTheme} />
      <main className="catalogPage__main">
        <div className="catalogPage__mainWrap">
          <CategoriesList
            currentCategory={CurrentCategory}
            setCurrentCategory={setCurrentCategory}
            theme={Theme}
          />
          <Filter
            theme={Theme}
            filterState={FilterState}
            setFilterState={setFilterState}
          />
        </div>
      </main>
    </>
  );
};
