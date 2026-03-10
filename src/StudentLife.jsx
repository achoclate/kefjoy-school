import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";


const CLUBS = [
  {
    name: "Science & Technology Club",
    icon: "🔬",
    color: "from-blue-500 to-cyan-600",
    badge: "bg-blue-100 text-blue-800",
    meets: "Every Tuesday",
    desc: "Hands-on experiments, coding projects, and robotics for curious young minds.",
    activities: ["Robotics & Coding", "Science Fair"],
  },
  {
    name: "Debate & Public Speaking",
    icon: "🎤",
    color: "from-violet-500 to-purple-700",
    badge: "bg-violet-100 text-violet-800",
    meets: "Every Wednesday",
    desc: "Build confidence and critical thinking through debate and public speaking.",
    activities: ["Weekly Debates", "Inter-School Competitions"],
  },
  {
    name: "Environmental & Gardening Club",
    icon: "🌿",
    color: "from-emerald-500 to-green-700",
    badge: "bg-emerald-100 text-emerald-800",
    meets: "Every Friday",
    desc: "Students grow, plant, and lead sustainability campaigns around the school.",
    activities: ["School Garden", "Tree Planting"],
  },
  {
    name: "Creative Arts Club",
    icon: "🎨",
    color: "from-orange-400 to-rose-600",
    badge: "bg-orange-100 text-orange-800",
    meets: "Every Thursday",
    desc: "Painting, drama, and creative writing — all displayed at the annual Arts Gala.",
    activities: ["Drama & Theatre", "Arts Gala"],
  },
  {
    name: "Christian Union",
    icon: "✝️",
    color: "from-amber-400 to-yellow-600",
    badge: "bg-amber-100 text-amber-800",
    meets: "Every Monday",
    desc: "Fellowship, worship, and community outreach grounded in our school values.",
    activities: ["Fellowship & Worship", "Community Outreach"],
  },
  {
    name: "Journalism & Media Club",
    icon: "📰",
    color: "from-slate-500 to-gray-700",
    badge: "bg-slate-100 text-slate-800",
    meets: "Every Tuesday",
    desc: "Students write, photograph, and film to produce the school newsletter.",
    activities: ["School Newsletter", "Photography"],
  },
];

const SPORTS = [
  {
    name: "Football",
    icon: "⚽",
    color: "from-green-500 to-emerald-700",
    gender: "Boys & Girls",
    season: "Year Round",
    desc: "Competitive football for boys and girls in the regional school league.",
    achievements: ["Regional League Finalists 2023", "3 National Call-Ups"],
  },
  {
    name: "Basketball",
    icon: "🏀",
    color: "from-orange-500 to-red-600",
    gender: "Boys & Girls",
    season: "Term 1 & 2",
    desc: "Fast-paced training three times a week with a dedicated coach.",
    achievements: ["Zone Champions 2023", "Undefeated Home Season"],
  },
  {
    name: "Athletics & Track",
    icon: "🏃",
    color: "from-yellow-500 to-amber-600",
    gender: "All Students",
    season: "Term 2",
    desc: "Sprints, jumps, and field events leading to zonal and national competitions.",
    achievements: ["5 Gold Medals – Zonal Games", "National Qualifier – 100m"],
  },
  {
    name: "Volleyball",
    icon: "🏐",
    color: "from-blue-500 to-indigo-600",
    gender: "Boys & Girls",
    season: "Term 1 & 3",
    desc: "Competitive and recreational sessions open to all skill levels.",
    achievements: ["Sub-County Champions 2022", "Inter-School Invitational Winners"],
  },
  {
    name: "Swimming",
    icon: "🏊",
    color: "from-cyan-500 to-teal-600",
    gender: "All Students",
    season: "Year Round",
    desc: "Lessons for all ages, with advanced students competing at regional level.",
    achievements: ["Water Safety Certified Programme", "Regional Relay Champions"],
  },
  {
    name: "Chess",
    icon: "♟️",
    color: "from-stone-500 to-zinc-700",
    gender: "All Students",
    season: "Year Round",
    desc: "Strategic thinking and patience, with regional and national competitions.",
    achievements: ["National Schools Chess Top 10", "Regional Champion 2023"],
  },
];

const COUNSELLING = [
  {
    title: "Academic Support",
    icon: "📚",
    color: "from-blue-500 to-indigo-600",
    desc: "Personalised study plans and mentoring to help every student reach their potential.",
    features: ["Individual Learning Plans", "Study Skills Workshops"],
  },
  {
    title: "Social & Emotional Wellbeing",
    icon: "💛",
    color: "from-yellow-400 to-amber-500",
    desc: "A safe, confidential space to talk through personal challenges and feelings.",
    features: ["Confidential 1-on-1 Sessions", "Stress & Anxiety Management"],
  },
  {
    title: "Career & Life Orientation",
    icon: "🧭",
    color: "from-emerald-500 to-green-700",
    desc: "Helping students explore strengths, interests, and career pathways from Grade 7.",
    features: ["Career Interest Assessments", "Subject Choice Guidance"],
  },
  {
    title: "Conflict Resolution",
    icon: "🤝",
    color: "from-violet-500 to-purple-700",
    desc: "Structured mediation that restores relationships and builds emotional intelligence.",
    features: ["Peer Mediation Programme", "Anti-Bullying Initiatives"],
  },
  {
    title: "Family & Parental Support",
    icon: "👨‍👩‍👧",
    color: "from-rose-500 to-pink-600",
    desc: "Counsellors partner with families through consultations, workshops, and referrals.",
    features: ["Parent Consultation Sessions", "Parenting Workshops"],
  },
  {
    title: "Special Educational Needs",
    icon: "⭐",
    color: "from-orange-400 to-red-500",
    desc: "Tailored Individual Education Plans for students with learning differences.",
    features: ["Individual Education Plans (IEPs)", "Inclusive Classroom Support"],
  },
];

// Hero title and subtitle change depending on which section is active
const SECTION_META = {
  clubs: {
    badge: "Extracurriculars",
    title: "Clubs & Activities",
    subtitle: "Our clubs run all year and are open to every student. They build confidence, friendships, and passions that last a lifetime.",
  },
  sports: {
    badge: "Athletics & Recreation",
    title: "Sports at Kefjoy",
    subtitle: "Sport teaches resilience, discipline, and teamwork. We offer competitive and recreational programmes for every level.",
  },
  counseling: {
    badge: "Pastoral Care",
    title: "Guidance & Counselling",
    subtitle: "Every child deserves to feel safe, heard, and understood. Our counselling team is here for students and families every step of the way.",
  },
};

// Tab buttons in the hero 
const SECTIONS = [
  { id: "clubs",      label: "Clubs & Activities",    icon: "🏆", path: "/student-life/clubs"      },
  { id: "sports",     label: "Sports",                 icon: "⚽", path: "/student-life/sports"     },
  { id: "counseling", label: "Guidance & Counselling", icon: "💛", path: "/student-life/counseling" },
];

// Club card 
function ClubCard({ club }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden shadow-sm
                     transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                     ${open ? "border-green-200" : "border-gray-100"}`}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${club.color}
                          flex items-center justify-center text-xl shadow-sm flex-shrink-0`}>
            {club.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-green-900 leading-snug">{club.name}</h3>
            <p className="text-xs text-gray-400 font-sans">📅 {club.meets}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-sans leading-relaxed mb-3">{club.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {club.activities.map((a) => (
            <span key={a} className={`${club.badge} text-xs font-semibold px-2 py-0.5 rounded-full font-sans`}>{a}</span>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-xs font-black uppercase tracking-wide text-green-700 font-sans
                     bg-transparent border-none cursor-pointer p-0 hover:text-green-900
                     transition-colors duration-200 flex items-center gap-1.5">
          <span className={`w-4 h-4 rounded-full bg-green-100 flex items-center justify-center
                           text-green-700 font-black text-xs transition-transform duration-300
                           ${open ? "rotate-45" : ""}`}>+</span>
          {open ? "Show Less" : "Learn More"}
        </button>
      </div>
      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-gray-50 bg-gray-50"
             style={{ animation: "fadeIn 0.25s ease" }}>
          <p className="text-xs text-gray-500 font-sans pt-3 leading-relaxed">
            Interested in joining? Speak to your class teacher or visit the club on their meeting day. No prior experience needed — all are welcome!
          </p>
          <Link to="/contact"
             className="inline-block mt-3 bg-green-900 text-white px-4 py-2 rounded-lg
                        text-xs font-black uppercase tracking-wide font-sans no-underline
                        transition-all duration-200 hover:bg-green-700">
            Enquire About This Club
          </Link>
        </div>
      )}
    </div>
  );
}

// Sport card 
function SportCard({ sport }) {
  return (
    <div className="bg-white border border-gray-100 border-l-4 border-l-green-700 rounded-2xl
                    shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${sport.color}
                          flex items-center justify-center text-xl shadow-sm flex-shrink-0`}>
            {sport.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-green-900">{sport.name}</h3>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full font-sans">{sport.gender}</span>
              <span className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full font-sans">{sport.season}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-sans leading-relaxed mb-3">{sport.desc}</p>
        <div className="border-t border-gray-100 pt-3">
          <p className="text-xs font-black uppercase tracking-wide text-green-700 font-sans mb-2">🏅 Achievements</p>
          <ul className="flex flex-col gap-1">
            {sport.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2 text-xs text-gray-500 font-sans">
                <span className="text-yellow-400 font-black mt-0.5">✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Counselling card
function CounsellingCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color}
                      flex items-center justify-center text-xl shadow-sm mb-4`}>
        {item.icon}
      </div>
      <h3 className="text-sm font-bold text-green-900 mb-2">{item.title}</h3>
      <p className="text-xs text-gray-500 font-sans leading-relaxed mb-3">{item.desc}</p>
      <div className="flex flex-col gap-1.5">
        {item.features.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
            <span className="text-xs text-gray-500 font-sans">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main component that reads the URL param and renders the right section
export default function StudentLife() {
  const { section } = useParams();
  const navigate = useNavigate();

  // Fall back to "clubs" if someone lands on /student-life
  const activeSection = section || "clubs";

  // Redirect to clubs if the URL has an unrecognised section
  useEffect(() => {
    const valid = SECTIONS.map(s => s.id);
    if (section && !valid.includes(section)) {
      navigate("/student-life/clubs", { replace: true });
    }
  }, [section, navigate]);

  const meta = SECTION_META[activeSection] || SECTION_META.clubs;

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero where the title and subtitle update based on which section you're on */}
      <section className="relative pt-32 pb-0 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-950
                          overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pb-0">
          <div className="flex items-center gap-2 text-xs font-sans text-white/50 mb-5 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">Student Life</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            {meta.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            {meta.title}
          </h1>
          <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            {meta.subtitle}
          </p>

          {/* Tab buttons that onclicking navigates to respective route */}
          <div className="flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <Link
                key={s.id}
                to={s.path}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-t-xl font-black text-xs
                            uppercase tracking-wide font-sans no-underline
                            transition-all duration-200
                            ${activeSection === s.id
                              ? "bg-white text-green-900 shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20"}`}>
                <span>{s.icon}</span>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs section */}
      {activeSection === "clubs" && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Extracurriculars</p>
                <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Clubs & Activities</h2>
                <div className="w-14 h-1 bg-yellow-400 rounded" />
              </div>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
                All clubs run throughout the year and are open to every student regardless of experience.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CLUBS.map((club) => <ClubCard key={club.name} club={club} />)}
            </div>
          </div>
        </section>
      )}

      {/* Sports section */}
      {activeSection === "sports" && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Athletics & Recreation</p>
                <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Sports at Kefjoy</h2>
                <div className="w-14 h-1 bg-yellow-400 rounded" />
              </div>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
                Competitive and recreational programmes for every interest and ability level.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { value: "6+",   label: "Sports Offered" },
                { value: "12",   label: "Trophies This Year" },
                { value: "3",    label: "Dedicated Coaches" },
                { value: "100%", label: "Student Participation" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                  <p className="text-3xl font-black text-green-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SPORTS.map((sport) => <SportCard key={sport.name} sport={sport} />)}
            </div>
          </div>
        </section>
      )}

      {/* Counselling section */}
      {activeSection === "counseling" && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Pastoral Care</p>
                <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Guidance & Counselling</h2>
                <div className="w-14 h-1 bg-yellow-400 rounded" />
              </div>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
                Our counselling team is here for students and families every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 md:p-10 mb-14
                            flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                💛
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Our Doors Are Always Open</h3>
                <p className="text-white/70 font-sans text-sm leading-relaxed max-w-2xl">
                  Our counsellors are available Monday to Friday during school hours. All sessions are confidential.
                  Students may self-refer, or be referred by a teacher or parent.
                </p>
              </div>
              <Link to="/contact"
                 className="flex-shrink-0 bg-yellow-400 text-green-900 px-6 py-3 rounded-xl font-black
                            text-xs uppercase tracking-wide font-sans no-underline transition-all duration-200
                            hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg relative z-10">
                Book a Session
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COUNSELLING.map((item) => <CounsellingCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-300 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Help Your Child Flourish</h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            From the football pitch to the counsellor's office, Kefjoy Academy nurtures every dimension of your child's growth.
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                   border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                   hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
        ↑
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}