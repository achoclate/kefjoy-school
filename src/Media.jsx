import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

//  DATA

const GALLERY_CATEGORIES = ["All", "Events", "Sports", "Academics", "Arts", "Campus"];

const PHOTOS = [
  //  Replace src values with school images 
  { id: 1,  src: "https://placehold.co/800x600/1a4731/ffffff?text=Annual+Sports+Day",        category: "Sports",    caption: "Annual Sports Day 2024",             date: "March 2024" },
  { id: 2,  src: "https://placehold.co/800x600/14532d/ffffff?text=Science+Fair",             category: "Academics", caption: "Science & Technology Fair",           date: "April 2024" },
  { id: 3,  src: "https://placehold.co/800x600/365314/ffffff?text=Arts+Gala",                category: "Arts",      caption: "Annual Arts Gala Performance",        date: "November 2023" },
  { id: 4,  src: "https://placehold.co/800x600/1a4731/ffffff?text=Graduation+Ceremony",     category: "Events",    caption: "Junior Secondary Graduation 2023",    date: "November 2023" },
  { id: 5,  src: "https://placehold.co/800x600/14532d/ffffff?text=Football+Finals",         category: "Sports",    caption: "Inter-School Football Finals",        date: "October 2023" },
  { id: 6,  src: "https://placehold.co/800x600/365314/ffffff?text=Campus+Library",          category: "Campus",    caption: "Our Newly Renovated Library",         date: "January 2024" },
  { id: 7,  src: "https://placehold.co/800x600/1a4731/ffffff?text=Debate+Competition",      category: "Academics", caption: "Regional Debate Competition",         date: "February 2024" },
  { id: 8,  src: "https://placehold.co/800x600/14532d/ffffff?text=Tree+Planting+Day",       category: "Events",    caption: "Environmental Club Tree Planting",   date: "June 2023" },
  { id: 9,  src: "https://placehold.co/800x600/365314/ffffff?text=Swimming+Gala",           category: "Sports",    caption: "Annual Swimming Gala",               date: "August 2023" },
  { id: 10, src: "https://placehold.co/800x600/1a4731/ffffff?text=Drama+Festival",          category: "Arts",      caption: "Inter-School Drama Festival",        date: "September 2023" },
  { id: 11, src: "https://placehold.co/800x600/14532d/ffffff?text=New+Classrooms",          category: "Campus",    caption: "New Junior Secondary Block Opening",  date: "January 2024" },
  { id: 12, src: "https://placehold.co/800x600/365314/ffffff?text=Prize+Giving+Day",        category: "Events",    caption: "End of Year Prize Giving Ceremony",  date: "November 2023" },
];

const VIDEOS = [
  //  Replace VIDEO_ID with the schools video IDs
  { id: 1, videoId: "80P6grb8p2g", title: "Kefjoy Academy — School Tour 2024",          desc: "Take a full tour of our campus, classrooms, sports fields and facilities.",          date: "January 2024",    category: "Campus" },
  { id: 2, videoId: "80P6grb8p2g", title: "Annual Sports Day Highlights 2024",           desc: "Relive the best moments from our action-packed Annual Sports Day.",                  date: "March 2024",      category: "Sports" },
  { id: 3, videoId: "80P6grb8p2g", title: "Arts Gala 2023 — Full Performance",           desc: "Watch the full recording of our spectacular Arts Gala evening performance.",         date: "November 2023",   category: "Arts" },
  { id: 4, videoId: "80P6grb8p2g", title: "Science & Technology Fair Showcase",          desc: "Students present their innovative projects at our annual Science Fair.",             date: "April 2024",      category: "Academics" },
];

// EVENTS DATA ; Status: "upcoming" | "ongoing" | "past"
const EVENTS = [
  // UPCOMING 
  {
    id: 1,
    title: "Open Day 2024",
    date: "Saturday, 15 June 2024",
    time: "9:00 AM – 1:00 PM",
    location: "Main Campus, Kefjoy Academy",
    category: "Community",
    status: "upcoming",
    color: "from-emerald-500 to-green-700",
    badge: "bg-emerald-100 text-emerald-800",
    desc: "Join us for our annual Open Day. Tour the school, meet our teachers, and learn about admission for the 2025 academic year. All families welcome.",
    cta: { label: "RSVP Now", href: "/admission" },
  },
  {
    id: 2,
    title: "End of Term 1 Examinations",
    date: "Monday, 20 – Friday, 24 May 2024",
    time: "8:00 AM daily",
    location: "All Classrooms",
    category: "Academic",
    status: "upcoming",
    color: "from-blue-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-800",
    desc: "End of Term 1 examinations for all grades, Pre-School through Junior Secondary. Timetables have been shared with all parents via the school portal.",
    cta: null,
  },
  {
    id: 3,
    title: "Inter-School Athletics Meet",
    date: "Saturday, 8 June 2024",
    time: "7:30 AM – 4:00 PM",
    location: "County Stadium",
    category: "Sports",
    status: "upcoming",
    color: "from-orange-400 to-amber-600",
    badge: "bg-orange-100 text-orange-800",
    desc: "Our athletics team competes at the annual inter-school meet. Come out and cheer for our students in track, field, and cross country events.",
    cta: { label: "Learn More", href: "/student-life#sports" },
  },
  {
    id: 4,
    title: "Parents' Evening — Term 1",
    date: "Thursday, 16 May 2024",
    time: "4:00 PM – 7:00 PM",
    location: "School Hall",
    category: "Community",
    status: "upcoming",
    color: "from-violet-500 to-purple-700",
    badge: "bg-violet-100 text-violet-800",
    desc: "Meet your child's teachers for one-on-one progress discussions. Appointment slots are available via the school portal. Walk-ins welcome after 6:00 PM.",
    cta: { label: "Book Slot", href: "/contact" },
  },

  // ONGOING 
  {
    id: 5,
    title: "Term 1 — 2024 Academic Year",
    date: "Monday, 6 January – Friday, 5 April 2024",
    time: "7:30 AM – 4:00 PM",
    location: "All Campus",
    category: "Academic",
    status: "ongoing",
    color: "from-yellow-400 to-amber-500",
    badge: "bg-yellow-100 text-yellow-800",
    desc: "Term 1 of the 2024 academic year is currently in session. All classes are running as scheduled. Refer to the school calendar for key dates.",
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
    color: "from-green-500 to-emerald-700",
    badge: "bg-green-100 text-green-800",
    desc: "Our Junior Secondary football teams are competing in the regional school league. Home matches are held every Saturday — all are welcome to attend.",
    cta: { label: "View Fixtures", href: "/student-life#sports" },
  },

  // PAST
  {
    id: 7,
    title: "Annual Arts Gala 2023",
    date: "Friday, 10 November 2023",
    time: "6:00 PM – 9:00 PM",
    location: "School Auditorium",
    category: "Arts",
    status: "past",
    color: "from-rose-500 to-pink-600",
    badge: "bg-rose-100 text-rose-800",
    desc: "A spectacular evening of drama, music, and visual arts showcasing the incredible talent of our students. Over 300 guests attended.",
    cta: { label: "Watch Highlights", href: "/media#gallery" },
  },
  {
    id: 8,
    title: "Junior Secondary Graduation 2023",
    date: "Saturday, 18 November 2023",
    time: "10:00 AM – 1:00 PM",
    location: "School Grounds",
    category: "Community",
    status: "past",
    color: "from-slate-500 to-gray-700",
    badge: "bg-slate-100 text-slate-800",
    desc: "We celebrated the graduating class of 2023. A proud day for students, families, and staff as our learners completed their Junior Secondary journey.",
    cta: { label: "View Photos", href: "/media#gallery" },
  },
  {
    id: 9,
    title: "Science & Technology Fair 2023",
    date: "Friday, 28 April 2023",
    time: "9:00 AM – 3:00 PM",
    location: "School Hall",
    category: "Academic",
    status: "past",
    color: "from-cyan-500 to-teal-600",
    badge: "bg-cyan-100 text-cyan-800",
    desc: "Students from Grade 4 upwards showcased remarkable STEM projects. Three students qualified for the national schools science competition.",
    cta: { label: "View Photos", href: "/media#gallery" },
  },
];

const SECTIONS = [
  { id: "gallery", label: "Gallery",  icon: "📸" },
  { id: "events",  label: "Events",   icon: "📅" },
];

const STATUS_TABS = ["all", "upcoming", "ongoing", "past"];

// LIGHTBOX 
function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
         onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption}
             className="w-full rounded-2xl shadow-2xl max-h-[75vh] object-cover" />
        <div className="mt-4 text-center">
          <p className="text-white font-bold text-lg">{photo.caption}</p>
          <p className="text-white/50 text-sm font-sans mt-1">{photo.date}</p>
        </div>
        {/* Controls */}
        <button onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500
                     text-white flex items-center justify-center text-xl font-bold border-none
                     cursor-pointer transition-all duration-200 hover:scale-110">×</button>
        <button onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/30 text-white flex items-center justify-center
                     text-xl border-none cursor-pointer transition-all duration-200">‹</button>
        <button onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/30 text-white flex items-center justify-center
                     text-xl border-none cursor-pointer transition-all duration-200">›</button>
      </div>
    </div>
  );
}

// EVENT CARD
function EventCard({ event }) {
  const statusStyles = {
    upcoming: "bg-emerald-100 text-emerald-800",
    ongoing:  "bg-yellow-100 text-yellow-800",
    past:     "bg-gray-100 text-gray-500",
  };
  const statusLabel = {
    upcoming: "● Upcoming",
    ongoing:  "● Ongoing",
    past:     "Completed",
  };

  return (
    <div className={`bg-white border border-l-4 border-l-green-700 border-gray-100 rounded-2xl
                     overflow-hidden shadow-sm transition-all duration-300
                     hover:shadow-lg hover:-translate-y-1
                     ${event.status === "past" ? "opacity-75 hover:opacity-100" : ""}`}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            <span className={`${event.badge} text-xs font-semibold px-2.5 py-1 rounded-full font-sans`}>
              {event.category}
            </span>
            <span className={`${statusStyles[event.status]} text-xs font-semibold px-2.5 py-1 rounded-full font-sans`}>
              {statusLabel[event.status]}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-green-900 mb-3 leading-snug">{event.title}</h3>
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5">{event.desc}</p>

        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2.5 text-xs text-gray-500 font-sans">
            <span className="text-green-600">📅</span>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-500 font-sans">
            <span className="text-green-600">🕐</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-500 font-sans">
            <span className="text-green-600">📍</span>
            <span>{event.location}</span>
          </div>
        </div>

        {event.cta && (
          <Link to={event.cta.href}
             className="inline-block bg-green-900 text-white px-5 py-2.5 rounded-lg
                        text-xs font-black uppercase tracking-wide font-sans no-underline
                        transition-all duration-200 hover:bg-green-700">
            {event.cta.label} →
          </Link>
        )}
      </div>
    </div>
  );
}

// MAIN COMPONENT
export default function Media() {
  const [activeSection, setActiveSection]     = useState("gallery");
  const [activeCategory, setActiveCategory]   = useState("All");
  const [activeStatus, setActiveStatus]       = useState("all");
  const [lightboxIndex, setLightboxIndex]     = useState(null);
  const [mediaTab, setMediaTab]               = useState("photos");
  const location = useLocation();

  // Auto-scroll from navbar
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "gallery" || hash === "events") {
      setActiveSection(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const filteredPhotos = activeCategory === "All"
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeCategory);

  const filteredEvents = activeStatus === "all"
    ? EVENTS
    : EVENTS.filter(e => e.status === activeStatus);

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

      {/* HERO */}
      <section className="relative pt-32 pb-0 px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-950
                          overflow-hidden min-h-[400px] flex items-end">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pb-0">
          <div className="flex items-center gap-2 text-xs font-sans text-white/50 mb-5 uppercase tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Home</Link>
            <span>›</span>
            <span className="text-yellow-400">Media</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            School Life in Focus
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Media & Events
          </h1>
          <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            A window into the vibrant life of Kefjoy Academy — browse our photo gallery, watch school videos, and stay up to date with all upcoming events.
          </p>

          {/* tab nav */}
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

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">Photos & Videos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Our Gallery</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded" />
            </div>
            {/* Photos,Videos toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 gap-1 self-start md:self-auto">
              {["photos", "videos"].map((tab) => (
                <button key={tab}
                  onClick={() => setMediaTab(tab)}
                  className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wide font-sans
                              border-none cursor-pointer transition-all duration-200
                              ${mediaTab === tab ? "bg-green-900 text-white shadow-sm" : "bg-transparent text-gray-500 hover:text-gray-800"}`}>
                  {tab === "photos" ? "📸 Photos" : "🎬 Videos"}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter for photos only */}
          {mediaTab === "photos" && (
            <div className="flex flex-wrap gap-2 mb-10">
              {GALLERY_CATEGORIES.map((cat) => (
                <button key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide font-sans
                              border-none cursor-pointer transition-all duration-200
                              ${activeCategory === cat
                                ? "bg-green-900 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Photos grid */}
          {mediaTab === "photos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo, i) => (
                <div key={photo.id}
                     onClick={() => setLightboxIndex(i)}
                     className="group relative rounded-2xl overflow-hidden cursor-pointer
                                aspect-square shadow-sm hover:shadow-xl transition-all duration-300
                                hover:-translate-y-1">
                  <img src={photo.src} alt={photo.caption}
                       className="w-full h-full object-cover transition-transform duration-500
                                  group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2
                                  group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold font-sans leading-snug opacity-0
                                  group-hover:opacity-100 transition-opacity duration-300">{photo.caption}</p>
                    <p className="text-white/60 text-xs font-sans opacity-0
                                  group-hover:opacity-100 transition-opacity duration-300">{photo.date}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300">
                    <span className="text-white text-sm">⤢</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos grid */}
          {mediaTab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {VIDEOS.map((video) => (
                <div key={video.id} className="group">
                  <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                                  transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-video bg-gray-900">
                      {/* To replace VIDEO_ID in src with real YouTube ID */}
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5 bg-white border border-gray-100 border-t-0 rounded-b-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full font-sans">
                          {video.category}
                        </span>
                        <span className="text-xs text-gray-400 font-sans">{video.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-green-900 mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-500 font-sans leading-relaxed">{video.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-black tracking-[3px] uppercase text-green-600 mb-2 font-sans">School Calendar</p>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Events</h2>
              <div className="w-14 h-1 bg-yellow-400 rounded" />
            </div>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
              Stay up to date with everything happening at Kefjoy Academy — from sports days to parent evenings and community events.
            </p>
          </div>

          {/* Status filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {STATUS_TABS.map((tab) => (
              <button key={tab}
                onClick={() => setActiveStatus(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wide font-sans
                            border-none cursor-pointer transition-all duration-200
                            ${activeStatus === tab
                              ? "bg-green-900 text-white"
                              : "bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-800"}`}>
                {tab === "all" ? "All Events" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">
                  {tab === "all" ? EVENTS.length : EVENTS.filter(e => e.status === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-gray-400 font-sans">No events in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA  */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📸</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight">
            Want to Be Part of the Story?
          </h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Join the Kefjoy Academy community and create memories that last a lifetime.
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photo={filteredPhotos[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
        />
      )}

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