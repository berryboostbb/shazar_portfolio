// import { useEffect, useRef, useState } from "react";

// export default function CustomCursor() {
//   const outerSize = 30;
//   const outerHoverScale = 2.5; // bigger on hover
//   const innerSize = 8;

//   const outerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);

//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // Outer Circle
//       if (outerRef.current) {
//         outerRef.current.style.transform = `
//           translate(${mouseX - outerSize / 2}px, ${mouseY - outerSize / 2}px)
//           scale(${isHovering ? outerHoverScale : 1})
//         `;

//         outerRef.current.style.backgroundColor = isHovering
//           ? "rgba(191, 247, 71, 0.3)"
//           : "transparent";

//         outerRef.current.style.border = isHovering ? "none" : "1px solid white";
//       }

//       // Inner Circle (always centered)
//       if (innerRef.current) {
//         innerRef.current.style.transform = `
//           translate(${mouseX - innerSize / 2}px, ${mouseY - innerSize / 2}px)
//         `;
//       }
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     const hoverElements = document.querySelectorAll(".cursor-pointer");
//     hoverElements.forEach((el) => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       hoverElements.forEach((el) => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, [isHovering]);

//   return (
//     <>
//       <div
//         ref={innerRef}
//         className="fixed z-50 rounded-full pointer-events-none"
//         style={{
//           width: innerSize,
//           height: innerSize,
//           backgroundColor: "#BFF747",
//         }}
//       />
//       <div
//         ref={outerRef}
//         className="fixed z-40 transition-all duration-200 ease-out rounded-full pointer-events-none"
//         style={{
//           width: outerSize,
//           height: outerSize,
//           border: "1px solid white",
//         }}
//       />
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerSize = 30;
  const innerSize = 8;
  const innerHoverScale = 8; // how much inner grows on hover

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Outer Circle
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${mouseX - outerSize / 2}px, ${
          mouseY - outerSize / 2
        }px)`;
        // Hide outer when hovering
        outerRef.current.style.opacity = isHovering ? "0" : "1";
      }

      // Inner Circle
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${
          mouseX - innerSize / 2
        }px, ${mouseY - innerSize / 2}px) scale(${isHovering ? innerHoverScale : 1})`;
        innerRef.current.style.backgroundColor = isHovering
          ? "rgba(191, 247, 71, 0.3)"
          : "#BFF747";
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
      {/* Inner Circle (expands on hover) */}
      <div
        ref={innerRef}
        className="fixed z-50 transition-all duration-300 ease-out rounded-full pointer-events-none"
        style={{
          width: innerSize,
          height: innerSize,
          backgroundColor: "#BFF747",
        }}
      />

      {/* Outer Circle (disappears on hover) */}
      <div
        ref={outerRef}
        className="fixed z-40 transition-opacity duration-300 ease-out rounded-full pointer-events-none"
        style={{
          width: outerSize,
          height: outerSize,
          border: "1px solid white",
        }}
      />
    </>
  );
}
