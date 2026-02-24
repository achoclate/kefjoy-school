import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";


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

const QUICK_LINKS    = ["Gallery","Events","Contact Us","Programs","Admission"];
const ACADEMIC_LINKS = ["Pre-School","Lower Primary","Upper Primary","Junior Secondary"];

// ─── STAGE CARD ──────────────────────────────────────────────────────────────

function StageCard({ stage, index }) {
  const [open, setOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <section id={stage.id} className="py-16 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-start`}>

          {/* Visual panel */}
          <div className="w-full lg:w-2/5 shrink-0">
            <div className={`relative rounded-2xl bg-gradient-to-br ${stage.color}
                            p-10 text-white shadow-xl overflow-hidden`}>
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
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center
                                      justify-center shrink-0 mt-0.5">
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
          <div className="flex-1">
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Stage {index + 1}
            </p>
            <h2 className="text-4xl font-bold text-green-900 mb-2 leading-tight">{stage.level}</h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">{stage.description}</p>

            {/* Subjects */}
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

            {/* Expandable */}
            <button onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-green-700 font-bold text-sm font-sans
                         hover:text-green-900 transition-colors duration-200 bg-transparent
                         border-none cursor-pointer p-0">
              <span className={`w-5 h-5 rounded-full bg-green-100 flex items-center justify-center
                               text-green-700 font-black text-xs transition-transform duration-300
                               ${open ? "rotate-45" : ""}`}>+</span>
              {open ? "Show Less" : "Learn More About This Stage"}
            </button>

            {open && (
              <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 font-sans
                              text-sm text-gray-600 leading-relaxed"
                   style={{ animation: "fadeIn 0.3s ease" }}>
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
            )}

            <div className="mt-8 flex flex-wrap gap-3">
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

      {index < STAGES.length - 1 && (
        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        </div>
      )}
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Academics() {
  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">

      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-[70px] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize:"28px 28px" }} />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* Breadcrumb */}
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

          {/* Quick jump pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {STAGES.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                 className="bg-white/10 hover:bg-yellow-400 hover:text-green-900 text-white
                            text-xs font-bold font-sans uppercase tracking-wide px-4 py-2
                            rounded-full border border-white/20 hover:border-yellow-400
                            transition-all duration-200 no-underline">
                {s.level}
              </a>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="relative h-12 overflow-hidden">
          <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Stage Cards */}
      <div className="bg-white">
        {STAGES.map((stage, index) => (
          <StageCard key={stage.id} stage={stage} index={index} />
        ))}
      </div>

      {/* Teaching Approach */}
      <section className="py-20 px-6 bg-green-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-2 font-sans">How We Teach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Our Teaching Approach</h2>
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

      {/* Footer */}
      <footer className="bg-green-950 border-t border-white/10 pt-16 px-6 pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Kefjoy Academy & Cradle</h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              A Christian-based centre striving to develop whole, balanced minds in children.
              Our Integrated Special Unit ensures every child's potential is unlocked.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">Quick Links</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(/ /g,"-")}`}
                     className="text-sm text-white/60 font-sans no-underline transition-all duration-200
                                hover:text-yellow-400 hover:pl-1">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">Academics</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {ACADEMIC_LINKS.map((l) => (
                <li key={l}>
                  <Link to="/academics"
                     className="text-sm text-white/60 font-sans no-underline transition-all duration-200
                                hover:text-yellow-400 hover:pl-1">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[2px] text-yellow-400 mb-4 font-sans">Get In Touch</h4>
            <div className="text-sm text-white/60 font-sans leading-8">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>✉️ <a href="mailto:info@kefjoyacademy.sc.ke" className="text-yellow-400 no-underline hover:underline">info@kefjoyacademy.sc.ke</a></p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 py-5 text-center text-xs text-white/35 font-sans">
          Copyright © Kefjoy Academy & Cradle 2026. All Rights Reserved.
        </div>
      </footer>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                   border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                   hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
        ↑
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}