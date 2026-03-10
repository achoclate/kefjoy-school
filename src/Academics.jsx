import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

//  DATA

const STAGES = [
  {
    id: "preschool",
    emoji: "🌱",
    level: "Pre-School",
    ages: "Ages 2 – 5",
    years: "PP1 & PP2",
    color: "from-emerald-400 to-green-600",
    accent: "border-emerald-500",
    badge: "bg-emerald-100 text-emerald-800",
    tagBg: "bg-emerald-50",
    subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Creative Activities","Music & Movement","Religious Education"],
    description: `Our Pre-School programme creates a warm, nurturing environment where young children
    begin their learning journey through structured play, exploration, and discovery. Guided by
    experienced Early Childhood educators, children develop foundational literacy, numeracy, and
    social-emotional skills that prepare them for formal schooling.`,
    highlights: [
      "Play-based learning approach",
      "Social and emotional development",
      "Introduction to phonics and early reading",
      "Creative arts and expression",
    ],
  },
  {
    id: "lower-primary",
    emoji: "📖",
    level: "Lower Primary",
    ages: "Ages 6 – 9",
    years: "Grade 1 – 3",
    color: "from-blue-400 to-blue-700",
    accent: "border-blue-500",
    badge: "bg-blue-100 text-blue-800",
    tagBg: "bg-blue-50",
    subjects: ["Literacy","Kiswahili","Mathematics","Environmental & Social Studies","Religious Education","Creative Arts","Physical Education"],
    description: `Lower Primary builds on the foundational skills developed in Pre-School. Children
    transition into a more structured learning environment while still benefiting from hands-on,
    inquiry-based teaching methods. Our teachers foster curiosity, independence, and a genuine
    love for learning across all subject areas.`,
    highlights: [
      "CBC-aligned competency development",
      "Strong literacy and numeracy focus",
      "Integration of Christian values",
      "Individualised learning support",
    ],
  },
  {
    id: "upper-primary",
    emoji: "🔭",
    level: "Upper Primary",
    ages: "Ages 10 – 12",
    years: "Grade 4 – 6",
    color: "from-violet-400 to-violet-700",
    accent: "border-violet-500",
    badge: "bg-violet-100 text-violet-800",
    tagBg: "bg-violet-50",
    subjects: ["English","Kiswahili","Mathematics","Science & Technology","Social Studies","Creative Arts & Sports","Religious Education","Home Science"],
    description: `Upper Primary marks a significant deepening of academic content. Students engage
    with more complex concepts across all subjects while developing critical thinking, research,
    and collaborative skills. This stage prepares learners for the transition into secondary
    education with confidence and strong academic grounding.`,
    highlights: [
      "Critical thinking and problem solving",
      "Introduction to Science & Technology",
      "Project-based learning activities",
      "Leadership and responsibility development",
    ],
  },
  {
    id: "junior-secondary",
    emoji: "🎓",
    level: "Junior Secondary",
    ages: "Ages 13 – 15",
    years: "Grade 7 – 9",
    color: "from-amber-400 to-orange-600",
    accent: "border-amber-500",
    badge: "bg-amber-100 text-amber-800",
    tagBg: "bg-amber-50",
    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Social Studies","Business Studies","Agriculture","Creative Arts","Physical Education","Religious Education"],
    description: `Junior Secondary is a transformative stage where students begin to specialise and
    develop a clearer sense of their academic strengths and career interests. Strong pastoral care
    ensures every student thrives academically and personally during this critical period.`,
    highlights: [
      "Subject specialisation begins",
      "Strong STEM foundations",
      "Comprehensive pastoral care system",
      "Preparation for Senior Secondary",
    ],
  },
];

const APPROACH_CARDS = [
  { icon: "🧠", title: "Competency Based",      desc: "Our CBC-aligned approach focuses on building real-world skills, not just content knowledge." },
  { icon: "✝️",  title: "Christian Foundation",  desc: "Faith, values, and character development are woven through everything we do." },
  { icon: "🤝", title: "Inclusive Learning",    desc: "Our Integrated Special Unit ensures every child receives the support they need." },
  { icon: "🌱", title: "Holistic Growth",       desc: "Academics, sports, arts, and character development are all equally valued here." },
  { icon: "👩‍🏫", title: "Expert Teachers",      desc: "Qualified, passionate educators who know each child by name and nurture their unique potential." },
  { icon: "📊", title: "Continuous Assessment", desc: "Regular formative and summative assessments ensure no child falls behind unnoticed." },
];

// STAGE DETAIL ; expanded panel

function StageDetail({ stage, onClose }) {
  const isEven = STAGES.findIndex(s => s.id === stage.id) % 2 === 0;
  return (
    <div
      className="mt-6 rounded-2xl border border-gray-100 shadow-lg overflow-hidden bg-white relative"
      style={{ animation: "expandIn 0.35s ease forwards" }}
    >
      {/* Floating close button on the top right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-red-50
                   hover:text-red-500 text-gray-400 flex items-center justify-center
                   text-xl font-bold border border-gray-200 cursor-pointer transition-all duration-200
                   hover:scale-110 shadow-sm"
        title="Close">
        ×
      </button>
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>

        {/* Visual panel */}
        <div className="w-full lg:w-2/5 shrink-0">
          <div className={`relative bg-gradient-to-br ${stage.color} p-10 text-white h-full overflow-hidden`}>
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"20px 20px" }} />
            <div className="relative z-10">
              <div className="text-6xl mb-4">{stage.emoji}</div>
              <h2 className="text-3xl font-bold mb-1">{stage.level}</h2>
              <p className="text-white/80 text-sm font-sans mb-1">{stage.years}</p>
              <span className="inline-block bg-white/20 text-white text-xs font-bold
                               tracking-wide uppercase px-3 py-1 rounded-full font-sans mt-2">
                {stage.ages}
              </span>
              <div className="mt-8 flex flex-col gap-3">
                {stage.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-white/90 text-sm font-sans leading-snug">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex-1 p-8 md:p-10">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
            Stage {STAGES.findIndex(s => s.id === stage.id) + 1}
          </p>
          <h2 className="text-3xl font-bold text-green-900 mb-2 leading-tight">{stage.level}</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
          <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">{stage.description}</p>

          <div className={`rounded-xl border-l-4 ${stage.accent} ${stage.tagBg} p-6 mb-6`}>
            <h4 className="text-sm font-black uppercase tracking-wide text-green-800 mb-4 font-sans">
              Subjects Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {stage.subjects.map((subject) => (
                <span key={subject} className={`${stage.badge} text-xs font-semibold px-3 py-1.5 rounded-full font-sans`}>
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 font-sans text-sm text-gray-600 leading-relaxed mb-8">
            <p className="mb-3">
              At the <strong className="text-green-800">{stage.level}</strong> stage, we place
              equal emphasis on academic achievement and personal development. Every learner
              is known individually, and our small class sizes allow for personalised attention.
            </p>
            <p>
              Parents are essential partners in education. Regular communication, parent-teacher
              meetings, and progress reports ensure families are always informed and involved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/admission"
               className="bg-yellow-400 text-green-900 px-6 py-3 rounded font-black text-sm
                          uppercase tracking-wide font-sans transition-all duration-200 no-underline
                          hover:bg-yellow-300 hover:-translate-y-0.5
                          shadow-[0_4px_12px_rgba(240,192,64,0.3)]">
              Enquire About {stage.level}
            </Link>
            <button className="bg-transparent text-green-800 px-6 py-3 rounded font-black text-sm
                               uppercase tracking-wide font-sans border-2 border-green-700
                               transition-all duration-200 hover:bg-green-700 hover:text-white cursor-pointer">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// LEVEL SUMMARY CARD 
function LevelCard({ stage, isActive, onToggle }) {
  return (
    <div id={stage.id} className="scroll-mt-24">
      <div className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300
                       text-center flex flex-col items-center relative
                       ${isActive
                         ? "border-green-400 shadow-xl -translate-y-1 ring-2 ring-green-300/50"
                         : "border-gray-100 hover:shadow-md hover:-translate-y-0.5"}`}>

        {/* Active indicator dot */}
        {isActive && (
          <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-green-400
                           shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
        )}

        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color}
                        flex items-center justify-center text-3xl mb-4 shadow-md
                        transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
          {stage.emoji}
        </div>
        <h3 className="text-lg font-bold text-green-900 mb-1">{stage.level}</h3>
        <p className="text-xs text-green-600 font-sans font-semibold tracking-wide uppercase mb-0.5">
          {stage.ages}
        </p>
        <p className="text-xs text-gray-400 font-sans mb-5">{stage.years}</p>
        <div className="flex flex-col gap-2 w-full mt-auto">
          <button
            onClick={onToggle}
            className={`w-full px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wide
                        font-sans border-none cursor-pointer transition-all duration-200
                        ${isActive
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-green-900 text-white hover:bg-green-700"}`}>
            {isActive ? "✓ Viewing" : "Get Details"}
          </button>
          <button className="w-full bg-yellow-400 text-green-900 px-4 py-2.5 rounded-lg
                             text-xs font-black uppercase tracking-wide font-sans border-none
                             cursor-pointer transition-all duration-200 hover:bg-yellow-300">
            Fee Structure
          </button>
        </div>
      </div>
    </div>
  );
}

// MAIN COMPONENT 

export default function Academics() {
  const [activeId, setActiveId] = useState(null);
  const location = useLocation();

  // Auto-open stage card when navigating 
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && STAGES.find(s => s.id === hash)) {
      setActiveId(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const activeStage = STAGES.find(s => s.id === activeId) || null;

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-[70px] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize:"28px 28px" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-2 text-white/60 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-white transition-colors no-underline text-white/60">Home</Link>
            <span className="text-yellow-400">›</span>
            <span className="text-yellow-400 font-semibold">Academics</span>
          </div>
          <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-3 font-sans">
            Our Curriculum
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Academic Excellence at Every Stage
          </h1>
          <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            Kefjoy Academy & Cradle offers a rich, structured curriculum guided by the Kenyan CBC
            framework — building confident, curious, and capable young people from Pre-School
            all the way through Junior Secondary.
          </p>
          {/* Hero buttons */}
          <div className="flex flex-wrap gap-3 mt-10">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                className={`text-xs font-bold font-sans uppercase tracking-wide px-4 py-2
                            rounded-full border transition-all duration-200 cursor-pointer
                            ${activeId === s.id
                              ? "bg-yellow-400 text-green-900 border-yellow-400"
                              : "bg-white/10 text-white border-white/20 hover:bg-yellow-400 hover:text-green-900 hover:border-yellow-400"}`}>
                {s.level}
              </button>
            ))}
          </div>
        </div>
        <div className="relative h-12 overflow-hidden">
          <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* LEVEL CARDS + EXPANDED DETAIL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Academic Levels</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Choose Your Level</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />

          {/* level cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map((stage) => (
              <LevelCard
                key={stage.id}
                stage={stage}
                isActive={activeId === stage.id}
                onToggle={() => toggle(stage.id)}
              />
            ))}
          </div>

          {/* Expanded detail panel */}
          {activeStage && (
            <StageDetail
              stage={activeStage}
              onClose={() => setActiveId(null)}
            />
          )}
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="py-20 px-6 bg-green-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-2 font-sans">
              How We Teach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our Teaching Approach
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPROACH_CARDS.map((card) => (
              <div key={card.title}
                   className="bg-white/5 border border-white/10 rounded-xl p-7 text-white
                              transition-all duration-300 hover:bg-white/10 hover:-translate-y-1
                              hover:border-yellow-400/40 cursor-pointer">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-white/65 text-sm font-sans leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🏫</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Ready to Begin the Journey?
          </h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you're enrolling a toddler in Pre-School or a teenager in Junior Secondary,
            Kefjoy Academy is ready to welcome your child.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission"
               className="bg-green-900 text-white px-8 py-4 rounded font-black text-sm
                          uppercase tracking-wide font-sans transition-all duration-200 no-underline
                          hover:bg-green-800 hover:-translate-y-0.5 shadow-lg">
              Apply for Admission
            </Link>
            <Link to="/contact"
               className="bg-white text-green-900 px-8 py-4 rounded font-black text-sm
                          uppercase tracking-wide font-sans transition-all duration-200 no-underline
                          hover:bg-green-50 hover:-translate-y-0.5 shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                   border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                   hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
        ↑
      </button>

      <style>{`
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}