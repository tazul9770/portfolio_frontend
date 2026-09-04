import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06121f]/80 text-white shadow-xl shadow-black/10 backdrop-blur-xl">

      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= Logo ================= */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group relative flex items-center"
        >
          <div className="absolute -inset-3 rounded-xl bg-cyan-400/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

          <span className="relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Tazul{" "}
            <span className="text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
              Islam
            </span>
          </span>
        </Link>

        {/* ================= Desktop Navigation ================= */}

        <div className="hidden items-center gap-2 md:flex">

          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 lg:px-5 lg:text-base ${
                  active
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}

                {/* Active / Hover Line */}
                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                    active
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }`}
                />
              </Link>
            );
          })}

          {/* Home Button */}

          <Link
            to="/"
            className="ml-3 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/10 lg:px-5 lg:text-base"
          >
            Home
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ================= Mobile Button ================= */}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`overflow-hidden border-t border-white/5 bg-[#081725]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

          <div className="space-y-2">

            {/* Home */}

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                location.pathname === "/"
                  ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  : "border border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>Home</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Other Links */}

            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                      : "border border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Bottom Accent */}

          <div className="mt-5 flex items-center gap-3 px-4 pb-2">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
              Developer Portfolio
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
