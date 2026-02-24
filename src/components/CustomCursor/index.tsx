import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerSize = 30;
  const innerSize = 8;
  const maxDistance = (outerSize - innerSize) / 2;

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const border = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      border.current.x += (mouse.current.x - border.current.x) * 0.15;
      border.current.y += (mouse.current.y - border.current.y) * 0.15;

      const dx = mouse.current.x - border.current.x;
      const dy = mouse.current.y - border.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let dotX = mouse.current.x;
      let dotY = mouse.current.y;

      if (distance > maxDistance) {
        const angle = Math.atan2(dy, dx);
        dotX = border.current.x + Math.cos(angle) * maxDistance;
        dotY = border.current.y + Math.sin(angle) * maxDistance;
      }

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${border.current.x - outerSize / 2}px, ${border.current.y - outerSize / 2}px)`;
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${dotX - innerSize / 2}px, ${dotY - innerSize / 2}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={innerRef}
        className="fixed pointer-events-none z-50 bg-[#BFF747] rounded-full"
        style={{
          width: innerSize,
          height: innerSize,
        }}
      />
      <div
        ref={outerRef}
        className="fixed z-40 border border-white rounded-full pointer-events-none"
        style={{
          width: outerSize,
          height: outerSize,
        }}
      />
    </>
  );
}
