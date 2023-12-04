import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  buttonStyles?: string;
  btnType: "button" | "submit";
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
