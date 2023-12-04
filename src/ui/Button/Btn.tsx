import React, { FC } from "react";
import { Wrapper } from "./BtnStyles";
import { ThemeProvider } from "styled-components";
import { CircularProgress } from "@mui/material";

export type BtnProps = {
  label: string;
  buttonActive?: boolean;
  func?: () => void;
  width: string;
  spinner?: boolean;
  height: string;
};

export const Btn: FC<BtnProps> = ({
  label,
  buttonActive,
  func,
  spinner,
  width,
  height,
}) => {
  const onclickHandler = () => {
    if (buttonActive) {
      func && func();
    }
  };
  return (
    <Wrapper
      buttonActive={buttonActive && !spinner}
      onClick={() => onclickHandler()}
      width={width as string}
      height={height as string}
    >
      {spinner ? <CircularProgress size={20} /> : label}
    </Wrapper>
  );
};

Btn.defaultProps = {
  spinner: false,
  buttonActive: true,
};
