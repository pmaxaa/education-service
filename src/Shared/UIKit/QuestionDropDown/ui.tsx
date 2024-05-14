import React, { useState } from "react";
import "./style.scss";
import { DropDown } from "../DropDown/ui";

interface QuestionDropDownProps {
  question: string;
  answer: string;
}
export const QuestionDropDown = ({
  question,
  answer,
}: QuestionDropDownProps) => {
  const [show, setShow] = useState<boolean>(false);

  const mainBlockSlot = (
    <h4
      className={
        "questionDropDown__question" +
        (show ? " questionDropDown__question_open" : "")
      }
    >
      {question}
    </h4>
  );
  const dropdownBlockSlot = (
    <p className={"questionDropDown__answer"}>{answer}</p>
  );
  return (
    <DropDown
      className="questionDropDown"
      show={show}
      setShow={setShow}
      mainBlockSlot={mainBlockSlot}
      mainBlockParams={{
        tabIndex: 0,
      }}
      dropdownBlockSlot={dropdownBlockSlot}
    />
  );
};
