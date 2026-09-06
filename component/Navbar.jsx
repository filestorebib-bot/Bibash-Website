import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Library', path: '/library' },
    { name: 'Watch', path: '/watch' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl'
          : 'border-b border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img
              src="/logohome.png"
              alt="VFAW Logo"
              className="h-full w-full object-contain p-1"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-black tracking-tight text-slate-900">
              VFAW
            </h1>

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
              Animal Welfare
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-indigo-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/25"
          >
            Get Involved
            <span className="text-base">→</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-md transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-5 py-4 text-base font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`text-lg ${
                        isActive ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-indigo-600"
            >
              Get Involved
              <span>→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
