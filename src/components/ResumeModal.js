import { useEffect, useRef } from "react";
import { site } from "../content";

export default function ResumeModal({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Résumé preview" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal__bar">
          <p className="label">Résumé — {site.firstName} {site.lastName}</p>
          <div className="modal__actions">
            <a className="link-underline" href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
              Open in new tab ↗
            </a>
            <a className="link-underline" href={site.resumeUrl} download={site.resumeFileName}>
              Download ↓
            </a>
            <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Close résumé preview">
              Close ✕
            </button>
          </div>
        </div>
        <iframe className="modal__frame" src={site.resumeUrl} title={`${site.firstName} ${site.lastName} résumé`} />
      </div>
    </div>
  );
}
