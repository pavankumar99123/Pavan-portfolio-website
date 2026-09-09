import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

import { FaGithub, FaLinkedin } from "react-icons/fa";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Pavan Kumar<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-line p-2 text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={profile.resumePath}
            download
            className="ml-1 flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#150d04] transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="rounded-lg border border-line p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`glass-strong overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-2 px-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-line p-2 text-ink-dim hover:text-accent"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-line p-2 text-ink-dim hover:text-accent"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="ml-auto flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#150d04]"
            >
              <Download size={16} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
