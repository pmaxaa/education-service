import React, { useState } from "react";
import "./style.scss";
import { MainHeader } from "../../../Widgets/MainHeader/ui";
import { InfoList } from "../Component/InfoList/ui";
import { CoursesList } from "../Component/CoursesList/ui";
import { TeachersList } from "../Component/TeachersList/ui";

export const MainPage = () => {
  const [Theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <MainHeader theme={Theme} setTheme={setTheme} />
      <main className={"mainPage" + " mainPage_theme_" + Theme}>
        <InfoList theme={Theme} />
        <CoursesList theme={Theme} />
        <TeachersList theme={Theme} />
      </main>
    </>
  );
};
