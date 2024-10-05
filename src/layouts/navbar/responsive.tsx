"use client";
import { ChevronDownIcon, VerifiedIcon } from "@/assets/icon-dropdown";
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
import { ButtonSoloResponsive } from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
        description: "Le CMS incontournable",
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
    name: "nos services",
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
        description: "Web & print",
        link: "#",
        icon: Design,
      },
      {
        name: "Développement web",
        description: "Desktop & Mobile",
        link: "#",
        icon: Development,
      },
      {
        name: "Suivi & support",
        description: "Dans votre projet",
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

export default function ResponsiveNavbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [linkActive, setLinkActive] = useState<string | null>(null);

  const pathname = usePathname();

  const handleDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const activeLink = LINK_NAVBAR.find((link) => link.link === pathname);
    if (activeLink) {
      setLinkActive(activeLink.name);
    } else {
      setLinkActive(null);
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } absolute top-0 left-0 w-full h-screen bg-white p-5 md:p-6 transition-transform duration-500 z-40`}
    >
      <div className="flex flex-col gap-6 mt-16 md:mt-20">
        {LINK_NAVBAR.map((link, idx) => (
          <div key={idx} className="font-medium border-b border-gray-200 pb-5">
            {link.dropdown ? (
              <div className="text-left">
                <button
                  onClick={() => {
                    handleDropdown(idx);
                    setLinkActive(link.name);
                  }}
                  className={`mb-1.5 flex justify-between w-full relative hover:text-pink capitalize ${
                    linkActive === link.name ? "text-pink" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`ml-1 transform transition-transform ${
                      openDropdownIndex === idx ? "-rotate-90" : ""
                    }`}
                  >
                    <ChevronDownIcon />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    openDropdownIndex === idx && link.dropdown
                      ? "max-h-96"
                      : "max-h-0"
                  }`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {link.dropdown &&
                    link.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.link}
                        className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-md"
                      >
                        <Image
                          src={dropdownItem.icon}
                          alt={dropdownItem.name}
                          width={500}
                          height={500}
                          className="w-7 h-7"
                        />
                        <div className="w-full">
                          <span className="flex items-center justify-between text-gray-800 font-semibold">
                            {dropdownItem.name}
                            {dropdownItem.verified && (
                              <span className="flex items-center justify-center gap-1 5 ml-3 text-[10px] text-green-600 bg-green-100 rounded-full w-32 h-6">
                                <VerifiedIcon />
                                La plus populaire
                              </span>
                            )}
                          </span>
                          <p className="text-gray-500 text-sm">
                            {dropdownItem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ) : (
              <Link
                onClick={() => {
                  setLinkActive(link.name);
                  handleDropdown(idx);
                }}
                href={link.link}
                className={`capitalize hover:text-pink ${
                  linkActive === link.name ? "text-pink" : ""
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        {/* CTA Button */}
        <div className="mt-3 mb-10 flex justify-center md:hidden">
          <ButtonSoloResponsive
            text="Demander un devis"
            className="bg-pink text-white"
          />
        </div>
      </div>
    </div>
  );
}