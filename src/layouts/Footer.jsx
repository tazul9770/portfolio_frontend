import {
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      link: "https://www.facebook.com/tazul.islam.229952/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      link: "https://www.linkedin.com/in/mdtazulislam01/",
    },
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      link: "https://github.com/tazul9770",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06121f] text-gray-300">

      {/* ================= Background Glow ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Top Glow */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* ================= Main Footer ================= */}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* ================= About ================= */}

          <div className="lg:pr-8">

            <Link
              to="/"
              className="group inline-block"
            >
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Tazul{" "}
                <span className="text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
                  Islam
                </span>
              </h3>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-[15px]">
              Full Stack Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>

            {/* Contact Info */}

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/5">
                  <Mail className="h-4 w-4 text-cyan-300" />
                </div>

                <span>Available for opportunities</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/5">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                </div>

                <span>Bangladesh</span>
              </div>

            </div>
          </div>

          {/* ================= Quick Links ================= */}

          <div>

            <div className="mb-5 flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-cyan-400" />

              <h4 className="text-lg font-semibold text-white">
                Quick Links
              </h4>
            </div>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span>Home</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span>Projects</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= Social ================= */}

          <div>

            <div className="mb-5 flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-cyan-400" />

              <h4 className="text-lg font-semibold text-white">
                Connect With Me
              </h4>
            </div>

            <p className="mb-5 max-w-sm text-sm leading-6 text-gray-400">
              Follow me on social platforms and stay connected with my latest
              work and projects.
            </p>

            <div className="flex flex-wrap gap-3">

              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
                >
                  {item.icon}
                </a>
              ))}

            </div>

            {/* Availability Badge */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </div>
          </div>
        </div>

        {/* ================= Divider ================= */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-12" />

        {/* ================= Bottom ================= */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-5 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Tazul Islam. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Built with
            <Heart className="h-3.5 w-3.5 fill-current text-cyan-400" />
            using React
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
