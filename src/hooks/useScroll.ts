import { useEffect, useRef } from "react";

export const useScroll = (duration = 3000) => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      scrollToRef.current.style.scrollBehavior = `smooth`;
      scrollToRef.current.style.transitionDuration = `${duration}ms`;
    }
  }, [duration]);
  return { scrollToRef };
};
