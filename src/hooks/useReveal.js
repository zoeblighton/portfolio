import { useEffect } from "react";

// Adds `is-in` to every [data-reveal] element as it scrolls into view.
// Elements stay fully visible when motion is reduced or the observer is
// unavailable (the CSS only hides them under `html.motion`).
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    root.classList.add("motion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("motion");
    };
  }, []);
}
