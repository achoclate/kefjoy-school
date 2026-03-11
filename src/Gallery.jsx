import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import { CATEGORIES, PHOTOS, VIDEOS } from "./data";

// Lightbox that is in full screen viewer when you click any photo
// Navigation on the keyboard: Esc to close, left/right arrows to move 

function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
         onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption}
             className="w-full rounded-2xl shadow-2xl max-h-[75vh] object-cover" />
        <div className="mt-4 text-center">
          <p className="text-white font-bold text-lg">{photo.caption}</p>
          <p className="text-white/50 text-sm font-sans mt-1">{photo.date}</p>
        </div>
        {/* Close button */}
        <button onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500
                     text-white flex items-center justify-center text-xl font-bold border-none
                     cursor-pointer transition-all duration-200 hover:scale-110">×</button>
        {/* Previous */}
        <button onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/30 text-white flex items-center justify-center
                     text-xl border-none cursor-pointer transition-all duration-200">‹</button>
        {/* Next */}
        <button onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/30 text-white flex items-center justify-center
                     text-xl border-none cursor-pointer transition-all duration-200">›</button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const [mediaTab, setMediaTab]             = useState("photos");

  // How many photos/videos are that are rendered initially
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const [visibleVideos, setVisibleVideos] = useState(4);

  // Controls the loading animation
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(false);

  // loading animation befow new content is revealed
  const loadMorePhotos = () => {
    setLoadingPhotos(true);
    setTimeout(() => {
      setVisiblePhotos(v => v + 6);
      setLoadingPhotos(false);
    }, 600);
  };

  const loadMoreVideos = () => {
    setLoadingVideos(true);
    setTimeout(() => {
      setVisibleVideos(v => v + 4);
      setLoadingVideos(false);
    }, 600);
  };

  // Filter to only show photos matching the selected category
  const filteredPhotos = activeCategory === "All"
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeCategory);

  // To reset photo count back to 6 whenever the category filter changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisiblePhotos(6);
  };

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
            <Link to="/media/gallery" className="hover:text-yellow-400 transition-colors no-underline text-white/50">Media</Link>
            <span>›</span>
            <span className="text-yellow-400">Gallery</span>
          </div>
          <span className="inline-block bg-yellow-400 text-green-900 text-xs font-black
                           tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-5 font-sans">
            Photos & Videos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Our Gallery
          </h1>
          <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            A look inside the vibrant, busy life of Kefjoy Academy — captured in photos and video.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none">
            <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Photos / Videos toggle + category filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            {/* Photos / Videos toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 gap-1 self-start">
              {["photos", "videos"].map((tab) => (
                <button key={tab}
                  onClick={() => setMediaTab(tab)}
                  className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wide font-sans
                              border-none cursor-pointer transition-all duration-200
                              ${mediaTab === tab
                                ? "bg-green-900 text-white shadow-sm"
                                : "bg-transparent text-gray-500 hover:text-gray-800"}`}>
                  {tab === "photos" ? "📸 Photos" : "🎬 Videos"}
                </button>
              ))}
            </div>

            {/* filter ; only visible on photos tab */}
            {mediaTab === "photos" && (
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wide
                                font-sans border-none cursor-pointer transition-all duration-200
                                ${activeCategory === cat
                                  ? "bg-green-900 text-white"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Photo grid — starts with 6, more load onclicking " Show More" */}
          {mediaTab === "photos" && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPhotos.slice(0, visiblePhotos).map((photo, i) => (
                  <div key={photo.id}
                       onClick={() => setLightboxIndex(i)}
                       className="group relative rounded-2xl overflow-hidden cursor-pointer
                                  aspect-square shadow-sm hover:shadow-xl transition-all duration-300
                                  hover:-translate-y-1">
                    <img src={photo.src} alt={photo.caption}
                         className="w-full h-full object-cover transition-transform duration-500
                                    group-hover:scale-110" />
                    {/* Caption that slides up when you hover over a photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2
                                    group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-bold font-sans leading-snug
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photo.caption}
                      </p>
                      <p className="text-white/60 text-xs font-sans
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photo.date}
                      </p>
                    </div>
                    {/* Little expand icon in the corner */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm
                                    flex items-center justify-center opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300">
                      <span className="text-white text-sm">⤢</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* button that only appears when there are more photos waiting */}
              {visiblePhotos < filteredPhotos.length && (
                <div className="mt-10 flex flex-col items-center gap-4">
                  <button
                    onClick={loadMorePhotos}
                    disabled={loadingPhotos}
                    className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black uppercase
                               tracking-wide font-sans border-2 border-green-900 text-green-900
                               bg-transparent cursor-pointer transition-all duration-200
                               hover:bg-green-900 hover:text-white hover:-translate-y-0.5
                               disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] justify-center">
                    {loadingPhotos ? (
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
            </>
          )}

          {/* Video grid to only render 4 videos at the start then more load onclick "show More" */}
          {mediaTab === "videos" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {VIDEOS.slice(0, visibleVideos).map((video) => (
                  <div key={video.id} className="rounded-2xl overflow-hidden shadow-sm
                                                 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-video bg-gray-900">
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
                ))}
              </div>

              {/* A button that only appears when there are more videos waiting */}
              {visibleVideos < VIDEOS.length && (
                <div className="mt-10 flex flex-col items-center gap-4">
                  <button
                    onClick={loadMoreVideos}
                    disabled={loadingVideos}
                    className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black uppercase
                               tracking-wide font-sans border-2 border-green-900 text-green-900
                               bg-transparent cursor-pointer transition-all duration-200
                               hover:bg-green-900 hover:text-white hover:-translate-y-0.5
                               disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] justify-center">
                    {loadingVideos ? (
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
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📸</div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Want to Be Part of the Story?</h2>
          <p className="text-green-900/75 font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Join the Kefjoy Academy community and create memories that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission"
               className="bg-green-900 text-white px-8 py-4 rounded font-black text-sm uppercase
                          tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-green-800 hover:-translate-y-0.5 shadow-lg">
              Apply for Admission
            </Link>
            <Link to="/media/events"
               className="bg-white text-green-900 px-8 py-4 rounded font-black text-sm uppercase
                          tracking-wide font-sans no-underline transition-all duration-200
                          hover:bg-green-50 hover:-translate-y-0.5 shadow-lg">
              View Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox that renders on top of everything when a photo is clicked */}
      {lightboxIndex !== null && (
        <Lightbox
          photo={filteredPhotos[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
        />
      )}

    </div>
  );
}