import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (hash) {
        const element = document.getElementById(
          decodeURIComponent(hash.slice(1))
        );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    const frame = requestAnimationFrame(scrollToTarget);

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}