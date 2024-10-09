import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINK_NAVBAR } from "@/constants/link-tab";

export function useResponsiveStore({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [linkActive, setLinkActive] = useState<string | null>(null);

  const pathname = usePathname();

  const handleDropdown = (index: number) => {
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

    const preventScrollClose = (event: Event) => {
      event.stopPropagation();
    };

    window.addEventListener("resize", handleResize);

    if (isOpen) {
      window.addEventListener("scroll", preventScrollClose);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", preventScrollClose);
    };
  }, [isOpen]);

  return {
    openDropdownIndex,
    setOpenDropdownIndex,
    linkActive,
    setLinkActive,
    handleDropdown,
  };
}
