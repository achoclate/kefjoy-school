import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const STEPS = [
  { number: "01", title: "Get in Touch",       icon: "✉️", desc: "Contact our Admissions team via email or phone. We'll answer all your questions and arrange a campus viewing at your convenience." },
  { number: "02", title: "Campus Visit",        icon: "🏫", desc: "Tour our facilities, meet our teachers, and get a feel for the Kefjoy learning environment. We'd love to show you around!" },
  { number: "03", title: "Submit Application",  icon: "📋", desc: "Complete and submit the application form along with the required documents and application fee." },
  { number: "04", title: "Receive Decision",    icon: "✅", desc: "Once we review your application, we will communicate our decision and guide you through the next steps for enrolment." },
];

const FAQS = [
  { q: "What is the student admission process?",                       open: true,  a: "Contact our Admissions team via info@kefjoyacademy.sc.ke. Upon answering your questions and arranging a campus visit, we will provide you with the necessary application forms. Once we receive a completed application and the application fee is paid, we will review and communicate our decision to you." },
  { q: "Does Kefjoy Academy practice selective entry?",                open: false, a: "We are a non-selective school that believes in opportunity for all children. We do not offer or deny enrolment based on previous academic achievement. If we believe a child has Special Education Needs (SEN), we will work with parents to develop an Individual Education Plan (IEP) to support those unique needs." },
  { q: "Does Kefjoy Academy accept applications throughout the year?", open: false, a: "Yes, you can apply for entry at any point in the school year and may join our school at any time. We assess prior learning before deciding whether we can best meet your child's needs." },
  { q: "How is year level placement determined?",                      open: false, a: "In most circumstances, a child will enter their age-appropriate year level. In special circumstances we will consider placing a child in a year level above or below. Please alert the school upon application if you wish your child to be considered for a different level." },
  { q: "What documents are required for admission?",                   open: false, a: "You will need the child's birth certificate, previous school report cards (if applicable), immunization records, passport photos, and a completed application form. Our admissions team will guide you through the full requirements." },
];

// const LEVELS = [
//   { title: "Pre-School",       age: "Ages 2 – 5",   icon: "🌱", href: "/academics#preschool" },
//   { title: "Lower Primary",    age: "Ages 6 – 8",   icon: "📖", href: "/academics#lower-primary" },
//   { title: "Upper Primary",    age: "Ages 9 – 11",  icon: "🔬", href: "/academics#upper-primary" },
//   { title: "Junior Secondary", age: "Ages 12 – 14", icon: "🎓", href: "/academics#junior-secondary" },
// ];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ faq }) {
  const [open, setOpen] = useState(faq.open);
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300
                     ${open ? "shadow-md border-green-200" : "shadow-sm border-gray-100"} border`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer
                   transition-all duration-200 focus:outline-none
                   ${open ? "bg-green-900" : "bg-white hover:bg-green-50"}`}
      >
        <span className={`font-semibold text-sm font-sans pr-4 leading-snug
                         ${open ? "text-white" : "text-green-900"}`}>
          {faq.q}
        </span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-black
                         flex-shrink-0 transition-all duration-300
                         ${open ? "bg-yellow-400 text-green-900 rotate-45" : "bg-green-100 text-green-700"}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-green-50 border-t border-green-100">
          <p className="text-sm text-gray-600 font-sans leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Admission() {
  const [form, setForm] = useState({
    parentName: "", phone: "", email: "",
    childName: "", childAge: "", currentSchool: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900
                          flex items-center justify-center overflow-hidden min-h-[380px]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans text-white/50 mb-5 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">Admission</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Join Our Community
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-4">Admissions</h1>
          <p className="text-base md:text-lg text-white/75 font-sans font-light max-w-xl mx-auto leading-relaxed">
            We're delighted you're considering Kefjoy Academy for your child. Here's everything you need to know to get started.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <a href="#enquiry"
               className="bg-yellow-400 text-green-900 px-7 py-3 rounded font-black text-xs uppercase
                          tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-yellow-300 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(240,192,64,0.35)]">
              Apply Now →
            </a>
            <a href="#process"
               className="border-2 border-white/40 text-white px-7 py-3 rounded font-black text-xs
                          uppercase tracking-wide font-sans no-underline transition-all duration-200
                          hover:border-white hover:bg-white/10">
              View Process
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── FORM (left) + FAQs (right) ── */}
      <section id="enquiry" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
              We'd Love to Hear From You
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Enquiry Form — dark green card ── */}
            <div className="bg-green-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute -bottom-16 -left-12 w-56 h-56 bg-yellow-400/10 rounded-full pointer-events-none" />

              <div className="relative z-10">
                <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-1 font-sans">Admissions Enquiry</p>
                <h3 className="text-2xl font-bold text-white mb-1">Contact Our Team</h3>
                <p className="text-white/55 text-sm font-sans mb-5">Fill in the form and we'll be in touch within 1–2 business days.</p>
                <div className="w-10 h-1 bg-yellow-400 rounded mb-7" />

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl mb-5 shadow-lg">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                    <p className="text-white/65 font-sans leading-relaxed max-w-xs mb-7 text-sm">
                      We've received your enquiry and will be in touch within 1–2 business days.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-black text-xs
                                 uppercase tracking-wide font-sans border-none cursor-pointer
                                 hover:bg-yellow-300 transition-all duration-200">
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "parentName", label: "Parent's Name",  placeholder: "e.g. Jane Doe",    required: true },
                        { name: "phone",      label: "Contact Number", placeholder: "+254 700 000 000", required: true },
                      ].map((f) => (
                        <div key={f.name} className="flex flex-col gap-1.5">
                          <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                            {f.label} {f.required && <span className="text-yellow-400">*</span>}
                          </label>
                          <input name={f.name} value={form[f.name]} onChange={handleChange}
                                 required={f.required} placeholder={f.placeholder}
                                 className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                            text-white placeholder-white/35 focus:outline-none focus:border-yellow-400
                                            focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200" />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                        Email Address <span className="text-yellow-400">*</span>
                      </label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                             placeholder="e.g. parent@email.com"
                             className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                        text-white placeholder-white/35 focus:outline-none focus:border-yellow-400
                                        focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                          Child's Name <span className="text-yellow-400">*</span>
                        </label>
                        <input name="childName" value={form.childName} onChange={handleChange} required
                               placeholder="e.g. John Doe"
                               className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                          text-white placeholder-white/35 focus:outline-none focus:border-yellow-400
                                          focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                          Child's Age <span className="text-yellow-400">*</span>
                        </label>
                        <select name="childAge" value={form.childAge} onChange={handleChange} required
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                           text-white focus:outline-none focus:border-yellow-400
                                           focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200">
                          <option value="" className="text-gray-800">Select age</option>
                          {Array.from({ length: 16 }, (_, i) => i + 2).map((age) => (
                            <option key={age} value={age} className="text-gray-800">{age} years old</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                        Current School
                      </label>
                      <input name="currentSchool" value={form.currentSchool} onChange={handleChange}
                             placeholder="e.g. ABC Primary School (or 'N/A' if new)"
                             className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                        text-white placeholder-white/35 focus:outline-none focus:border-yellow-400
                                        focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-black uppercase tracking-wide text-white/65 font-sans">
                        Additional Message
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                                placeholder="Any questions or special requirements..."
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-sans
                                           text-white placeholder-white/35 focus:outline-none focus:border-yellow-400
                                           focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 resize-none" />
                    </div>

                    <button type="submit"
                      className="mt-2 w-full bg-yellow-400 text-green-900 px-8 py-4 rounded-xl font-black text-sm
                                 uppercase tracking-wide font-sans transition-all duration-200 cursor-pointer
                                 border-none hover:bg-yellow-300 hover:-translate-y-0.5
                                 shadow-[0_4px_20px_rgba(240,192,64,0.35)]">
                      Register Enquiry →
                    </button>
                    <p className="text-white/35 text-xs font-sans text-center mt-1">
                      We respond within 1–2 business days
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── RIGHT: FAQs ── */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Common Questions</p>
                <h3 className="text-3xl font-bold text-green-900 mb-2 leading-tight">Frequently Asked Questions</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-5">
                  Can't find what you're looking for? Use the form to send us your question directly.
                </p>
                <div className="w-10 h-1 bg-yellow-400 rounded mb-6" />
              </div>

              <div className="flex flex-col gap-3">
                {FAQS.map((faq) => <FaqItem key={faq.q} faq={faq} />)}
              </div>

              {/* quick contact strip */}
              <div className="mt-2 bg-green-50 border border-green-100 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-green-800 font-sans mb-0.5">Prefer to call?</p>
                  <p className="text-sm text-gray-600 font-sans">Reach our admissions team directly at <strong className="text-green-800">+254 700 000 000</strong></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADMISSION STEPS ── */}
      <section id="process" className="py-20 px-6 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">How To Apply</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Admission Process</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5
                                  bg-gradient-to-r from-yellow-400 to-green-200 z-0 -translate-y-0.5" />
                )}
                <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-6
                                shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-900 flex items-center justify-center
                                  text-2xl mx-auto mb-4 shadow-md">{step.icon}</div>
                  <div className="text-xs font-black tracking-[3px] text-yellow-500 font-sans mb-2">STEP {step.number}</div>
                  <h3 className="text-lg font-bold text-green-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC LEVELS — commented out, do not remove ──
      <section id="fees" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Academic Levels</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">Choose Your Level</h2>
          <div className="w-14 h-1 bg-yellow-400 rounded mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEVELS.map((level) => (
              <div key={level.title}
                   className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                              text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-100
                                flex items-center justify-center text-3xl mb-4">{level.icon}</div>
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
                  <button className="w-full bg-yellow-400 text-green-900 px-4 py-2.5 rounded-lg
                                     text-xs font-black uppercase tracking-wide font-sans border-none
                                     cursor-pointer transition-all duration-200 hover:bg-yellow-300">
                    Fee Structure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ── END ACADEMIC LEVELS ── */}

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