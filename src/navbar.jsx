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
      { label: "Pre-School",      path: "/academics#preschool" },
      { label: "Lower Primary",   path: "/academics#lower-primary" },
      { label: "Upper Primary",   path: "/academics#upper-primary" },
      { label: "Junior Secondary",path: "/academics#junior-secondary" },
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
      { label: "Clubs",                path: "/student-life#clubs" },
      { label: "Sports",               path: "/student-life#sports" },
      { label: "Guidance & Counseling",path: "/student-life#counseling" },
    ],
  },
  {
    label: "Media",
    path: "/media",
    sub: [
      { label: "Gallery", path: "/media#gallery" },
      { label: "Events",  path: "/media#events" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled]       = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

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

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="relative group">

                {/* Top-level link */}
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

                {/* Dropdown */}
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
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded block transition-all duration-300
                             ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 right-0 bottom-0 bg-green-950/98
                        z-40 overflow-y-auto flex flex-col p-5 gap-1">
          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              <div
                className="flex justify-between items-center text-white font-semibold text-base
                           px-4 py-3 border-b border-white/10 font-sans cursor-pointer"
                onClick={() =>
                  setOpenDropdown(openDropdown === item.label ? null : item.label)
                }
              >
                <Link
                  to={item.path}
                  className={`no-underline ${isActive(item.path) ? "text-yellow-400" : "text-white"}`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <span className={`text-yellow-400 transition-transform duration-200
                                   ${openDropdown === item.label ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                )}
              </div>

              {/* Mobile sub-links */}
              {item.sub && openDropdown === item.label && (
                <div className="flex flex-col">
                  {item.sub.map((s) => (
                    <Link
                      key={s.label}
                      to={s.path}
                      className="block text-white/65 text-sm px-8 py-2.5 border-b border-white/5
                                 font-sans no-underline hover:text-yellow-400 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}