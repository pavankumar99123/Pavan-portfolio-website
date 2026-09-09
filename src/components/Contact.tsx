import { useState, type FormEvent } from "react";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

import { FaGithub, FaLinkedin } from "react-icons/fa";
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState): Partial<FormState> => {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message is required.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // No backend email service is configured yet — this form is
      // frontend-ready and validated, pending an email/API integration.
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-lg border bg-black/20 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 focus:outline-none ${
      hasError ? "border-red-400/50" : "border-line"
    }`;

  return (
    <section id="contact" className="section">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            Let's Build Something Together
          </h2>
          <p className="mt-4 max-w-sm text-balance leading-relaxed text-ink-dim">
            I'm open to software development, AI, full-stack and backend
            opportunities.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <span className="rounded-lg border border-line p-2">
                <Phone size={16} className="text-accent-soft" />
              </span>
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <span className="rounded-lg border border-line p-2">
                <Mail size={16} className="text-accent-soft" />
              </span>
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <span className="rounded-lg border border-line p-2">
                <FaGithub size={16} className="text-accent-soft" />
              </span>
              github.com/{profile.githubUsername}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <span className="rounded-lg border border-line p-2">
                <FaLinkedin size={16} className="text-accent-soft" />
              </span>
              linkedin.com/in/pavankumar-bathula
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {submitted ? (
            <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-10 text-center">
              <CheckCircle2 size={32} className="text-accent" />
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                Message ready to send
              </h3>
              <p className="mt-2 max-w-xs text-sm text-ink-dim">
                Your details passed validation. Connect an email service to this
                form to deliver messages automatically.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg border border-line px-4 py-2 text-sm text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-ink-dim">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass(errors.name)}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-ink-dim">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass(errors.email)}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-ink-dim">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={fieldClass(errors.subject)}
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-ink-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={fieldClass(errors.message)}
                  placeholder="Tell me a little about the role or project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-[#150d04] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
