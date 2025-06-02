// author: Khoa Phan <https://www.pldkhoa.dev>

"use client"

import { createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const StackingCardsContext = createContext(null);

export default function StackingCards({
  children,
  className,
  scrollOptons,
  scaleMultiplier = 0.03,
  totalCards,
  ...props
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptons,
    target: targetRef,
  });

  return (
    <StackingCardsContext.Provider value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}>
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}) => {
  const { progress, scaleMultiplier, totalCards = 0 } = useStackingCardsContext();
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03);
  const rangeScale = [index * (1 / totalCards), 1];
  const scale = useTransform(progress, rangeScale, [1, scaleTo]);
  const top = topPosition ?? `${20 + index * 3}%`;

  return (
    <div className={cn("h-full sticky top-0", className)} {...props}>
      <motion.div className="origin-top relative h-full" style={{ top, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context) throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};
