import { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  
  // High-performance refs to hold mouse and trailing coordinates without React re-renders
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });

  // 1. Detect touch devices, coarse pointers, and small screen viewports (mobile/tablet)
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024; // Disable on tablet and mobile viewports
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Set up mouse listeners and insert global cursor overrides
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Global CSS style override to hide standard OS cursor on desktop
    const style = document.createElement("style");
    style.id = "custom-cursor-override";
    style.innerHTML = `
      *, body, a, button, input, select, textarea, [role='button'], .hover-lift {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      const addedStyle = document.getElementById("custom-cursor-override");
      if (addedStyle) addedStyle.remove();
    };
  }, [isMobile, isHidden]);

  // 3. Hardware accelerated rendering loop using requestAnimationFrame updating styles directly
  useEffect(() => {
    if (isMobile || isHidden) return;

    let animId: number;

    const tick = () => {
      const ease = 0.15; // Smooth trailing delay coefficient
      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;
      
      trailRef.current.x += dx * ease;
      trailRef.current.y += dy * ease;

      // Direct style updates bypass React's reconciliation loop for true 60fps movement
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isMobile, isHidden]);

  // 4. High-performance event delegation on the document body for hover states
  // Eliminates individual element listeners, querySelectors, and MutationObservers
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = target.closest(
        "a, button, input, select, textarea, [role='button'], .hover-lift, .group"
      );
      setIsHovered(!!isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Inner glowing dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] bg-primary -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out shadow-[0_0_8px_rgba(102,26,45,0.4)] ${
          isHovered ? "scale-[0.6] bg-gold" : ""
        }`}
        style={{
          transform: `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`,
          willChange: "transform",
        }}
      />
      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998] border border-gold/75 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovered
            ? "w-12 h-12 bg-gold/15 border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-110"
            : ""
        }`}
        style={{
          transform: `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`,
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
