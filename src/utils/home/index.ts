import gsap from "gsap";
import { useEffect, useRef } from "react";

export function useMainStore() {
  const logoRef = useRef(null);

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
    logoRef,
  };
}
