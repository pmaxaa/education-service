import React from "react";
import { useLocation } from "react-router-dom";
import { MainHeader } from "../../../Widgets/MainHeader/ui";

export const CatalogPage = () => {
  const location = useLocation();
  console.log("CatalogPage state", location.state);
  return (
    <>
      <MainHeader />
      <main>CatalogPage</main>;
    </>
  );
};
