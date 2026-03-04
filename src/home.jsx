import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    bgClass: "from-green-900 via-green-700 to-green-900",
    headline: "Unlocking Every Child's Potential",
    sub: "A Christian-based center developing whole, balanced minds",
  },
  {
    bgClass: "from-blue-950 via-blue-900 to-blue-950",
    headline: "Where Every Child Belongs",
    sub: "Integrated Special Unit for diverse learners",
  },
  {
    bgClass: "from-amber-900 via-amber-700 to-amber-900",
    headline: "Excellence in Education",
    sub: "Arts, Sciences, Sports and beyond",
  },
];

const PROGRAMS = [
  { icon: "🎨", title: "The Arts",  desc: "Creative expression through visual arts, music, drama and more." },
  { icon: "🔬", title: "Sciences",  desc: "Hands-on STEM learning that inspires curiosity and discovery." },
  { icon: "📐", title: "Maths",     desc: "Building strong numerical foundations through engaging methods." },
  { icon: "📚", title: "Reading",   desc: "Cultivating a love for literacy and language from an early age." },
  { icon: "⚽", title: "Sports",    desc: "Physical development and teamwork through diverse sports programs." },
  { icon: "💻", title: "Online",    desc: "Digital learning tools integrated into every classroom experience." },
];

const CLUBS = [
  "Drama","Choir","Art Club","Debate","Chess","Young Scientists",
  "Dance","Environmental","Scouting","Sports Teams","Reading Club","ICT Club",
];

const FACILITIES = [
  "School Buses","Music Room","Science Laboratory","Art Room",
  "Playing Fields","Basketball Court","Computer Lab","Counselling Room",
  "Fully Equipped Kitchen","Library","Special Needs Unit","Prayer Room",
];

const WHY_CHOOSE = [
  { icon: "🌟", title: "Christian Values",        desc: "A faith-based environment that nurtures spiritual growth alongside academic excellence." },
  { icon: "🧩", title: "Integrated Special Unit", desc: "Dedicated support for children with special needs, ensuring every child thrives." },
  { icon: "🌍", title: "Holistic Development",    desc: "Academics, arts, sports and character all woven into our daily program." },
  { icon: "👨‍🏫", title: "Experienced Educators",  desc: "Passionate teachers committed to unlocking each child's unique potential." },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  const [slide, setSlide] = useState(0);
  const intervalRef       = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      5000
    );
    return () => clearInterval(intervalRef.current);
  }, []);

  const current = HERO_SLIDES[slide];

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center overflow-hidden
                    bg-gradient-to-br ${current.bgClass} transition-all duration-1000`}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div
          key={slide}
          className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Kefjoy Academy & Cradle
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            {current.headline}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-9 font-sans font-light tracking-wide">
            {current.sub}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/admission"
               className="bg-yellow-400 text-green-900 px-8 py-3.5 rounded font-black text-sm
                          uppercase tracking-wide font-sans transition-all duration-200
                          hover:bg-yellow-300 hover:-translate-y-0.5 no-underline
                          shadow-[0_4px_15px_rgba(240,192,64,0.4)]">
              Enrol Your Child
            </Link>
            <Link to="/academics"
               className="bg-transparent text-white px-8 py-3.5 rounded font-black text-sm
                          uppercase tracking-wide font-sans border-2 border-white/60
                          transition-all duration-200 hover:border-white hover:bg-white/10 no-underline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-2.5 rounded-full border-none cursor-pointer transition-all duration-300
                         ${i === slide ? "w-7 bg-yellow-400" : "w-2.5 bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* ── ICON BAR — commented out, do not remove ──
      <div className="bg-green-900 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap">
          {PROGRAMS.map((p, i) => (
            <Link to="/programs" key={p.title}
              className={`flex flex-col items-center px-6 py-5 gap-2 cursor-pointer no-underline
                         transition-all duration-200 hover:bg-yellow-400/15 min-w-[100px]
                         ${i < PROGRAMS.length - 1 ? "border-r border-white/10" : ""}`}>
              <span className="text-3xl">{p.icon}</span>
              <span className="text-white/85 text-[11px] font-semibold tracking-widest uppercase font-sans">
                {p.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      ── END ICON BAR ── */}

      {/* ── WHY CHOOSE US — moved right after hero/icon bar ── */}
      <section id="why" className="py-20 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            What Sets Kefjoy Apart
          </h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title}
                   className="bg-white rounded-xl p-7 shadow-sm text-center transition-all duration-300
                              hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <div className="text-5xl mb-4">{w.icon}</div>
                <h3 className="text-lg font-bold text-green-900 mb-2">{w.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 font-sans">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Our Programs
          </h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
          <p className="text-base leading-relaxed text-gray-600 font-sans max-w-2xl">
            We offer a rich and balanced set of programs designed to develop every facet of your
            child's potential — from academic excellence to creative expression and physical well-being.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROGRAMS.map((p) => (
              <Link to="/programs" key={p.title}
                className="bg-white rounded-lg p-4 shadow-sm border border-green-100
                           border-l-4 border-l-green-700 relative overflow-hidden
                           transition-all duration-300 cursor-pointer no-underline
                           hover:-translate-y-1.5 hover:shadow-xl block">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 font-sans">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 py-20 px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Enrol Your Child?</h2>
        <p className="text-base opacity-85 mb-9 font-sans max-w-xl mx-auto leading-relaxed">
          Join our growing community of learners. Click below to start the admission process and
          unlock your child's potential today.
        </p>
        <Link to="/admission"
           className="inline-block bg-yellow-400 text-green-900 px-10 py-4 rounded font-black text-sm
                      uppercase tracking-wide font-sans transition-all duration-200 no-underline
                      hover:bg-yellow-300 hover:-translate-y-0.5
                      shadow-[0_4px_20px_rgba(240,192,64,0.4)]">
          [ Click Here to Enrol Your Child Today ]
        </Link>
      </div>

      {/* ── CLUBS & FACILITIES — commented out, do not remove ──
      <section id="clubs" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Extra-Curricular
            </p>
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Clubs</h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {CLUBS.map((c) => (
                <li key={c} className="flex items-center gap-3 px-4 py-2.5 bg-green-50 rounded-md
                                       border-l-4 border-green-700 text-sm text-gray-700 font-sans">
                  <span className="text-green-700 font-bold text-base">+</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Infrastructure
            </p>
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Facilities</h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {FACILITIES.map((f) => (
                <li key={f} className="flex items-center gap-3 px-4 py-2.5 bg-green-50 rounded-md
                                       border-l-4 border-green-700 text-sm text-gray-700 font-sans">
                  <span className="text-green-700 font-bold text-base">+</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      ── END CLUBS & FACILITIES ── */}

      {/* ── FOOTER ── */}
      <Footer />

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                   border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                   hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
        ↑
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}