import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const VALUES = [
  { icon: "🤝", title: "Inclusivity",  desc: "Every child is welcome regardless of background, ability or need." },
  { icon: "👥", title: "Teamwork",     desc: "We grow together — students, teachers and parents as one community." },
  { icon: "🙏", title: "Godliness",    desc: "Faith is at the heart of everything we do, guiding our daily walk." },
  { icon: "❤️", title: "Love & Care", desc: "A warm, nurturing environment where every child feels safe and valued." },
  { icon: "📏", title: "Discipline",   desc: "Building self-control and responsibility from the earliest years." },
];

const TRUST_REASONS = [
  "Daily morning devotions to nurture spiritual growth",
  "Excellent gated compound for your child's safety",
  "Integrated Special Unit for children with special needs",
  "Visionary and experienced administration",
  "Toys for play and comfortable beds for napping",
  "Friendly, warm and caring staff",
  "Practical learning programs for holistic development",
  "Hot and healthy lunch and snacks provided daily",
  "Efficient transport and timely well-prepared meals",
  "Extra-curricular activities for early talent development",
  "Occupational therapy to support special needs children",
  "Emotional support workshops for parents",
];

const TEAM = [
  { name: "Madam Joyce Nyanamba", role: "Director",     emoji: "👩‍💼" },
  { name: "Mr. Duke Otege",       role: "Head Teacher", emoji: "👨‍🏫" },
];

const MILESTONES = [
  { year: "2004", text: "Kefjoy Academy founded in a 3-bedroomed residential house" },
  { year: "2010", text: "Expanded to first dedicated school building" },
  { year: "2018", text: "Opened Integrated Special Unit for children with special needs" },
  { year: "2023", text: "Two blocks, three floors, computer room and library fully operational" },
];

const STATS = [
  { number: "19+",  label: "Years of Excellence",         icon: "🏆" },
  { number: "500+", label: "Children Impacted",            icon: "👦" },
  { number: "2",    label: "Blocks, 3 Floors of Space",   icon: "🏫" },
  { number: "100%", label: "Christian-Based Environment",  icon: "🙏" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900
                          flex items-center justify-center overflow-hidden min-h-[340px]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
               backgroundSize: "30px 30px",
             }} />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans text-white/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/60">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">About Us</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            About Kefjoy Academy
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
            A distinguished, inclusive, Christian-based school where all children blossom — for over 19 years.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="w-full h-[420px] bg-gradient-to-br from-green-700 to-green-900
                            flex items-center justify-center text-8xl">🏫</div>
            <div className="absolute bottom-6 left-6 bg-yellow-400 text-green-900 px-5 py-3
                            rounded-xl font-bold font-sans text-sm text-center shadow-lg">
              <span className="block text-3xl font-black">19+</span>
              Years of Service
            </div>
          </div>

          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
              Kefjoy Academy & Cradle
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
            <p className="text-base leading-relaxed text-gray-600 font-sans mb-4">
              Kefjoy Academy & Cradle is a Christian-based centre that strives to develop whole, balanced
              minds in children as early as 2 years of age. We believe in involving parents in every step
              of this journey.
            </p>
            <p className="text-base leading-relaxed text-gray-600 font-sans mb-4">
              Our daily spiritual devotionals develop four growth pillars of life —{" "}
              <strong className="text-green-800">Social, Spiritual, Mental and Academic</strong>. We
              train our children to start every day with God through songs, Bible verses and prayers.
            </p>
            <p className="text-base leading-relaxed text-gray-600 font-sans">
              Our motto,{" "}
              <strong className="text-green-800">"UNLOCKING EVERY CHILD'S POTENTIAL"</strong>, drives
              everything we do — from our Integrated Special Unit to our child-centred teaching methods.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-green-50 border border-green-100 border-l-4 border-l-green-700 rounded-xl p-5">
                <h4 className="text-xs font-black uppercase tracking-wide text-green-800 mb-2 font-sans">Our Vision</h4>
                <p className="text-sm leading-relaxed text-gray-600 font-sans">
                  A distinguished, inclusive, Christian-based school where all children blossom.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 border-l-4 border-l-yellow-400 rounded-xl p-5">
                <h4 className="text-xs font-black uppercase tracking-wide text-green-800 mb-2 font-sans">Our Mission</h4>
                <p className="text-sm leading-relaxed text-gray-600 font-sans">
                  To offer the ultimate Christian-based nurturing environment where children always
                  look forward to learning through play, self-discovery and nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR HISTORY / TIMELINE ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">All About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Our History</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
          <p className="text-base leading-relaxed text-gray-600 font-sans max-w-3xl mb-14">
            For 19 years, Kefjoy Academy has been providing a fun, nurturing and safe environment for
            children to learn and grow. From a humble beginning in a 3-bedroomed residential house, we
            are now an establishment with two blocks with three floors, an equipped computer room and library.
          </p>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-0.5" />
            <div className="flex flex-col gap-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year}
                     className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                                 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-yellow-400
                                  border-4 border-white shadow -translate-x-2 mt-1 md:mt-0" />
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] bg-white rounded-xl p-6
                                   shadow-sm border border-gray-100
                                   ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <span className="inline-block bg-green-900 text-yellow-400 text-xs font-black
                                     tracking-widest px-3 py-1 rounded-full font-sans mb-3">
                      {m.year}
                    </span>
                    <p className="text-sm text-gray-600 font-sans leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">These Are</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Our Values</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v) => (
              <div key={v.title}
                   className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center
                              hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-base font-bold text-green-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTTO BANNER ── */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 py-16 px-6 text-center text-white">
        <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-4 font-sans">Our Motto</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          "Unlocking Every Child's Potential"
        </h2>
        <p className="mt-6 text-base text-white/75 font-sans max-w-xl mx-auto leading-relaxed">
          Every decision we make, every program we run, and every interaction we have is guided
          by this single powerful purpose.
        </p>
      </div>

      {/* ── OUR TEAM ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Our</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Leadership Team</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
          <p className="text-base leading-relaxed text-gray-600 font-sans max-w-2xl mb-12">
            We are blessed with a team of qualified and experienced teachers and support staff who are
            always ready and willing to nurture our precious gems. Our competent teachers handle children
            with love, employing child-centred teaching methods that encourage participation in all activities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((t) => (
              <div key={t.name}
                   className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100
                              hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-green-700 to-green-900
                                flex items-center justify-center text-7xl">
                  {t.emoji}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-green-900 mb-1">{t.name}</h3>
                  <p className="text-xs font-black uppercase tracking-wide text-yellow-500 font-sans">
                    {t.role}
                  </p>
                  <div className="w-8 h-0.5 bg-yellow-400 rounded mx-auto mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Why You Should
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
              Trust Us With Your Child
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-8" />
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {TRUST_REASONS.map((r) => (
                <li key={r}
                    className="flex items-start gap-3 px-4 py-3 bg-green-50 rounded-xl
                               border-l-4 border-green-700 text-sm text-gray-700 font-sans">
                  <span className="text-green-700 font-bold text-base flex-shrink-0 mt-0.5">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            {STATS.map((s) => (
              <div key={s.label}
                   className="flex items-center gap-5 bg-green-50 border border-green-100
                              rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-green-900 flex items-center
                                justify-center text-2xl flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-3xl font-black text-green-900">{s.number}</div>
                  <div className="text-sm text-gray-500 font-sans">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 py-20 px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Join Our Family?</h2>
        <p className="text-base opacity-85 mb-9 font-sans max-w-xl mx-auto leading-relaxed">
          We'd love to have your child be part of the Kefjoy Academy community.
          Start the admissions process today.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/admission"
             className="inline-block bg-yellow-400 text-green-900 px-10 py-4 rounded font-black text-sm
                        uppercase tracking-wide font-sans transition-all duration-200 no-underline
                        hover:bg-yellow-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(240,192,64,0.4)]">
            Apply Now
          </Link>
          <Link to="/contact"
             className="inline-block bg-transparent text-white px-10 py-4 rounded font-black text-sm
                        uppercase tracking-wide font-sans border-2 border-white/60 no-underline
                        transition-all duration-200 hover:border-white hover:bg-white/10">
            Contact Us
          </Link>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <Footer />

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                   border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                   hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
        ↑
      </button>
    </div>
  );
}