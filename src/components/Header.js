import { useEffect, useState } from "react";
import { site } from "../content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// Minimal header: steps aside while you scroll down, returns when you
// scroll up, and tightens slightly once you've left the top.
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        if (y > last + 8 && y > 240) setHidden(true);
        else if (y < last - 8 || y <= 240) setHidden(false);
        last = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}>
      <a className="header__mark" href="#top" aria-label={`${site.firstName} ${site.lastName}, back to top`}>
        {site.firstName} {site.lastName}
      </a>
      <nav aria-label="Primary">
        <ul className="header__nav">
          {links.map((l) => (
            <li key={l.href}>
              <a className="link-slide" href={l.href}>
                <span data-text={l.label}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
