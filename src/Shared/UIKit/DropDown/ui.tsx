import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

type DropDownProps = {
  className?: string;
  mainBlockSlot: React.ReactNode;
  mainBlockParams?: React.HTMLAttributes<HTMLElement>;
  dropdownBlockSlot: React.ReactNode;
  dropdownBlockParams?: React.HTMLAttributes<HTMLElement>;
  isClosedWhenLosesActivity?: boolean;
  isOpeningWhenGetFocus?: boolean;
  isNoOpeningWhenOnClick?: boolean;
} & (
  | {
      show: boolean;
      setShow: (v: boolean) => void;
    }
  | {
      show?: undefined;
      setShow?: undefined;
    }
);
export const DropDown = ({
  className,
  show,
  setShow,
  mainBlockSlot,
  mainBlockParams,
  dropdownBlockSlot,
  dropdownBlockParams,
  isClosedWhenLosesActivity,
  isOpeningWhenGetFocus,
  isNoOpeningWhenOnClick,
}: DropDownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [innerShow, setInnerShow] = useState<boolean>(
    show !== undefined ? show : false
  );
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (show !== undefined) {
      setInnerShow(show);
    }
  }, [show]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent | FocusEvent) => {
      if (
        e.target instanceof Node &&
        !dropdownRef.current?.contains(e.target)
      ) {
        setShow ? setShow(false) : setInnerShow(false);
      }
    };
    if (isClosedWhenLosesActivity) {
      document.addEventListener("click", onClickOutside);
      document.addEventListener("focusin", onClickOutside);
    }
    return () => {
      if (isClosedWhenLosesActivity) {
        document.removeEventListener("click", onClickOutside);
        document.removeEventListener("focusin", onClickOutside);
      }
    };
  }, []);

  return (
    <div
      className={"dropdown" + (className ? " " + className : "")}
      ref={dropdownRef}
    >
      <div
        {...mainBlockParams}
        className={
          "dropdown__mainBlockSlot" +
          (mainBlockParams?.className ? " " + mainBlockParams.className : "") +
          (innerShow ? " dropdown__mainBlockSlot_open" : "")
        }
        onClick={(e) => {
          if (mainBlockParams?.onClick) mainBlockParams.onClick(e);
          if (!focus && !isNoOpeningWhenOnClick) {
            setShow ? setShow(!innerShow) : setInnerShow(!innerShow);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            if (mainBlockParams?.onKeyDown) mainBlockParams.onKeyDown(e);
            setShow ? setShow(!innerShow) : setInnerShow(!innerShow);
          }
        }}
        onFocusCapture={(e) => {
          if (isOpeningWhenGetFocus) {
            setFocus(true);
            setTimeout(() => {
              setFocus(false);
            }, 500);
            if (mainBlockParams?.onFocusCapture)
              mainBlockParams.onFocusCapture(e);
            setShow ? setShow(true) : setInnerShow(true);
          }
        }}
      >
        {mainBlockSlot}
      </div>
      {innerShow && (
        <div
          {...dropdownBlockParams}
          className={
            "dropdown__dropdownBlock" +
            (dropdownBlockParams?.className
              ? " " + dropdownBlockParams.className
              : "")
          }
        >
          {dropdownBlockSlot}
        </div>
      )}
    </div>
  );
};
