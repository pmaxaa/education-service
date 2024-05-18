import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./style.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  theme?: "light" | "dark";
}

const InputField = forwardRef(
  ({ theme = "light", label, className, ...props }: InputProps, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current);

    return (
      <label className={"input" + (className ? " " + className : "")}>
        {label && <span className="input__title">{label}</span>}
        <input
          {...props}
          className={"input__field input__field_theme_" + theme}
          ref={innerRef}
        />
      </label>
    );
  }
);

InputField.displayName = "Input";

export const Input = InputField;
