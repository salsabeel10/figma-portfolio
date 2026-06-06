import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#project" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
            <img
              src="./images/salsabeel-2.webp"
              alt="Salsabeel Ibrahim"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1c1c1c]">
            Salsabeel Ibrahim
          </h3>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-[12px] font-bold uppercase tracking-wider">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative group transition-colors duration-300 ${
                  index === 0
                    ? "text-[#1c1c1c]"
                    : "text-slate-500 hover:text-[#1c1c1c]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#1c1c1c] origin-left transition-transform duration-300 ${
                    index === 0
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-[#1c1c1c] px-5 py-2.5 text-[12px] font-black uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-neutral-800 hover:scale-105 active:scale-95"
        >
          Contact
          <FiArrowUpRight className="text-sm" />
        </a>

        <button
          type="button"
          className="md:hidden text-2xl text-[#1c1c1c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1c1c1c]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#1c1c1c] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white"
            >
              Contact
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
