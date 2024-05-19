import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { MainHeader } from "../../../Widgets/MainHeader/ui";

interface courseParams {
  id: string;
}
export const courseLoader = ({ params }: LoaderFunctionArgs<courseParams>) => {
  return params;
};
export const CoursePage = () => {
  //получили id курса из адресной строки, потом в useEffect нужно будет подтянуть данные о курсе
  const { id } = useLoaderData() as courseParams;

  return (
    <>
      <MainHeader />
      <main>CoursePage {id}</main>;
    </>
  );
};
