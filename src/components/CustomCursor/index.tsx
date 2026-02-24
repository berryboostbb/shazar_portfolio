import { useEffect, useRef, useState } from "react";

// export default function CustomCursor() {
//   const outerSize = 30;
//   const innerSize = 8;
//   const maxDistance = (outerSize - innerSize) / 2;

//   const outerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);

//   const mouse = useRef({ x: 0, y: 0 });
//   const border = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current = { x: e.clientX, y: e.clientY };
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     let animationFrameId: number;

//     const animate = () => {
//       border.current.x += (mouse.current.x - border.current.x) * 0.15;
//       border.current.y += (mouse.current.y - border.current.y) * 0.15;

//       const dx = mouse.current.x - border.current.x;
//       const dy = mouse.current.y - border.current.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       let dotX = mouse.current.x;
//       let dotY = mouse.current.y;

//       if (distance > maxDistance) {
//         const angle = Math.atan2(dy, dx);
//         dotX = border.current.x + Math.cos(angle) * maxDistance;
//         dotY = border.current.y + Math.sin(angle) * maxDistance;
//       }

//       if (outerRef.current) {
//         outerRef.current.style.transform = `translate(${border.current.x - outerSize / 2}px, ${border.current.y - outerSize / 2}px)`;
//       }

//       if (innerRef.current) {
//         innerRef.current.style.transform = `translate(${dotX - innerSize / 2}px, ${dotY - innerSize / 2}px)`;
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={innerRef}
//         className="fixed pointer-events-none z-50 bg-[#BFF747] rounded-full"
//         style={{
//           width: innerSize,
//           height: innerSize,
//         }}
//       />
//       <div
//         ref={outerRef}
//         className="fixed z-40 border border-white rounded-full pointer-events-none"
//         style={{
//           width: outerSize,
//           height: outerSize,
//         }}
//       />
//     </>
//   );
// }import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerSize = 30;
  const outerHoverScale = 2.5; // bigger on hover
  const innerSize = 8;

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Outer Circle
      if (outerRef.current) {
        outerRef.current.style.transform = `
          translate(${mouseX - outerSize / 2}px, ${mouseY - outerSize / 2}px)
          scale(${isHovering ? outerHoverScale : 1})
        `;

        outerRef.current.style.backgroundColor = isHovering
          ? "rgba(191, 247, 71, 0.3)"
          : "transparent";

        outerRef.current.style.border = isHovering ? "none" : "1px solid white";
      }

      // Inner Circle (always centered)
      if (innerRef.current) {
        innerRef.current.style.transform = `
  translate3d(${mouseX - innerSize / 2}px, ${mouseY - innerSize / 2}px, 0)
`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll(".cursor-pointer");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      <div
        ref={innerRef}
        className="fixed z-50 rounded-full pointer-events-none"
        style={{
          width: innerSize,
          height: innerSize,
          backgroundColor: "#BFF747",
        }}
      />
      <div
        ref={outerRef}
        className="fixed z-40 transition-all duration-200 ease-out rounded-full pointer-events-none"
        style={{
          width: outerSize,
          height: outerSize,
          border: "1px solid white",
        }}
      />
    </>
  );
}
