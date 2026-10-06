// Running head that opens each section, like a magazine folio: number,
// an italic section name, and an optional aside pinned to the right.
export default function SectionLabel({ number, children, aside }) {
  return (
    <div className="section-label label" data-reveal="">
      <span className="section-label__num">({number})</span>
      <span className="section-label__name">{children}</span>
      {aside && <span className="section-label__aside">{aside}</span>}
    </div>
  );
}
