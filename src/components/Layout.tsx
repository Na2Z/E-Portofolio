import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Profil", path: "/" },
    { name: "Artefak", path: "/analisis" },
    { name: "Analisis dan Penilaian", path: "/instrumen-penilaian" },
    { name: "Dokumentasi", path: "/dokumentasi" },
    { name: "Role Model", path: "/role-model" },
  ];

  return (
    <>
      {/* Custom Header Shape Background */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-[#4361EE]/90 to-[#4CC9F0]/90 backdrop-blur-sm -z-10 shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
        style={{
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-white py-3 shadow-md" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg ${scrolled ? "bg-[#4361EE] text-white" : "bg-white text-[#4361EE]"}`}
            >
              S
            </div>
            <span
              className={`font-bold text-lg tracking-tight italic ${scrolled ? "text-[#4361EE]" : "text-white"}`}
            >
              Ferdiansyah.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors ${location.pathname === item.path ? (scrolled ? "text-[#4361EE] font-bold border-b-2 border-[#4361EE] pb-1" : "text-white font-bold border-b-2 border-white pb-1") : scrolled ? "text-slate-500 hover:text-[#4361EE]" : "text-white/80 hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className={`md:hidden ${scrolled ? "text-slate-800" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-2xl font-bold ${location.pathname === item.path ? "text-[#4361EE]" : "text-slate-800"}`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen">
        {children}
      </main>

      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-500">
              SF
            </div>
            <p className="text-sm font-semibold text-slate-500">
              © 2026 Shahnaz Ferdiansyah — PPG Prajabatan UKSW
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-2 border border-slate-100 rounded-full text-slate-400 hover:text-[#4361EE] hover:border-[#4361EE]/20 transition-all cursor-pointer">
              <Star size={16} />
            </div>
            <div className="p-2 border border-slate-100 rounded-full text-slate-400 hover:text-[#4361EE] hover:border-[#4361EE]/20 transition-all cursor-pointer">
              <Star size={16} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
