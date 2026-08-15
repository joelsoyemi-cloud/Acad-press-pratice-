import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        background:
          "radial-gradient(circle, rgba(152,40,54,0.10) 0%, rgba(152,40,54,0.04) 40%, rgba(152,40,54,0) 70%)",
      }}
      className="fixed top-0 left-0 w-150 h-150 rounded-full pointer-events-none z-0"
    />
  );
}
