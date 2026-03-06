import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CLUBS = [
  {
    name: "Science & Technology Club",
    icon: "🔬",
    color: "from-blue-500 to-cyan-600",
    badge: "bg-blue-100 text-blue-800",
    members: "24 members",
    meets: "Every Tuesday",
    desc: "Students explore STEM concepts through hands-on experiments, coding projects, and robotics challenges. Our annual Science Fair showcases their best innovations.",
    activities: ["Robotics & Coding", "Lab Experiments", "Science Fair", "STEM Competitions"],
  },
  {
    name: "Debate & Public Speaking",
    icon: "🎤",
    color: "from-violet-500 to-purple-700",
    badge: "bg-violet-100 text-violet-800",
    members: "18 members",
    meets: "Every Wednesday",
    desc: "Students sharpen critical thinking, research, and public speaking skills. The club competes in inter-school debate competitions and hosts a termly oratory event.",
    activities: ["Weekly Debates", "Oratory Events", "Inter-School Competitions", "Speech Writing"],
  },
  {
    name: "Environmental & Gardening Club",
    icon: "🌿",
    color: "from-emerald-500 to-green-700",
    badge: "bg-emerald-100 text-emerald-800",
    members: "30 members",
    meets: "Every Friday",
    desc: "Nurturing environmental stewardship, students maintain the school garden, run recycling initiatives, and lead awareness campaigns on sustainability.",
    activities: ["School Garden", "Recycling Projects", "Tree Planting", "Eco Campaigns"],
  },
  {
    name: "Creative Arts Club",
    icon: "🎨",
    color: "from-orange-400 to-rose-600",
    badge: "bg-orange-100 text-orange-800",
    members: "22 members",
    meets: "Every Thursday",
    desc: "A vibrant space for young artists to explore painting, sculpture, drama, and creative writing. Students showcase work at the annual Arts Gala.",
    activities: ["Painting & Drawing", "Drama & Theatre", "Creative Writing", "Arts Gala"],
  },
  {
    name: "Christian Union",
    icon: "✝️",
    color: "from-amber-400 to-yellow-600",
    badge: "bg-amber-100 text-amber-800",
    members: "40 members",
    meets: "Every Monday",
    desc: "Grounded in our Christian values, CU meets for fellowship, worship, and service. Students organise community outreach and termly devotional events.",
    activities: ["Fellowship & Worship", "Bible Study", "Community Outreach", "Devotional Events"],
  },
  {
    name: "Journalism & Media Club",
    icon: "📰",
    color: "from-slate-500 to-gray-700",
    badge: "bg-slate-100 text-slate-800",
    members: "16 members",
    meets: "Every Tuesday",
    desc: "Students produce the school newsletter, manage the noticeboard, and document school events through photography and video. A hub for budding journalists.",
    activities: ["School Newsletter", "Photography", "Video Production", "Event Coverage"],
  },
];

const SPORTS = [
  {
    name: "Football",
    icon: "⚽",
    color: "from-green-500 to-emerald-700",
    gender: "Boys & Girls",
    season: "Year Round",
    level: "Competitive",
    desc: "Our football programme develops technical skills, teamwork, and tactical awareness. Both boys' and girls' teams compete in the regional school league.",
    achievements: ["Regional League Finalists 2023", "Best Fair Play Award", "3 National Call-Ups"],
  },
  {
    name: "Basketball",
    icon: "🏀",
    color: "from-orange-500 to-red-600",
    gender: "Boys & Girls",
    season: "Term 1 & 2",
    level: "Competitive",
    desc: "Fast-paced and dynamic, basketball at Kefjoy builds agility, court vision, and leadership. Our teams train three times weekly with a dedicated coach.",
    achievements: ["Zone Champions 2023", "MVP Award – Regional Finals", "Undefeated Home Season"],
  },
  {
    name: "Athletics & Track",
    icon: "🏃",
    color: "from-yellow-500 to-amber-600",
    gender: "All Students",
    season: "Term 2",
    level: "Competitive",
    desc: "From sprints to long jump, our athletics programme identifies and nurtures talent. Students compete at zonal and national school games.",
    achievements: ["5 Gold Medals – Zonal Games", "National Qualifier – 100m", "Cross Country Champions"],
  },
  {
    name: "Volleyball",
    icon: "🏐",
    color: "from-blue-500 to-indigo-600",
    gender: "Boys & Girls",
    season: "Term 1 & 3",
    level: "Recreational & Competitive",
    desc: "Volleyball builds coordination, communication, and team spirit. We field both competitive teams and recreational sessions open to all students.",
    achievements: ["Sub-County Champions 2022", "Best Team Spirit Award", "Inter-School Invitational Winners"],
  },
  {
    name: "Swimming",
    icon: "🏊",
    color: "from-cyan-500 to-teal-600",
    gender: "All Students",
    season: "Year Round",
    level: "All Levels",
    desc: "Swimming is a core life skill at Kefjoy. All students from Pre-School upwards receive swimming lessons, with advanced students competing at regional level.",
    achievements: ["Water Safety Certified Programme", "Regional Relay Champions", "Annual Swim Gala"],
  },
  {
    name: "Chess",
    icon: "♟️",
    color: "from-stone-500 to-zinc-700",
    gender: "All Students",
    season: "Year Round",
    level: "All Levels",
    desc: "Chess sharpens strategic thinking and patience. Our chess club has produced several regional champions and participates in national school chess tournaments.",
    achievements: ["National Schools Chess Top 10", "Regional Champion 2023", "Inter-School Tournament Winners"],
  },
];

const COUNSELLING = [
  {
    title: "Academic Support",
    icon: "📚",
    color: "from-blue-500 to-indigo-600",
    desc: "Our counsellors work closely with teachers to identify students who may be struggling academically. Personalised study plans, mentoring, and learning support sessions ensure every student can reach their potential.",
    features: ["Individual Learning Plans", "Study Skills Workshops", "Exam Preparation Support", "Teacher-Counsellor Collaboration"],
  },
  {
    title: "Social & Emotional Wellbeing",
    icon: "💛",
    color: "from-yellow-400 to-amber-500",
    desc: "We believe emotional health is as important as academic achievement. Students have access to a safe, confidential space to discuss personal challenges, friendships, family matters, or anything weighing on their minds.",
    features: ["Confidential 1-on-1 Sessions", "Peer Support Groups", "Stress & Anxiety Management", "Social Skills Development"],
  },
  {
    title: "Career & Life Orientation",
    icon: "🧭",
    color: "from-emerald-500 to-green-700",
    desc: "From Grade 7 onwards, our counsellors help students explore their strengths, interests, and career possibilities. We guide subject choices, introduce career pathways, and host professionals for inspiration sessions.",
    features: ["Career Interest Assessments", "Subject Choice Guidance", "Guest Professional Sessions", "Future Pathways Planning"],
  },
  {
    title: "Conflict Resolution",
    icon: "🤝",
    color: "from-violet-500 to-purple-700",
    desc: "When disagreements arise between students, our counsellors facilitate fair, structured resolution processes that restore relationships and build emotional intelligence in all parties.",
    features: ["Peer Mediation Programme", "Restorative Practices", "Anti-Bullying Initiatives", "Conflict De-escalation Training"],
  },
  {
    title: "Family & Parental Support",
    icon: "👨‍👩‍👧",
    color: "from-rose-500 to-pink-600",
    desc: "We partner with families as the primary influencers of a child's development. Counsellors are available to meet with parents, offer parenting workshops, and provide referrals to specialist services where needed.",
    features: ["Parent Consultation Sessions", "Family Communication Support", "Parenting Workshops", "External Referral Network"],
  },
  {
    title: "Special Educational Needs",
    icon: "⭐",
    color: "from-orange-400 to-red-500",
    desc: "Through our Integrated Special Unit, students with learning differences receive dedicated support. Our SEN team develops Individual Education Plans tailored to each child's unique profile.",
    features: ["Individual Education Plans (IEPs)", "Learning Difference Assessments", "Inclusive Classroom Support", "Specialist Resource Materials"],
  },
];

const SECTIONS = [
  { id: "clubs",      label: "Clubs & Activities", icon: "🏆" },
  { id: "sports",     label: "Sports",              icon: "⚽" },
  { id: "counseling", label: "Guidance & Counselling", icon: "💛" },
];

// ─── CLUB CARD ────────────────────────────────────────────────────────────────
function ClubCard({ club }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden shadow-sm
                     transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                     ${open ? "border-green-200 shadow-md" : "border-gray-100"}`}>
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${club.color}
                          flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
            {club.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-green-900 leading-snug mb-1">{club.name}</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs font-sans text-gray-400">👥 {club.members}</span>
              <span className="text-gray-200">·</span>
              <span className="text-xs font-sans text-gray-400">📅 {club.meets}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4">{club.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {club.activities.map((a) => (
            <span key={a} className={`${club.badge} text-xs font-semibold px-2.5 py-1 rounded-full font-sans`}>{a}</span>
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
        <div className="px-6 pb-6 pt-0 border-t border-gray-50 bg-gray-50"
             style={{ animation: "fadeIn 0.25s ease" }}>
          <p className="text-xs text-gray-500 font-sans pt-4 leading-relaxed">
            Interested in joining? Speak to your class teacher or visit the club during their scheduled meeting.
            All clubs are open to students of the relevant age group — no prior experience needed!
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

// ─── SPORT CARD ───────────────────────────────────────────────────────────────
function SportCard({ sport }) {
  return (
    <div className="bg-white border border-gray-100 border-l-4 border-l-green-700 rounded-2xl overflow-hidden shadow-sm
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sport.color}
                          flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
            {sport.icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-green-900 mb-1">{sport.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full font-sans">{sport.gender}</span>
              <span className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-2.5 py-0.5 rounded-full font-sans">{sport.season}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full font-sans">{sport.level}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5">{sport.desc}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-black uppercase tracking-wide text-green-700 font-sans mb-2">🏅 Recent Achievements</p>
          <ul className="flex flex-col gap-1.5">
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

// ─── COUNSELLING CARD ─────────────────────────────────────────────────────────
function CounsellingCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color}
                      flex items-center justify-center text-2xl shadow-md mb-5`}>
        {item.icon}
      </div>
      <h3 className="text-lg font-bold text-green-900 mb-3">{item.title}</h3>
      <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5">{item.desc}</p>
      <div className="flex flex-col gap-2">
        {item.features.map((f) => (
          <div key={f} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
            <span className="text-xs text-gray-500 font-sans">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function StudentLife() {
  const [activeSection, setActiveSection] = useState("clubs");
  const location = useLocation();

  // Auto-scroll and activate section from URL hash (e.g. /student-life#sports)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const valid = SECTIONS.map(s => s.id);
    if (hash && valid.includes(hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-0 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-950
                          overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pb-0">
          <div className="flex items-center gap-2 text-xs font-sans text-white/50 mb-5 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">Student Life</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Beyond the Classroom
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Student Life at Kefjoy
          </h1>
          <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            We believe every child thrives when they're engaged, supported, and inspired — inside and outside the classroom.
            Explore our vibrant community of clubs, sports, and pastoral care.
          </p>

          {/* ── Section Tab Nav ── */}
          <div className="flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-t-xl font-black text-xs
                            uppercase tracking-wide font-sans border-none cursor-pointer
                            transition-all duration-200
                            ${activeSection === s.id
                              ? "bg-white text-green-900 shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20"}`}>
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUBS ── */}
      <section id="clubs" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Extracurriculars</p>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Clubs & Activities</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded" />
            </div>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
              Our clubs run throughout the school year and are open to all students. They build confidence, friendships, and passions that last a lifetime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLUBS.map((club) => <ClubCard key={club.name} club={club} />)}
          </div>
        </div>
      </section>

      {/* ── SPORTS ── */}
      <section id="sports" className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Athletics & Recreation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Sports at Kefjoy</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded" />
            </div>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
              Sport teaches resilience, discipline, and teamwork. We offer both competitive and recreational programmes for every interest and ability level.
            </p>
          </div>

          {/* Stats strip */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS.map((sport) => <SportCard key={sport.name} sport={sport} />)}
          </div>
        </div>
      </section>

      {/* ── GUIDANCE & COUNSELLING ── */}
      <section id="counseling" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Pastoral Care</p>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Guidance & Counselling</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded" />
            </div>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
              Every child deserves to feel safe, heard, and understood. Our dedicated counselling team is here for students and families every step of the way.
            </p>
          </div>

          {/* Counsellor intro banner */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 md:p-10 mb-14
                          flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center
                            text-4xl shadow-lg flex-shrink-0">
              💛
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Our Doors Are Always Open</h3>
              <p className="text-white/70 font-sans text-sm leading-relaxed max-w-2xl">
                Our fully qualified counsellors are available Monday to Friday during school hours. All sessions are
                confidential. Students may self-refer, or be referred by a teacher or parent. We work in partnership
                with families to ensure every child feels valued, supported, and empowered to thrive.
              </p>
            </div>
            <Link to="/contact"
               className="flex-shrink-0 bg-yellow-400 text-green-900 px-6 py-3 rounded-xl font-black
                          text-xs uppercase tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg relative z-10">
              Book a Session
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNSELLING.map((item) => <CounsellingCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-300 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Help Your Child Flourish
          </h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            From the football pitch to the counsellor's office, Kefjoy Academy is committed to nurturing every dimension of your child's growth.
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