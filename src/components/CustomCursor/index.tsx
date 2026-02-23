import { useEffect, useState } from "react";

export default function CustomCursor() {
  const outerSize = 30;
  const innerSize = 8;
  const maxDistance = (outerSize - innerSize) / 2;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [border, setBorder] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setBorder((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.15,
        y: prev.y + (cursor.y - prev.y) * 0.15,
      }));
      const dx = cursor.x - border.x;
      const dy = cursor.y - border.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let newX = cursor.x;
      let newY = cursor.y;
      if (distance > maxDistance) {
        const angle = Math.atan2(dy, dx);
        newX = border.x + Math.cos(angle) * maxDistance;
        newY = border.y + Math.sin(angle) * maxDistance;
      }

      setDot({ x: newX, y: newY });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursor, border]);

  return (
    <>
      <div
        className="fixed pointer-events-none h-2 w-2 bg-[#BFF747] rounded-full z-50"
        style={{
          left: dot.x - innerSize / 2,
          top: dot.y - innerSize / 2,
        }}
      ></div>
      <div
        className="fixed pointer-events-none h-8 w-8 rounded-full border border-white z-40"
        style={{
          left: border.x - outerSize / 2,
          top: border.y - outerSize / 2,
        }}
      ></div>
    </>
  );
}
