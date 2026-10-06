import { useEffect, useRef, useState } from "react";
import { projects } from "../content";

// A quiet cursor companion for fine pointers only. Over elements marked
// data-cursor="image" (with data-cursor-src set to a project slug) it shows
// that project's screenshot. Anything inside [data-cursor-off] hides it.
export default function Cursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState({ mode: null, src: null });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let x = -200;
    let y = -200;
    let cx = x;
    let cy = y;
    let frame;
    let lastTarget = null;

    const update = (target) => {
      lastTarget = target;
      const host = target?.closest?.("[data-cursor]");
      const off = target?.closest?.("[data-cursor-off]");
      const mode = host && !off ? host.dataset.cursor : null;
      const src = mode === "image" ? host.dataset.cursorSrc : null;
      setState((prev) => (prev.mode === mode && prev.src === src ? prev : { mode, src }));
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      update(e.target);
    };
    // Content moves under a still pointer while scrolling.
    const onScroll = () => update(document.elementFromPoint(x, y) || lastTarget);
    const onLeave = () => setState({ mode: null, src: null });

    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      if (ref.current) ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <div className={`cursor__preview ${state.mode === "image" ? "is-on" : ""}`}>
        {projects.map((p) => (
          <div
            key={p.slug}
            className={`cursor__plate ${state.src === p.slug ? "is-on" : ""}`}
            style={{ "--tone": p.tone }}
          >
            <img src={p.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
