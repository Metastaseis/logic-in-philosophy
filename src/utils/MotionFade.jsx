import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function MotionFade({ children, delay = 0, y = 20 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const initialY = prefersReduced ? 0 : y;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}