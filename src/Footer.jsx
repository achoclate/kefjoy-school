import { Link } from "react-router-dom";

// DATA

const QUICK_LINKS = [
  { label: "Gallery",    path: "/gallery" },
  { label: "Events",     path: "/events" },
  { label: "Contact Us", path: "/contact" },
  { label: "Programs",   path: "/programs" },
  { label: "Admission",  path: "/admission" },
];

const ACADEMIC_LINKS = [
  { label: "Pre-School",       path: "/academics#preschool" },
  { label: "Lower Primary",    path: "/academics#lower-primary" },
  { label: "Upper Primary",    path: "/academics#upper-primary" },
  { label: "Junior Secondary", path: "/academics#junior-secondary" },
];

const SOCIAL_LINKS = [
  { label: "f",  name: "Facebook",  href: "https://www.facebook.com/KefjoyA/" },
  { label: "in", name: "Instagram", href: "https://www.instagram.com/kefjoyacademy/" },
  { label: "tw", name: "Twitter",   href: "#" },
  { label: "yt", name: "YouTube",   href: "https://youtube.com/@kefjoyacademy" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      {/* ── SOCIAL / CONTACT BAR ── */}
      <div className="bg-green-950 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-start justify-between">

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Follow Us</h3>
            <p className="text-sm text-white/60 mb-4 font-sans">
              Stay connected with us on social media
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center
                             justify-center text-white text-sm font-bold font-sans no-underline
                             transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400/10"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Contact Details</h3>
            <div className="text-sm text-white/75 font-sans leading-8">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 <a href="tel:+254700000000" className="text-white/75 no-underline hover:text-yellow-400 transition-colors">+254 700 000 000</a></p>
              <p>✉️ <a href="mailto:info@kefjoyacademy.sc.ke" className="text-yellow-400 no-underline hover:underline">info@kefjoyacademy.sc.ke</a></p>
            </div>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">School Hours</h3>
            <div className="text-sm text-white/75 font-sans leading-8">
              <p>Monday – Friday</p>
              <p>7:30 AM – 4:30 PM</p>
              <p className="text-yellow-400">Term dates available on request</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <footer className="bg-green-950 border-t border-white/10 pt-16 px-6 pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center
                              text-green-900 font-black text-sm shrink-0">
                KA
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">Kefjoy Academy</h3>
                <p className="text-[10px] text-white/50 tracking-widest uppercase">& Cradle</p>
              </div>
            </Link>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              A Christian-based centre striving to develop whole, balanced minds in children.
              Our Integrated Special Unit ensures every child's potential is unlocked.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/60 font-sans no-underline transition-all duration-200
                               hover:text-yellow-400 hover:pl-1 block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">
              Academics
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {ACADEMIC_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/60 font-sans no-underline transition-all duration-200
                               hover:text-yellow-400 hover:pl-1 block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">
              Get In Touch
            </h4>
            <div className="text-sm text-white/60 font-sans leading-8">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 <a href="tel:+254700000000" className="text-white/60 no-underline hover:text-yellow-400 transition-colors">+254 700 000 000</a></p>
              <p>✉️ <a href="mailto:info@kefjoyacademy.sc.ke" className="text-yellow-400 no-underline hover:underline">info@kefjoyacademy.sc.ke</a></p>
            </div>
            <Link
              to="/admission"
              className="inline-block mt-5 bg-yellow-400 text-green-900 px-5 py-2.5 rounded
                         font-black text-xs uppercase tracking-wide font-sans no-underline
                         transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
            >
              Enrol Now →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 py-5 flex flex-col sm:flex-row items-center
                        justify-between gap-3 text-xs text-white/35 font-sans">
          <p>Copyright © Kefjoy Academy & Cradle 2026. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/about"     className="text-white/35 no-underline hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/contact"   className="text-white/35 no-underline hover:text-yellow-400 transition-colors">Contact</Link>
            <Link to="/admission" className="text-white/35 no-underline hover:text-yellow-400 transition-colors">Admission</Link>
          </div>
        </div>
      </footer>
    </>
  );
}