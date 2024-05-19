import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface lessonParams {
  id: string;
}
export const lessonLoader = ({ params }: LoaderFunctionArgs<lessonParams>) => {
  return params;
};
export const LessonPage = () => {
  const { id } = useLoaderData() as lessonParams;
  return (
    <>
      <main>LessonPage {id}</main>;
    </>
  );
};
