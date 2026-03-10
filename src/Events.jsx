import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

const EVENTS = [

  //  UPCOMING 
  {
    id: 1,
    title: "Open Day 2024",
    date: "Sat, 15 June 2024",
    time: "9:00 AM – 1:00 PM",
    location: "Main Campus",
    category: "Community",
    status: "upcoming",
    badge: "bg-emerald-100 text-emerald-800",
    cta: { label: "RSVP", href: "/admission" },
  },
  {
    id: 2,
    title: "End of Term 1 Examinations",
    date: "Mon 20 – Fri 24 May 2024",
    time: "8:00 AM daily",
    location: "All Classrooms",
    category: "Academic",
    status: "upcoming",
    badge: "bg-blue-100 text-blue-800",
    cta: null,
  },
  {
    id: 3,
    title: "Inter-School Athletics Meet",
    date: "Sat, 8 June 2024",
    time: "7:30 AM – 4:00 PM",
    location: "County Stadium",
    category: "Sports",
    status: "upcoming",
    badge: "bg-orange-100 text-orange-800",
    cta: { label: "Details", href: "/student-life#sports" },
  },
  {
    id: 4,
    title: "Parents' Evening — Term 1",
    date: "Thu, 16 May 2024",
    time: "4:00 PM – 7:00 PM",
    location: "School Hall",
    category: "Community",
    status: "upcoming",
    badge: "bg-violet-100 text-violet-800",
    cta: { label: "Book Slot", href: "/contact" },
  },

  // ONGOING 
  {
    id: 5,
    title: "Term 1 — 2024 Academic Year",
    date: "6 Jan – 5 Apr 2024",
    time: "7:30 AM – 4:00 PM",
    location: "All Campus",
    category: "Academic",
    status: "ongoing",
    badge: "bg-yellow-100 text-yellow-800",
    cta: null,
  },
  {
    id: 6,
    title: "Junior Secondary Football League",
    date: "January – April 2024",
    time: "Saturdays, 8:00 AM",
    location: "School Sports Field",
    category: "Sports",
    status: "ongoing",
    badge: "bg-green-100 text-green-800",
    cta: { label: "Fixtures", href: "/student-life#sports" },
  },

  // To move events down once they're done
  {
    id: 7,
    title: "Annual Arts Gala 2023",
    date: "Fri, 10 November 2023",
    time: "6:00 PM – 9:00 PM",
    location: "School Auditorium",
    category: "Arts",
    status: "past",
    badge: "bg-rose-100 text-rose-800",
    cta: { label: "View Photos", href: "/media/gallery" },
  },
  {
    id: 8,
    title: "Junior Secondary Graduation 2023",
    date: "Sat, 18 November 2023",
    time: "10:00 AM – 1:00 PM",
    location: "School Grounds",
    category: "Community",
    status: "past",
    badge: "bg-slate-100 text-slate-800",
    cta: { label: "View Photos", href: "/media/gallery" },
  },
  {
    id: 9,
    title: "Science & Technology Fair 2023",
    date: "Fri, 28 April 2023",
    time: "9:00 AM – 3:00 PM",
    location: "School Hall",
    category: "Academic",
    status: "past",
    badge: "bg-cyan-100 text-cyan-800",
    cta: { label: "View Photos", href: "/media/gallery" },
  },
];

// Status badge styling
const STATUS_STYLE = {
  upcoming: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  ongoing:  "bg-yellow-50 text-yellow-700 border border-yellow-200",
  past:     "bg-gray-100 text-gray-500 border border-gray-200",
};

const STATUS_LABEL = {
  upcoming: "● Upcoming",
  ongoing:  "● Ongoing",
  past:     "Completed",
};

// A single slim event row 
function EventCard({ event }) {
  return (
    <div className={`bg-white border-l-4 border-l-green-700 border border-gray-100 rounded-xl
                     px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
                     flex flex-col sm:flex-row sm:items-center gap-4
                     ${event.status === "past" ? "opacity-60 hover:opacity-90" : ""}`}>

      {/* Date block */}
      <div className="sm:w-36 flex-shrink-0">
        <p className="text-xs font-black text-green-800 font-sans leading-snug">{event.date}</p>
        <p className="text-xs text-gray-400 font-sans mt-0.5">{event.time}</p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-10 bg-gray-200 flex-shrink-0" />

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-sm font-bold text-green-900 leading-snug">{event.title}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`${event.badge} text-xs font-semibold px-2 py-0.5 rounded-full font-sans`}>
            {event.category}
          </span>
          <span className="text-gray-300 text-xs">·</span>
          <span className="text-xs text-gray-400 font-sans">📍 {event.location}</span>
        </div>
      </div>

      {/* shows status of the event */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className={`${STATUS_STYLE[event.status]} text-xs font-semibold px-2.5 py-1 rounded-full font-sans`}>
          {STATUS_LABEL[event.status]}
        </span>
        {event.cta && (
          <Link to={event.cta.href}
             className="bg-green-900 text-white px-4 py-2 rounded-lg text-xs font-black
                        uppercase tracking-wide font-sans no-underline transition-all duration-200
                        hover:bg-green-700 whitespace-nowrap">
            {event.cta.label} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const [activeStatus, setActiveStatus] = useState("all");

  // How many events to show at once 
  const [visibleEvents, setVisibleEvents] = useState(4);

  // Controls the pulsing animation on the Show More button
  const [loadingEvents, setLoadingEvents] = useState(false);

  // loading animation just before the next batch of events reveal
  const loadMoreEvents = () => {
    setLoadingEvents(true);
    setTimeout(() => {
      setVisibleEvents(v => v + 4);
      setLoadingEvents(false);
    }, 600);
  };

  const statusTabs = ["all", "upcoming", "ongoing", "past"];

  // Filter events by the selected tab, then slice to however many we're showing
  const filtered = activeStatus === "all"
    ? EVENTS
    : EVENTS.filter(e => e.status === activeStatus);

  // Reset back to 4 and clear any loading state when switching tabs
  const handleTabChange = (tab) => {
    setActiveStatus(tab);
    setVisibleEvents(4);
    setLoadingEvents(false);
  };

  // Count per tab for the little number badges
  const countFor = (s) => s === "all" ? EVENTS.length : EVENTS.filter(e => e.status === s).length;

  return (
    <div className="font-serif text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-950 overflow-hidden">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-sans text-white/50 mb-5 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Home</Link>
            <span>›</span>
            <Link to="/media" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Media</Link>
            <span>›</span>
            <span className="text-yellow-400">Events</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            School Calendar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Events
          </h1>
          <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            Stay up to date with everything happening at Kefjoy Academy — from sports days to parent evenings and community events.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Events list */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Filter tab ; tap on each to narrow down the list */}
          <div className="flex flex-wrap gap-2 mb-10">
            {statusTabs.map((tab) => (
              <button key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black
                            uppercase tracking-wide font-sans border-none cursor-pointer
                            transition-all duration-200
                            ${activeStatus === tab
                              ? "bg-green-900 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {tab === "all" ? "All Events" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black
                                  ${activeStatus === tab ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}>
                  {countFor(tab)}
                </span>
              </button>
            ))}
          </div>

          {/* Events to only show 4 at a time, tap show More to load more events */}
          <div className="flex flex-col gap-3">
            {filtered.slice(0, visibleEvents).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* A button that only appears when there are more events */}
          {visibleEvents < filtered.length && (
            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                onClick={loadMoreEvents}
                disabled={loadingEvents}
                className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black uppercase
                           tracking-wide font-sans border-2 border-green-900 text-green-900
                           bg-transparent cursor-pointer transition-all duration-200
                           hover:bg-green-900 hover:text-white hover:-translate-y-0.5
                           disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] justify-center">
                {loadingEvents ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-900 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-green-900 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-green-900 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                ) : (
                  "Show More ↓"
                )}
              </button>
            </div>
          )}

          {/* Empty state in the case where a filter has no matching events */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-gray-400 font-sans text-sm">No events in this category right now.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📅</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Never Miss an Event</h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Stay connected with the Kefjoy Academy community. Check back here regularly or contact us to be added to our mailing list.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
               className="bg-green-900 text-white px-8 py-4 rounded font-black text-sm uppercase
                          tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-green-800 hover:-translate-y-0.5 shadow-lg">
              Contact Us
            </Link>
            <Link to="/media/gallery"
               className="bg-white text-green-900 px-8 py-4 rounded font-black text-sm uppercase
                          tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-green-50 hover:-translate-y-0.5 shadow-lg">
              View Gallery
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

      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}