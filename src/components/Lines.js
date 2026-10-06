import { isValidElement } from "react";

// A trailing "." is picked out in the accent colour.
export function renderText(text) {
  if (typeof text !== "string" || !text.endsWith(".")) return text;
  return (
    <>
      {text.slice(0, -1)}
      <span className="accent">.</span>
    </>
  );
}

// Renders a headline one masked line at a time, so each line can slide up
// into view. Use renderText() where a trailing "." should take the accent. Each entry in `lines` is a string, a node, or
// { content, className, after } where `after` renders inside the line's
// mask (used for captions tucked beside a line).
// `fit` scales the headline so its widest line spans the container.
export default function Lines({
  as: Tag = "h2",
  lines,
  className = "",
  reveal = true,
  fit = false,
  fitOffset,
  label,
  ...rest
}) {
  return (
    <Tag
      className={`lines ${className}`}
      data-reveal={reveal ? "lines" : undefined}
      data-fit={fit ? "" : undefined}
      data-fit-offset={fitOffset}
      aria-label={label}
      {...rest}
    >
      {lines.map((line, i) => {
        const l = typeof line === "string" || isValidElement(line) ? { content: line } : line;
        return (
          <span className={`lines__mask ${l.className || ""}`} key={i} aria-hidden={label ? true : undefined}>
            <span className="lines__line" data-fit-line="" style={{ "--i": i }}>
              {l.content}
            </span>
            {l.after}
          </span>
        );
      })}
    </Tag>
  );
}
