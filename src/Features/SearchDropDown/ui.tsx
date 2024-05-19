import React, { useEffect, useState } from "react";
import "./style.scss";
import { DropDown } from "../../Shared/UIKit/DropDown/ui";
import { Input } from "../../Shared/UIKit/Input/ui";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Shared/UI/Button/Button";

interface SearchDropDownProps {
  allCategories: string[];
  theme?: "light" | "dark";
  onClickCategory?: (v: string) => void;
  textFilter?: string;
  setTextFilter?: (v: string) => void;
}
export const SearchDropDown = ({
  theme,
  allCategories,
  onClickCategory,
  textFilter,
  setTextFilter,
}: SearchDropDownProps) => {
  const [InnerTextFilter, setInnerTextFilter] = useState<string>(
    textFilter || ""
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (textFilter) setInnerTextFilter(textFilter);
  }, [textFilter]);

  const onKeyDownInput = () => {
    if (setTextFilter) setTextFilter(InnerTextFilter);

    const coincidenceCategory = allCategories.find((category) => {
      return (
        category.toLocaleLowerCase().trim() ===
        InnerTextFilter.toLocaleLowerCase().trim()
      );
    });
    const navigateState: { textFilter: string; category?: string } = {
      textFilter: InnerTextFilter,
    };

    if (coincidenceCategory) {
      if (onClickCategory) {
        onClickCategory(coincidenceCategory);
      }
      navigateState.category = coincidenceCategory;
    }

    if (location.pathname !== "/catalog") {
      navigate("/catalog", { state: navigateState });
    }
  };

  const mainBlockSlot = (
    <Input
      className="searchDropDown__input"
      theme={theme}
      value={InnerTextFilter}
      onChange={(e) => {
        setInnerTextFilter(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          onKeyDownInput();
        }
      }}
    />
  );
  const dropdownBlockSlot = (
    <ul
      className={
        "searchDropDown__categoryList" +
        " searchDropDown__categoryList_theme_" +
        theme
      }
    >
      {allCategories.map((category) => {
        return (
          <li key={category} className="searchDropDown__categoryItem">
            {location.pathname === "/catalog" ? (
              <Button
                theme={
                  InnerTextFilter.toLocaleLowerCase().trim() ===
                  category.toLocaleLowerCase().trim()
                    ? "filled"
                    : "stroke"
                }
                label={category}
                size="search"
                onClick={() => {
                  if (onClickCategory) onClickCategory(category);
                }}
              />
            ) : (
              <NavLink
                to={"/catalog"}
                state={{
                  category,
                  textFilter: category,
                }}
              >
                <Button
                  label={category}
                  size="search"
                  theme={
                    InnerTextFilter.toLocaleLowerCase().trim() ===
                    category.toLocaleLowerCase().trim()
                      ? "filled"
                      : "stroke"
                  }
                />
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
  return (
    <DropDown
      className="searchDropDown"
      mainBlockSlot={mainBlockSlot}
      dropdownBlockSlot={dropdownBlockSlot}
      isNoOpeningWhenOnClick
      dropdownBlockParams={{
        style: {
          position: "absolute",
        },
      }}
      isClosedWhenLosesActivity
      isOpeningWhenGetFocus
    />
  );
};
