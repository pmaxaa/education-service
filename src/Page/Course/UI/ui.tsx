import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface courseParams {
  id: string;
}
export const courseLoader = ({ params }: LoaderFunctionArgs<courseParams>) => {
  return params;
};
export const CoursePage = () => {
  const { id } = useLoaderData() as courseParams;
  return <main>CoursePage {id}</main>;
};
