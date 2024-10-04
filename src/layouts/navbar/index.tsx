"use client";
import Image from "next/image";
import logo from "@/assets/images/agencify-logo.png";
import { ArrowRightIcon } from "@/assets/icon-dropdown";
import { useEffect, useState } from "react";

const LINK_NAVBAR = [
  {
    name: "accueil",
    link: "#",
  },
  {
    name: "notre expertise",
    link: "#",
  },
  {
    name: "nos service",
    link: "#",
  },
  {
    name: "a propos",
    link: "#",
  },
  {
    name: "contact",
    link: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="bg-white border-b shadow-lg">
      <div className="container">
        <div className="w-full h-24 px-5 md:px-10 md:py-6 flex items-center justify-between">
          {/* icon */}
          <a href="#">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="w-[13rem] h-11 object-contain"
            />
          </a>

          {/* hamburger menu */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center gap-[7px] cursor-pointer md:hidden`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
          </div>

          {/* menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-black text-sm lg:text-base font-medium">
            {LINK_NAVBAR.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="capitalize hover:text-pink"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* button */}
          <div className="hidden md:flex items-center text-sm lg:text-base font-medium bg-pink rounded-full">
            <a href="#" className="h-11 w-auto px-8 flex items-center gap-4">
              <span className="text-white">
                <ArrowRightIcon />
              </span>
              <p className="text-white text-sm cursor-pointer">
                Demander un devis
              </p>
            </a>
          </div>
        </div>

        {/* mobile menu could go here */}
        {/* <NavbarDropdown isOpen={isOpen} /> */}
      </div>
    </nav>
  );
}
