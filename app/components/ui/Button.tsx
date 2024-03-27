import { ButtonProps } from "@/data/types";
import React from "react";

type Props = {};

const Button = ({
  title,
  buttonStyles,
  btnType,
  isDisabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`text-white uppercase font-semibold rounded-md px-5 py-2 duration-300 ease-in-out hover:shadow-lg inline-block top-0 hover:-top-1 relative ${buttonStyles}`}
      disabled={isDisabled}
      type={btnType}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
