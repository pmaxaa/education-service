import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../UI/Layout/ui";
import { MainPage } from "../../Page/Main";
import { CatalogPage } from "../../Page/Catalog";
import { CoursePage, courseLoader } from "../../Page/Course";
import { LessonPage, lessonLoader } from "../../Page/Lesson";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/course/:id",
        element: <CoursePage />,
        loader: courseLoader,
      },
      {
        path: "/lesson/:id",
        element: <LessonPage />,
        loader: lessonLoader,
      },
    ],
  },
]);
