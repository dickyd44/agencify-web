import { useEffect, useState } from "react";

export function useNavbarStore() {
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
    setLinkActive(0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  const handleDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return {
    openDropdownIndex,
    linkActive,
    setLinkActive,
    isOpen,
    setIsOpen,
    handleOpen,
    handleDropdown,
  };
}
