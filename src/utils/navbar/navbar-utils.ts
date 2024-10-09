import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

export function useNavbarStore() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [linkActive, setLinkActive] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [logoAvailable, setLogoAvailable] = useState(true);
  const logoRef = useRef(null);
  const navRef = useRef(null);

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

  // Animation GSAP
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0, y: "50%" },
      { scale: 1, opacity: 1, y: "0%", duration: 1 }
    );

    tl.to(logoRef.current, {
      duration: 1,
      y: 0,
      x: 0,
      onComplete: () => {
        gsap.to(
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }
        );
      },
    });
  }, []);

  return {
    openDropdownIndex,
    linkActive,
    setLinkActive,
    isOpen,
    setIsOpen,
    logoRef,
    navRef,
    handleOpen,
    handleDropdown,
  };
}
