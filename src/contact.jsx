import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "What are the school's operating hours?",      a: "We are open Monday to Friday from 7:30 AM to 5:00 PM, and Saturday from 9:00 AM to 12:00 PM." },
  { q: "How do I apply for admission?",               a: "Visit our Admission page to download the application form or contact us directly and we'll guide you through the process." },
  { q: "Do you have a Special Needs unit?",           a: "Yes! Our Integrated Special Unit provides dedicated support for children with diverse learning needs." },
  { q: "How quickly will you respond to my enquiry?", a: "We aim to respond to all enquiries within 1–2 business days. For urgent matters, please call us directly." },
  { q: "Is there a school bus service?",              a: "Yes, we operate school bus routes across several areas in Nairobi. Contact us for the current route schedule." },
  { q: "Can I visit the school before enrolling?",    a: "Absolutely! We welcome school visits. Please book an appointment so we can give you a proper guided tour." },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-300 overflow-hidden
                     ${open ? "border-green-300 shadow-md" : "border-gray-100 shadow-sm"}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white
                   border-none cursor-pointer group">
        <span className={`text-sm font-bold font-sans transition-colors duration-200
                         ${open ? "text-green-800" : "text-gray-800"} group-hover:text-green-700`}>
          {question}
        </span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4
                         text-sm font-black transition-all duration-300
                         ${open ? "bg-green-700 text-white rotate-45" : "bg-gray-100 text-gray-500"}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-green-50 border-t border-green-100"
             style={{ animation: "fadeIn 0.25s ease" }}>
          <p className="text-sm text-gray-600 font-sans leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm]       = useState({ name: "", subject: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Full name is required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.email.trim())   e.email   = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center
                      bg-green-50 rounded-2xl border border-green-100 h-full min-h-[400px]">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 font-sans text-base leading-relaxed max-w-sm mb-6">
          Thank you for reaching out to Kefjoy Academy. We'll get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:"", subject:"", phone:"", email:"", message:"" }); }}
          className="bg-yellow-400 text-green-900 px-6 py-3 rounded font-black text-sm
                     uppercase tracking-wide font-sans border-none cursor-pointer
                     hover:bg-yellow-300 transition-all duration-200">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-black uppercase tracking-wide text-green-800 mb-1.5 font-sans">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="e.g. Jane Wanjiku"
            className={`w-full px-4 py-3 rounded-lg border text-sm font-sans text-gray-700 outline-none
                        transition-all duration-200 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100
                        ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200"}`} />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-wide text-green-800 mb-1.5 font-sans">
            Subject <span className="text-red-500">*</span>
          </label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="e.g. Admission Enquiry"
            className={`w-full px-4 py-3 rounded-lg border text-sm font-sans text-gray-700 outline-none
                        transition-all duration-200 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100
                        ${errors.subject ? "border-red-400 bg-red-50" : "border-gray-200"}`} />
          {errors.subject && <p className="text-red-500 text-xs mt-1 font-sans">{errors.subject}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-black uppercase tracking-wide text-green-800 mb-1.5 font-sans">
            Phone Number
          </label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+254 700 000 000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-sans text-gray-700
                       outline-none transition-all duration-200 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100" />
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-wide text-green-800 mb-1.5 font-sans">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm font-sans text-gray-700 outline-none
                        transition-all duration-200 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100
                        ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wide text-green-800 mb-1.5 font-sans">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={6}
          placeholder="Tell us how we can help you..."
          className={`w-full px-4 py-3 rounded-lg border text-sm font-sans text-gray-700 outline-none
                      transition-all duration-200 bg-white resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100
                      ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"}`} />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-sans">{errors.message}</p>}
      </div>

      <button type="submit"
        className="w-full bg-green-900 text-white py-4 rounded-lg font-black text-sm uppercase
                   tracking-widest font-sans border-none cursor-pointer transition-all duration-200
                   hover:bg-green-800 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(20,60,35,0.3)]">
        Send Message →
      </button>
      <p className="text-xs text-gray-400 font-sans text-center">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-[70px] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-white/60 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-white transition-colors no-underline text-white/60">Home</Link>
            <span className="text-yellow-400">›</span>
            <span className="text-yellow-400 font-semibold">Contact Us</span>
          </div>
          <p className="text-xs font-black tracking-[3px] uppercase text-yellow-400 mb-3 font-sans">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            We'd Love to Hear From You
          </h1>
          <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed max-w-xl">
            Whether you have a question about admissions, our programs, or just want to learn more
            about Kefjoy Academy — our team is here and ready to help.
          </p>
        </div>
        <div className="relative h-12 overflow-hidden">
          <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── FORM + MAP ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">
              Send a Message
            </p>
            <h2 className="text-3xl font-bold text-green-900 mb-2 leading-tight">
              Contact Kefjoy Academy
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mb-8" />
            <ContactForm />
          </div>

          {/* Map + Social */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Find Us</p>
              <h2 className="text-3xl font-bold text-green-900 mb-2 leading-tight">Our Location</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded mb-6" />
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[380px]">
                <iframe
                  title="Kefjoy Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891530474!2d36.6827!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-gray-400 font-sans mt-3 text-center">
                📍 Nairobi, Kenya — update with your exact coordinates
              </p>
            </div>

    
            {/* Social links */}
            <div className="bg-green-900 rounded-2xl p-7 text-white">
              <h3 className="text-lg font-bold mb-1">Follow Kefjoy Academy</h3>
              <p className="text-white/65 text-sm font-sans mb-5">
                Stay updated with school news, events, and highlights.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Facebook",  icon: "f",  color: "bg-white-600",  href: "https://www.facebook.com/KefjoyA/" },
                  { label: "Instagram", icon: "ig", color: "bg-black-600",  href: "https://www.instagram.com/kefjoyacademy/" },
                  { label: "Twitter/X", icon: "𝕏",  color: "bg-grey-800", href: "#" },
                  { label: "YouTube",   icon: "▶",  color: "bg-grey-600",   href: "https://youtube.com/@kefjoyacademy" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                     className={`${s.color} flex items-center gap-3 px-4 py-3 rounded-xl no-underline
                                 transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5`}>
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-black shrink-0 text-white">
                      {s.icon}
                    </span>
                    <span className="text-sm font-semibold font-sans text-white">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-14 h-1 bg-yellow-400 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS.map((faq) => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </section>

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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}