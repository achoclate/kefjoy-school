// Reusable scroll-to-top button

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-700 text-white
                 border-none cursor-pointer text-xl shadow-lg transition-all duration-200
                 hover:bg-green-900 hover:-translate-y-1 flex items-center justify-center">
      ↑
    </button>
  );
}