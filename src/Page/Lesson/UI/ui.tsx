import React, { useState } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ColumnLessons from "../Components/ColumnLessons/ui";
import VideoLesson from "../Components/Video/ui";
import './style.scss'
interface lessonParams {
  id: string;
}
export const lessonLoader = ({ params }: LoaderFunctionArgs<lessonParams>) => {
  return params;
};
export const LessonPage = () => {
  const { id } = useLoaderData() as lessonParams;
  
  const [numTask, setNumTask] = useState('1');
  const [Theme, setTheme] = useState<"light" | "dark">("dark");
  // we need info from state 
  const taskArr = [
    {
      id:"1",
      name:'Задание 1. Очень длинное название задания аж на 2 строчки',
      time:'15 мин',
    },
    {
      id:"2",
      name:'Задание 1. Очень длинное название задания аж на 2 строчки',
      time:'15 мин',
    },
    {
      id:"3",
      name:'Задание 1. Очень длинное название задания аж на 2 строчки',
      time:'15 мин',
    },
    {
      id:"4",
      name:'Задание 1. Очень длинное название задания аж на 2 строчки',
      time:'15 мин',
    },
    {
      id:"5",
      name:'Задание 1. Очень длинное название задания аж на 2 строчки',
      time:'15 мин',
    }
  ]
  const videoInfo = [
    {
      LinkVideo:"https://vk.com/video_ext.php?oid=-220754053&id=456240800&hd=2",
      id:"1",
      nameVideo:"Kossom Elsisi 1",
    },
    {
      LinkVideo:"https://vk.com/video_ext.php?oid=-220754053&id=456240800&hd=2",
      id:"2",
      nameVideo:"Kossom Elsisi 2",
    },
    {
      LinkVideo:"https://vk.com/video_ext.php?oid=-220754053&id=456240800&hd=2",
      id:"3",
      nameVideo:"Kossom Elsisi 3",
    },
    {
      LinkVideo:"https://vk.com/video_ext.php?oid=-220754053&id=456240800&hd=2",
      id:"4",
      nameVideo:"Kossom Elsisi 4",
    },
    {
      LinkVideo:"https://vk.com/video_ext.php?oid=-220754053&id=456240800&hd=2",
      id:"5",
      nameVideo:"Kossom Elsisi 5",
    }
  ]
  const getVideoInfoItemById = (id:string) => {
    return videoInfo.find( (item) => {
      return (item.id === id);
    })
  }
  const videoLessonItem = getVideoInfoItemById(numTask);
  return (
    <>
      <main>LessonPage {id}</main>
      <div className="lessonPage">
        <ColumnLessons taskArr={taskArr} setTask={setNumTask} idCurrent={numTask} theme={Theme} />
        {
          videoLessonItem !== undefined && <VideoLesson {...videoLessonItem} theme={Theme} />
        }
      </div>
    </>
  );
};
