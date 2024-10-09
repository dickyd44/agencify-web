"use client";
import Image from "next/image";
import logo from "@/assets/images/agencify-logo.png";
import { ChevronDownIcon, VerifiedIcon } from "@/assets/icon-dropdown";
import { LINK_NAVBAR } from "@/constants/link-tab";
import { useNavbarStore } from "@/utils/navbar";
import ResponsiveNavbar from "./responsive";
import Link from "next/link";
import { ButtonSolo } from "@/components/atoms/button";

export default function Navbar() {
  const {
    openDropdownIndex,
    linkActive,
    setLinkActive,
    isOpen,
    setIsOpen,
    handleOpen,
    handleDropdown,
  } = useNavbarStore();

  return (
    <nav className="bg-white border-b shadow-lg">
      <div className="2xl:container">
        <div className="relative z-40 w-full h-full p-4 md:p-5 md:px-8 flex items-center justify-between">
          {/* logo */}
          <Link href="#">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="w-[10rem] lg:w-[11rem] h-11 object-contain"
            />
          </Link>

          {/* menu */}
          <div className="hidden xl:flex items-center gap-4 lg:gap-7 text-black text-sm lg:text-base font-medium">
            {LINK_NAVBAR.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.link}
                  onClick={() => {
                    handleDropdown(index);
                    setLinkActive(index);
                  }}
                  className={`flex capitalize hover:text-pink cursor-pointer ${
                    linkActive === index ? "text-pink" : ""
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <span
                      className={`ml-1 transform transition-transform ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  )}
                </Link>

                {/* Dropdown for specific items */}
                <div
                  className={`absolute z-20 top-10 left-0 w-[20rem] bg-white border rounded-2xl shadow-lg p-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    openDropdownIndex === index && item.dropdown
                      ? "opacity-100 max-h-[350px] translate-y-0"
                      : "opacity-0 max-h-0 translate-y-[-20px]"
                  } `}
                >
                  {item.dropdown &&
                    item.dropdown.map((dropdownItem, i) => (
                      <Link
                        href={dropdownItem.link}
                        key={i}
                        className="flex items-center gap-3 py-4 hover:bg-gray-100 rounded-xl px-2"
                      >
                        {/* Add your icon handling here */}
                        <div>
                          <Image
                            src={dropdownItem.icon}
                            alt={dropdownItem.name}
                            width={100}
                            height={100}
                            className="object-contain w-[40px] h-[40px]"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="flex items-center font-semibold text-sm">
                            {dropdownItem.name}
                            {dropdownItem.verified && (
                              <span className="flex items-center justify-center gap-1.5 ml-3 text-[10px] text-green-600 bg-green-100 rounded-full w-32 h-6">
                                <VerifiedIcon />
                                La plus populaire
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-gray-500">
                            {dropdownItem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* button */}
            <ButtonSolo
              text="Demander un devis"
              className="hidden md:flex bg-pink hover:bg-pink_dark transition-all duration-100"
            />

            {/* hamburger menu */}
            <div
              onClick={handleOpen}
              className={`${
                isOpen ? "open" : ""
              } flex flex-col items-center gap-[7px] cursor-pointer xl:hidden`}
            >
              <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-pink rounded-full"></span>
              <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-pink rounded-full"></span>
              <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-pink rounded-full"></span>
            </div>
          </div>
        </div>

        {/* mobile menu could go here */}
        <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
