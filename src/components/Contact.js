import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { contact, site, socials } from "../content";
import Lines from "./Lines";
import SectionLabel from "./SectionLabel";

const EMAILJS = {
  service: "service_kqxk9ng",
  template: "template_r0g2tgd",
  publicKey: "Abr_bfzKgCiKd3O7y",
};

const formatTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: site.timeZone,
    timeZoneName: "short",
  }).format(new Date());

function LocalTime() {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 15000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

export default function Contact({ onOpenResume }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    emailjs.sendForm(EMAILJS.service, EMAILJS.template, form, EMAILJS.publicKey).then(
      () => {
        setStatus("sent");
        form.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      },
    );
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionLabel
        number="03"
        aside={site.availability}
      >
        Contact
      </SectionLabel>

      <Lines
        id="contact-title"
        className="contact__headline"
        fit
        lines={[
          { content: contact.headline[0], className: "is-left" },
          {
            content: (
              <span className="serif">
                {contact.headline[1]}
              </span>
            ),
            className: "is-right",
          },
        ]}
      />

      <dl className="contact__index" data-reveal="">
        <div>
          <dt className="label">Email</dt>
          <dd>
            <a className="link-underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="label">Elsewhere</dt>
          <dd>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a className="link-underline" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="label">Résumé</dt>
          <dd>
            <ul>
              <li>
                <button type="button" className="link-underline" onClick={onOpenResume}>
                  View
                </button>
              </li>
              <li>
                <a className="link-underline" href={site.resumeUrl} download={site.resumeFileName}>
                  Download PDF <span aria-hidden="true">↓</span>
                </a>
              </li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="label">Local time</dt>
          <dd>
            {site.location} — <LocalTime />
          </dd>
        </div>
      </dl>

      <div className="contact__message">
        <h3>Or leave a message</h3>
        <form className="form" onSubmit={handleSubmit} data-reveal="">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input id="name" name="from_name" autoComplete="name" required />
          </div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input id="email" name="reply_to" type="email" autoComplete="email" required />
          </div>
          <div className="field field--full">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" rows="3" required />
          </div>

          <div className="form__end">
            {status === "error" && (
              <p className="form__note form__note--error" role="alert">
                Sorry, your message couldn’t be sent. Please try again or email me directly.
              </p>
            )}
            {status === "sent" ? (
              <p className="form__note" role="status">
                Message received — thank you.
              </p>
            ) : (
              <button className="button" type="submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending…" : "Send message"}</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </form>
      </div>

      <footer className="footer label">
        <p>
          © {new Date().getFullYear()} {site.firstName} {site.lastName}
        </p>
        <p>Designed &amp; built in {site.location}</p>
        <a className="link-underline" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}
