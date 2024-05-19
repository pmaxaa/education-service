import React from "react";
import "./style.scss";

const helpWrap = (
  boldhead: React.ReactNode,
  head: React.ReactNode,
  discription: React.ReactNode
) => {
  return (
    <div className="infoList__itemWrap">
      <dt className="infoList__headItem">
        <span className="infoList__boldhead">{boldhead}</span>
        <span className="infoList__head">{head}</span>
      </dt>
      <dd className="infoList__discriptionItem">{discription}</dd>
    </div>
  );
};

export const InfoList = () => {
  return (
    <section className="infoList">
      <h2 className="infoList__header">Список общей информации о платформе</h2>
      <dl className="infoList__list">
        {helpWrap(
          "1000+",
          "студентов",
          "Обучается на нашей платформе, и более 400 выпускников ежегодно"
        )}
        {helpWrap(
          "50",
          "преподавателей",
          "Помогают нашим студентам освоить все необходимые материалы"
        )}
        {helpWrap(
          "22",
          "страны",
          "Гражданами стольких стран являются наши студенты"
        )}
      </dl>
    </section>
  );
};
