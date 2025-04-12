import React, { ButtonHTMLAttributes } from "react";

type ButtonPropsType = {
  variant: "primary" | "secondary";
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  text,
  ...props
}: ButtonPropsType) {
  const variantClasses = {
    primary: "bg-neutral-50 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200",
    secondary:
      "bg-transparent hover:bg-neutral-600 text-neutral-50 outline-neutral-50 active:outline-neutral-100",
  };
  return (
    <button
      {...props}
      className={`
        rounded-full 
        px-1.5 
        py-1.5
        outline-1 
        outline-transparent 
        border-0 
        text-xs 
        font-regular
        leading-none
        sm:text-base
        sm:font-semibold
        sm:px-2
        sm:py-2
        md:px-3
        hover:cursor-pointer
        active:scale-105
        
        ${variantClasses[variant]}
      `}
    >
      {text}
    </button>
  );
}
