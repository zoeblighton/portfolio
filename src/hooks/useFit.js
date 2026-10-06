import { useEffect } from "react";

// Scales every [data-fit] headline so its widest line spans the container
// exactly, edge to edge. Line indents (mask padding, in %) are respected.
// Optional `data-fit-offset` caps the size so all lines fit within the
// viewport height minus that many pixels (used by the hero) – but never
// below 75% of the full-width size, so short screens keep the scale.
// Without JS the CSS clamp() size stays in place.
// Largest size at which every line fits, measured at `px`.
function measure(el, lines, px) {
  el.style.fontSize = `${px}px`;
  const avail = el.clientWidth;
  let size = Infinity;
  lines.forEach((line) => {
    const cs = getComputedStyle(line.parentElement);
    const pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const w = line.offsetWidth;
    if (w) size = Math.min(size, (px * (avail - pad)) / w);
  });
  return size;
}

function fitAll() {
  document.querySelectorAll("[data-fit]").forEach((el) => {
    const lines = [...el.querySelectorAll("[data-fit-line]")].filter((l) => l.offsetParent);
    if (!lines.length) return;

    // Optical sizing changes glyph widths with size, so measure again at
    // the first estimate to correct it.
    let size = measure(el, lines, 100);
    size = measure(el, lines, size);

    const offset = parseFloat(el.dataset.fitOffset);
    if (!Number.isNaN(offset)) {
      const lh = parseFloat(getComputedStyle(el).lineHeight) / parseFloat(el.style.fontSize);
      const byHeight = (window.innerHeight - offset) / (lines.length * lh);
      size = Math.max(Math.min(size, byHeight), size * 0.75);
    }

    el.style.fontSize = `${Math.floor(size * 0.99 * 10) / 10}px`;
  });
}

export default function useFit() {
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame;
    const onResize = () => {
      // Ignore the small height changes from mobile browser toolbars.
      if (window.innerWidth === width && Math.abs(window.innerHeight - height) < 120) return;
      width = window.innerWidth;
      height = window.innerHeight;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fitAll);
    };

    fitAll();
    document.fonts?.ready.then(fitAll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);
}
