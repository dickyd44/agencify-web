import { ArrowRightIcon } from "@/assets/icon-dropdown";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

export function ButtonSolo({ text, className }: ButtonProps) {
  return (
    <div
      className={`${className} items-center text-sm lg:text-base font-medium rounded-full`}
    >
      <Link href="#" className="h-11 w-auto px-8 flex items-center gap-4">
        <span className="text-white">
          <ArrowRightIcon />
        </span>
        <p className="text-white text-sm cursor-pointer">{text}</p>
      </Link>
    </div>
  );
}

export function ButtonSoloResponsive({ text, className }: ButtonProps) {
  return (
    <Link
      href="#"
      className={`${className} flex items-center gap-4 px-6 py-3 rounded-full transition`}
    >
      <ArrowRightIcon />
      {text}
    </Link>
  );
}

export function ButtonDuo({ text, className }: ButtonProps) {
  return (
    <button
      className={`${className} w-72 lg:w-60 xl:w-64 h-12 text-center lg:text-sm 2xl:text-base`}
    >
      {text}
    </button>
  );
}

export function ButtonDuoResponsive({ text, className }: ButtonProps) {
  return (
    <button
      className={`${className} w-64 md:w-72 h-12 text-center lg:text-sm 2xl:text-base`}
    >
      {text}
    </button>
  );
}
