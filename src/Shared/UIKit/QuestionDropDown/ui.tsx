import React, { useState } from "react";
import "./style.scss";
import { DropDown } from "../DropDown/ui";

interface QuestionDropDownProps {
  question: string;
  answer: string;
  theme?: "light" | "dark";
}
export const QuestionDropDown = ({
  question,
  answer,
  theme = "light",
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
      className={"questionDropDown" + (" questionDropDown_theme_" + theme)}
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
