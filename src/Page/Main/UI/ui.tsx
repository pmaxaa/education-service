import React from "react";
import "./style.scss";
import { MainHeader } from "../../../Widgets/MainHeader/ui";
import { InfoList } from "../Component/InfoList/ui";

export const MainPage = () => {
  return (
    <>
      <MainHeader />
      <main className="mainPage">
        <InfoList />
      </main>
      ;
    </>
  );
};
