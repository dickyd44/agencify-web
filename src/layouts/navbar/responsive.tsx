"use client";
import { ChevronDownIcon, VerifiedIcon } from "@/assets/icon-dropdown";
import { ButtonSoloResponsive } from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import { useResponsiveStore } from "@/utils/responsive";
import { LINK_NAVBAR } from "@/constants/link-tab";

interface ResponsiveNavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ResponsiveNavbar({
  isOpen,
  setIsOpen,
}: ResponsiveNavbarProps) {
  const { openDropdownIndex, linkActive, setLinkActive, handleDropdown } =
    useResponsiveStore({ isOpen, setIsOpen });

  return (
    <section className="relative">
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-screen h-screen fixed z-10 bg-white p-5 md:p-6 transition-transform duration-500 overflow-y-auto`}
      >
        <div className="flex flex-col gap-6 pb-16">
          {LINK_NAVBAR.map((link, idx) => (
            <div
              key={idx}
              className="font-medium border-b border-gray-200 pb-4"
            >
              {link.dropdown ? (
                <div className="text-left">
                  <button
                    onClick={() => {
                      handleDropdown(idx);
                      setLinkActive(link.name);
                    }}
                    className={`flex justify-between w-full relative hover:text-pink capitalize ${
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
                          className="flex items-center gap-4 p-4 mt-2 hover:bg-gray-100 rounded-md"
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
              className="bg-pink text-white hover:bg-pink_dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
