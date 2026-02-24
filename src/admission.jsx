import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

// DATA 
const STEPS = [
  {
    number: "01",
    title: "Get in Touch",
    desc: "Contact our Admissions team via email or phone. We'll answer all your questions and arrange a campus viewing at your convenience.",
    icon: "✉️",
  },
  {
    number: "02",
    title: "Campus Visit",
    desc: "Tour our facilities, meet our teachers, and get a feel for the Kefjoy learning environment. We'd love to show you around!",
    icon: "🏫",
  },
  {
    number: "03",
    title: "Submit Application",
    desc: "Complete and submit the application form along with the required documents and application fee.",
    icon: "📋",
  },
  {
    number: "04",
    title: "Receive Decision",
    desc: "Once we review your application, we will communicate our decision and guide you through the next steps for enrolment.",
    icon: "✅",
  },
];

const FAQS = [
  {
    q: "What is the student admission process?",
    a: `Contact our Admissions team via info@kefjoyacademy.sc.ke. Upon answering your questions and arranging a campus visit, we will provide you with the necessary application forms. Once we receive a completed application and the application fee is paid, we will review and communicate our decision to you.`,
    open: true,
  },
  {
    q: "Does Kefjoy Academy practice selective entry?",
    a: `We are a non-selective school that believes in opportunity for all children. We do not offer or deny enrolment based on previous academic achievement. If we believe a child has Special Education Needs (SEN), we will work with parents to develop an Individual Education Plan (IEP) to support those unique needs.`,
    open: false,
  },
  {
    q: "Does Kefjoy Academy accept applications throughout the year?",
    a: `Yes, you can apply for entry at any point in the school year and may join our school at any time. We assess prior learning before deciding whether we can best meet your child's needs.`,
    open: false,
  },
  {
    q: "How is year level placement determined?",
    a: `In most circumstances, a child will enter their age-appropriate year level. In special circumstances we will consider placing a child in a year level above or below. Please alert the school upon application if you wish your child to be considered for a different level.`,
    open: false,
  },
  {
    q: "What documents are required for admission?",
    a: `You will need the child's birth certificate, previous school report cards (if applicable), immunization records, passport photos, and a completed application form. Our admissions team will guide you through the full requirements.`,
    open: false,
  },
];

const LEVELS = [
  { title: "Pre-School",       age: "Ages 2 – 5",   icon: "🌱", href: "/academics" },
  { title: "Lower Primary",    age: "Ages 6 – 8",   icon: "📖", href: "/academics" },
  { title: "Upper Primary",    age: "Ages 9 – 11",  icon: "🔬", href: "/academics" },
  { title: "Junior Secondary", age: "Ages 12 – 14", icon: "🎓", href: "/academics" },
];

const WHY = [
  { icon: "🌟", title: "Christian Values",        desc: "A faith-based environment nurturing spiritual growth alongside academic excellence." },
  { icon: "🧩", title: "Integrated Special Unit", desc: "Dedicated support ensuring every child's potential is unlocked regardless of their needs." },
  { icon: "🌍", title: "Holistic Development",    desc: "Academics, arts, sports and character all woven into our daily programme." },
  { icon: "👨‍🏫", title: "Experienced Educators",  desc: "Passionate teachers committed to each child's unique journey of growth." },
];

const QUICK_LINKS    = ["Gallery", "Events", "Contact Us", "Programs", "Admission"];
const ACADEMIC_LINKS = ["Pre-School", "Lower Primary", "Upper Primary", "Junior Secondary"];

// FAQ ITEM 
function FaqItem({ faq }) {
  const [open, setOpen] = useState(faq.open);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white
                   text-left cursor-pointer transition-colors duration-200
                   hover:bg-green-50 focus:outline-none"
      >
        <span className="font-semibold text-green-900 text-base font-sans pr-4">{faq.q}</span>
        <span className={`text-green-700 text-xl font-bold transition-transform duration-300 flex-shrink-0
                         ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-green-50 border-t border-gray-100">
          <p className="text-sm text-gray-600 font-sans leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}


export default function Admission() {
  const [form, setForm] = useState({
    parentName: "", phone: "", email: "",
    childName: "", childAge: "", currentSchool: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900
                          flex items-center justify-center overflow-hidden min-h-[340px]">
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans text-white/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/60">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">Admission</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Join Our Community
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Admissions
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
            We're delighted you're considering Kefjoy Academy for your child. Here's everything you need to know to get started.
          </p>
        </div>
      </section>

      {/* ── ADMISSION STEPS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">How To Apply</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Admission Process
          </h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5
                                  bg-gradient-to-r from-yellow-400 to-green-200 z-0 -translate-y-0.5" />
                )}
                <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-6
                                shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                                text-center">
                  <div className="w-16 h-16 rounded-full bg-green-900 flex items-center justify-center
                                  text-2xl mx-auto mb-4 shadow-md">
                    {step.icon}
                  </div>
                  <div className="text-xs font-black tracking-[3px] text-yellow-500 font-sans mb-2">
                    STEP {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + FORM ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FAQs */}
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-8" />
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-tight">
              Contact Our Admissions Team
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-8" />

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  We've received your enquiry and our admissions team will be in touch within 1–2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-yellow-400 text-green-900 px-6 py-3 rounded font-black
                             text-sm uppercase tracking-wide font-sans hover:bg-yellow-300
                             transition-colors duration-200 cursor-pointer border-none"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                      Parent's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="parentName" value={form.parentName} onChange={handleChange} required
                      placeholder="e.g. Jane Doe"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                                 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                                 transition-all duration-200 text-gray-700"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="e.g. +254 700 000 000"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                                 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                                 transition-all duration-200 text-gray-700"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="e.g. parent@email.com"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                               focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                               transition-all duration-200 text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                      Child's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="childName" value={form.childName} onChange={handleChange} required
                      placeholder="e.g. John Doe"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                                 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                                 transition-all duration-200 text-gray-700"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                      Child's Age <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="childAge" value={form.childAge} onChange={handleChange} required
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                                 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                                 transition-all duration-200 text-gray-700 bg-white"
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 16 }, (_, i) => i + 2).map((age) => (
                        <option key={age} value={age}>{age} years old</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                    Current School
                  </label>
                  <input
                    name="currentSchool" value={form.currentSchool} onChange={handleChange}
                    placeholder="e.g. ABC Primary School (or 'N/A' if new to school)"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                               focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                               transition-all duration-200 text-gray-700"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-wide text-green-800 font-sans">
                    Additional Message
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Any questions or special requirements we should know about..."
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-sans
                               focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100
                               transition-all duration-200 text-gray-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-black text-sm
                             uppercase tracking-wide font-sans transition-all duration-200 cursor-pointer
                             border-none hover:bg-yellow-300 hover:-translate-y-0.5
                             shadow-[0_4px_15px_rgba(240,192,64,0.4)]"
                >
                  Register Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC LEVELS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
            Academic Levels
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Choose Your Level
          </h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEVELS.map((level) => (
              <div key={level.title}
                   className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                              text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-100
                                flex items-center justify-center text-3xl mb-4">
                  {level.icon}
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-1">{level.title}</h3>
                <p className="text-xs text-green-600 font-sans font-semibold tracking-wide uppercase mb-5">
                  {level.age}
                </p>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <Link to={level.href}
                     className="block w-full text-center bg-green-900 text-white px-4 py-2.5
                                rounded-lg text-xs font-black uppercase tracking-wide font-sans
                                no-underline transition-all duration-200 hover:bg-green-700">
                    Get Details
                  </Link>
                  <button
                    className="w-full bg-yellow-400 text-green-900 px-4 py-2.5 rounded-lg
                               text-xs font-black uppercase tracking-wide font-sans border-none
                               cursor-pointer transition-all duration-200 hover:bg-yellow-300"
                  >
                    Fee Structure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            What Sets Kefjoy Apart
          </h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
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

      {/* ── CTA BANNER ── */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 py-20 px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-base opacity-85 mb-9 font-sans max-w-xl mx-auto leading-relaxed">
          Our admissions team is here to guide you every step of the way.
          Reach out today and let's unlock your child's potential together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:info@kefjoyacademy.sc.ke"
             className="inline-block bg-yellow-400 text-green-900 px-10 py-4 rounded font-black text-sm
                        uppercase tracking-wide font-sans transition-all duration-200 no-underline
                        hover:bg-yellow-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(240,192,64,0.4)]">
            Email Us
          </a>
          <a href="tel:+254700000000"
             className="inline-block bg-transparent text-white px-10 py-4 rounded font-black text-sm
                        uppercase tracking-wide font-sans border-2 border-white/60 no-underline
                        transition-all duration-200 hover:border-white hover:bg-white/10">
            Call Us
          </a>
        </div>
      </div>

      {/* ── SOCIAL / CONTACT BAR ── */}
      <div className="bg-green-950 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Follow Us</h3>
            <p className="text-sm text-white/60 mb-4 font-sans">Stay connected with us on social media</p>
            <div className="flex gap-3">
              {["f", "in", "tw", "yt"].map((s) => (
                <div key={s}
                     className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center
                                justify-center text-white text-sm font-bold font-sans cursor-pointer
                                transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400/10">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Contact Details</h3>
            <div className="text-sm text-white/75 font-sans leading-8">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>✉️ <a href="mailto:info@kefjoyacademy.sc.ke" className="text-yellow-400 no-underline">info@kefjoyacademy.sc.ke</a></p>
            </div>
          </div>
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

      {/* ── FOOTER ── */}
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
                  <Link to={`/${l.toLowerCase().replace(/ /g, "-")}`}
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
    </div>
  );
}