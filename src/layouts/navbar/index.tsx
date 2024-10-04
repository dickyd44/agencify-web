"use client";
import Image from "next/image";
import logo from "@/assets/images/agencify-logo.png";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  VerifiedIcon,
} from "@/assets/icon-dropdown";
import {
  Magento,
  Wordpress,
  Laravel,
  Woo,
  Optimize,
  Design,
  Development,
  Suivi,
} from "@/assets/images";
import { useEffect, useState } from "react";

// Data for the navbar and dropdown items
const LINK_NAVBAR = [
  {
    name: "accueil",
    link: "#",
  },
  {
    name: "notre expertise",
    link: "#",
    dropdown: [
      {
        name: "Magento",
        description: "e CMS incontournable",
        link: "#",
        icon: Magento,
      },
      {
        name: "Wordpress",
        description: "Le CMS le plus connu",
        link: "#",
        icon: Wordpress,
      },
      {
        name: "Laravel",
        description: "Le Framework compétent",
        link: "#",
        icon: Laravel,
      },
      {
        name: "WooCommerce",
        description: "Création de commerce",
        link: "#",
        icon: Woo,
      },
    ],
  },
  {
    name: "nos service",
    link: "#",
    dropdown: [
      {
        name: "Optimisation",
        description: "Web",
        link: "#",
        icon: Optimize,
        verified: true,
      },
      {
        name: "Design graphique",
        description: "Web",
        link: "#",
        icon: Design,
      },
      {
        name: "Développement web",
        description: "Web",
        link: "#",
        icon: Development,
      },
      {
        name: "Suivi & support",
        description: "Web",
        link: "#",
        icon: Suivi,
      },
    ],
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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [linkActive, setLinkActive] = useState<number | null>(null);
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

  const handleDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    setLinkActive(0);
  }, []);

  return (
    <nav className="bg-white border-b shadow-lg">
      <div className="container">
        <div className="w-full h-24 px-5 md:px-10 md:py-6 flex items-center justify-between">
          {/* logo */}
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
              <div key={index} className="relative group">
                <a
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
                      className={`ml-2 transform transition-transform ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  )}
                </a>

                {/* Dropdown for specific items */}
                {item.dropdown && openDropdownIndex === index && (
                  <div className="absolute top-10 left-0 w-[20rem] bg-white border rounded-md shadow-lg p-4">
                    {item.dropdown.map((dropdownItem, i) => (
                      <a
                        href={dropdownItem.link}
                        key={i}
                        className="flex items-center gap-3 py-4 hover:bg-gray-100 rounded-md px-2"
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
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
