import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Academics",
    path: "/academics",
    sub: [
      { label: "Pre-School",       path: "/academics#preschool" },
      { label: "Lower Primary",    path: "/academics#lower-primary" },
      { label: "Upper Primary",    path: "/academics#upper-primary" },
      { label: "Junior Secondary", path: "/academics#junior-secondary" },
    ],
  },
  {
    label: "About Us",
    path: "/about",
  },
  // {
  //   label: "Programs",
  //   path: "/programs",
  //   sub: [
  //     { label: "The Arts",  path: "/programs#arts" },
  //     { label: "Sciences",  path: "/programs#sciences" },
  //     { label: "Maths",     path: "/programs#maths" },
  //     { label: "Reading",   path: "/programs#reading" },
  //     { label: "Sports",    path: "/programs#sports" },
  //     { label: "Online",    path: "/programs#online" },
  //   ],
  // },
  {
    label: "Admission",
    path: "/admission",
    sub: [
      { label: "Admission Process", path: "/admission#process" },
      { label: "Fee Structure",     path: "/admission#fees" },
    ],
  },
  {
    label: "Student Life",
    path: "/student-life",
    sub: [
      { label: "Clubs",                 path: "/student-life#clubs" },
      { label: "Sports",                path: "/student-life#sports" },
      { label: "Guidance & Counseling", path: "/student-life#counseling" },
    ],
  },
  {
    label: "Media",
    path: "/media/gallery",
    sub: [
      { label: "Gallery", path: "/media/gallery" },
      { label: "Events",  path: "/media/events"  },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled]         = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/media/gallery" && location.pathname.startsWith("/media"));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md
          ${scrolled ? "bg-green-950/95 shadow-lg" : "bg-green-950/85"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center
                            text-green-900 font-black text-lg border-2 border-yellow-400 shrink-0">
              KA
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold tracking-wide leading-tight">Kefjoy Academy</h1>
              <p className="text-[10px] tracking-widest uppercase opacity-75">& Cradle</p>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold
                              uppercase tracking-wide cursor-pointer rounded transition-all duration-200
                              hover:bg-yellow-400/15 hover:text-yellow-400 font-sans no-underline
                              ${isActive(item.path) ? "text-yellow-400 bg-yellow-400/10" : "text-white/90"}`}
                >
                  {item.label}
                  {item.sub && <span className="text-[9px] opacity-60">▾</span>}
                </Link>

                {item.sub && (
                  <div className="absolute top-full left-0 min-w-[210px] bg-green-950 border-t-4
                                  border-yellow-400 shadow-2xl rounded-b-md hidden group-hover:flex
                                  flex-col z-50">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.path}
                        className="px-4 py-2.5 text-white/80 text-xs font-sans border-b border-white/5
                                   transition-all duration-200 hover:bg-yellow-400/15 hover:text-yellow-400
                                   hover:pl-6 no-underline"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Backdrop ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-50
                    bg-green-950 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[70px] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center
                            text-green-900 font-black text-sm shrink-0">
              KA
            </div>
            <span className="text-white font-bold text-sm tracking-wide">Kefjoy Academy</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                       text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200
                       border-none cursor-pointer text-lg font-bold">
            ×
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto py-4">
          {NAV_LINKS.map((item, i) => (
            <div key={item.label}>
              <div
                className="flex justify-between items-center cursor-pointer
                           px-6 py-3.5 transition-all duration-200 hover:bg-white/5"
                onClick={() =>
                  setOpenDropdown(openDropdown === item.label ? null : item.label)
                }
              >
                <Link
                  to={item.path}
                  onClick={(e) => item.sub && e.preventDefault()}
                  className={`font-semibold text-sm font-sans no-underline tracking-wide
                             ${isActive(item.path) ? "text-yellow-400" : "text-white"}`}
                >
                  {item.label}
                </Link>
                {item.sub ? (
                  <span className={`text-yellow-400 text-xs transition-transform duration-300
                                   ${openDropdown === item.label ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                ) : (
                  <span className="text-white/20 text-xs">›</span>
                )}
              </div>

              {/* Sub-links */}
              <div className={`overflow-hidden transition-all duration-300
                               ${openDropdown === item.label ? "max-h-96" : "max-h-0"}`}>
                <div className="bg-white/5 border-l-2 border-yellow-400/40 mx-4 mb-1 rounded-r-lg">
                  {item.sub?.map((s) => (
                    <Link
                      key={s.label}
                      to={s.path}
                      className="flex items-center gap-2 text-white/65 text-sm px-5 py-3
                                 font-sans no-underline hover:text-yellow-400 hover:bg-white/5
                                 transition-all duration-200 border-b border-white/5 last:border-0"
                    >
                      <span className="w-1 h-1 rounded-full bg-yellow-400/60 shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider between items */}
              {i < NAV_LINKS.length - 1 && (
                <div className="mx-6 h-px bg-white/5" />
              )}
            </div>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div className="px-6 py-5 border-t border-white/10 shrink-0">
          <Link
            to="/admission"
            className="block w-full text-center bg-yellow-400 text-green-900 py-3 rounded-lg
                       font-black text-sm uppercase tracking-wide font-sans no-underline
                       transition-all duration-200 hover:bg-yellow-300"
          >
            Apply for Admission
          </Link>
          <p className="text-white/30 text-xs font-sans text-center mt-3 tracking-wide">
            info@kefjoyacademy.sc.ke
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}