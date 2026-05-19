"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { KeyboardArrowDown } from "relume-icons";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => { !isMobile && setIsDropdownOpen(true); };
  const closeOnDesktopDropdownMenu = () => { !isMobile && setIsDropdownOpen(false); };
  const openOnDesktopProjectsDropdown = () => { !isMobile && setIsProjectsDropdownOpen(true); };
  const closeOnDesktopProjectsDropdown = () => { !isMobile && setIsProjectsDropdownOpen(false); };
  const toggleProjectsDropdown = () => setIsProjectsDropdownOpen((prev) => !prev);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  const animateProjectsDropdownMenu = isProjectsDropdownOpen ? "open" : "close";
  const animateProjectsDropdownIcon = isProjectsDropdownOpen ? "rotated" : "initial";
  return { toggleMobileMenu, openOnDesktopDropdownMenu, closeOnDesktopDropdownMenu, openOnMobileDropdownMenu, animateMobileMenu, animateMobileMenuButtonSpan, animateDropdownMenu, animateDropdownMenuIcon, openOnDesktopProjectsDropdown, closeOnDesktopProjectsDropdown, toggleProjectsDropdown, animateProjectsDropdownMenu, animateProjectsDropdownIcon };
};

const NavIcon = ({ src, alt }) => (
  <div className="flex size-9 shrink-0 items-center justify-center rounded-button bg-punch/8 border border-punch/15">
    <img className="size-5 brightness-0 opacity-45" src={src} alt={alt} />
  </div>
);

/* Nav link pill — frosted glass base, blue-tinted shadow matches CTA buttons */
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="nav-underline flex items-center rounded-button border border-white/18 bg-white/7 px-3.5 py-1.5 text-sm font-medium text-white/90 shadow-[0_1px_8px_rgba(0,131,179,0.12)] transition-all duration-200 hover:border-white/32 hover:bg-white/13 hover:text-white hover:shadow-[0_1px_14px_rgba(0,131,179,0.24)]"
  >
    {children}
  </a>
);

const scaffoldingItems = [
  { href: "/capabilities/commercial-scaffolding", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/construction.svg", title: "Commercial", desc: "Industrial & office towers" },
  { href: "/capabilities/residential-scaffolding", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/home.svg", title: "Residential", desc: "Home builds & renovations" },
  { href: "/capabilities/labour-hire", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/enterprise.svg", title: "Labour Hire", desc: "Skilled crew on demand" },
  { href: "/capabilities/commercial-scaffolding", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/engineering.svg", title: "Civil Engineering", desc: "Infrastructure & civil works" },
  { href: "/projects/scaffolding-birdcage", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/view_compact.svg", title: "Birdcage Systems", desc: "Complex access structures" },
];

const resourceItems = [
  { href: "/safety-and-compliance", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/safety_check.svg", title: "Safety & Compliance", desc: "Our standards & certs" },
  { href: "/news", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/news.svg", title: "News", desc: "Industry news from OSG" },
  { href: "/hear-from-our-clients", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/feedback.svg", title: "Client Stories", desc: "Real project feedback" },
  { href: "/about-us", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/groups.svg", title: "About OSG", desc: "Our story and team" },
  { href: "/forms-library", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/description.svg", title: "Forms Library", desc: "Staff access only" },
];

const projectItems = [
  { href: "/projects/mercedes-benz-showroom", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/directions_car.svg", title: "Mercedes-Benz Showroom", desc: "Commercial fit-out · Brisbane" },
  { href: "/projects/nicholson-street-specialist-centre", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/local_hospital.svg", title: "Nicholson Street Centre", desc: "Medical facility · Brisbane" },
  { href: "/projects/okeefe-street-wooloongabba", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/apartment.svg", title: "O'Keefe Street Wooloongabba", desc: "Commercial development" },
  { href: "/projects/scaffolding-birdcage", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/view_compact.svg", title: "Scaffolding Birdcage", desc: "Complex access structure" },
  { href: "/projects/willow-apartments", icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/home_work.svg", title: "Willow Apartments", desc: "Residential multi-level" },
];

export function Navbar8() {
  const useActive = useRelume();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 inset-x-0 z-[999] flex h-[84px] w-full items-center pl-[2%] pr-[5%] btn-light alternate logo-alt border-b transition-all duration-300 ease-in-out ${scrolled ? "border-white/10" : "border-transparent"}`}
      style={{ backgroundColor: scrolled ? "#010017" : "transparent" }}
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="shrink-0 flex items-center gap-3 -ml-2">
          <img src="/logo/osg-logo.png" alt="O'Neill Scaffolding Group" className="h-14 w-auto" />
          <div className="flex flex-col justify-center leading-none select-none">
            <span className="block text-[32px] font-bold text-white tracking-wide leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>O&apos;NEILL</span>
            <span className="block text-[9px] font-semibold text-white/70 tracking-[0.13em] leading-none mt-[4px]" style={{ fontFamily: "'Poppins', sans-serif" }}>SCAFFOLDING GROUP</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1.5 lg:ml-auto">

          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/capabilities">Capabilities</NavLink>

          {/* Projects dropdown */}
          <div
            className="relative"
            onMouseEnter={useActive.openOnDesktopProjectsDropdown}
            onMouseLeave={useActive.closeOnDesktopProjectsDropdown}
          >
            <a
              href="/projects"
              className="nav-underline flex items-center gap-1 rounded-button border border-white/18 bg-white/7 px-3.5 py-1.5 text-sm font-medium text-white/90 shadow-[0_1px_8px_rgba(0,131,179,0.12)] transition-all duration-200 hover:border-white/32 hover:bg-white/13 hover:text-white hover:shadow-[0_1px_14px_rgba(0,131,179,0.24)]"
            >
              Projects
              <motion.span
                animate={useActive.animateProjectsDropdownIcon}
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                transition={{ duration: 0.25 }}
                className="ml-0.5"
              >
                <KeyboardArrowDown className="size-4 text-white/55" />
              </motion.span>
            </a>

            <AnimatePresence>
              <motion.nav
                variants={{
                  open: { opacity: 1, height: "var(--height-open, auto)", display: "block" },
                  close: { opacity: 0, height: "var(--height-close, 0)", display: "none" },
                }}
                animate={useActive.animateProjectsDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 z-[1000] mt-1 overflow-hidden rounded-card border border-neutral-light bg-white shadow-2xl lg:[--height-close:auto] lg:w-[300px]"
              >
                <div className="border-b border-neutral-light/60 px-5 py-3.5 bg-neutral-lightest">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-punch">Recent Projects</p>
                  <p className="mt-0.5 text-xs text-neutral-dark/50">Our latest completed work</p>
                </div>
                <div className="px-3 py-3">
                  {projectItems.map(({ href, icon, title, desc }) => (
                    <a
                      key={href}
                      href={href}
                      className="group/item flex items-center gap-3 rounded-button px-2 py-2.5 transition-colors hover:bg-neutral-lightest"
                    >
                      <NavIcon src={icon} alt={title} />
                      <div>
                        <p className="text-sm font-semibold text-neutral-darkest group-hover/item:text-punch transition-colors">{title}</p>
                        <p className="text-xs text-neutral-dark/55">{desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="border-t border-neutral-light px-5 py-3">
                  <a href="/projects" className="text-xs font-semibold text-punch hover:underline">
                    View All Projects →
                  </a>
                </div>
              </motion.nav>
            </AnimatePresence>
          </div>

          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/news">News</NavLink>

          {/* More Info dropdown — same pill style as NavLink */}
          <div
            className="relative"
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              onClick={useActive.openOnMobileDropdownMenu}
              className="nav-underline flex items-center gap-1 rounded-button border border-white/18 bg-white/7 px-3.5 py-1.5 text-sm font-medium text-white/90 shadow-[0_1px_8px_rgba(0,131,179,0.12)] transition-all duration-200 hover:border-white/32 hover:bg-white/13 hover:text-white hover:shadow-[0_1px_14px_rgba(0,131,179,0.24)]"
            >
              More Info
              <motion.span
                animate={useActive.animateDropdownMenuIcon}
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                transition={{ duration: 0.25 }}
                className="ml-0.5"
              >
                <KeyboardArrowDown className="size-4 text-white/55" />
              </motion.span>
            </button>

            <AnimatePresence>
              <motion.nav
                variants={{
                  open: { opacity: 1, height: "var(--height-open, auto)", display: "block" },
                  close: { opacity: 0, height: "var(--height-close, 0)", display: "none" },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.18 }}
                className="absolute top-full right-0 z-[1000] mt-1 overflow-hidden rounded-card border border-neutral-light bg-white shadow-2xl lg:[--height-close:auto] lg:w-[720px]"
              >
                {/* Dropdown header */}
                <div className="border-b border-neutral-light/60 px-6 py-4 bg-neutral-lightest">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-punch">O&apos;Neill Scaffolding Group</p>
                  <p className="mt-0.5 text-xs text-neutral-dark/50">Select a service or resource below</p>
                </div>

                <div className="grid grid-cols-[1fr_1fr_200px] gap-0">
                  {/* Col 1 — Scaffolding */}
                  <div className="border-r border-neutral-light/60 px-5 py-5">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-4 w-0.5 bg-punch" />
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-punch">Scaffolding</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {scaffoldingItems.map(({ href, icon, title, desc }) => (
                        <a
                          key={title}
                          href={href}
                          className="group/item flex items-center gap-3 rounded-button px-2 py-2.5 transition-colors hover:bg-neutral-lightest"
                        >
                          <NavIcon src={icon} alt={title} />
                          <div>
                            <p className="text-sm font-semibold text-neutral-darkest group-hover/item:text-punch transition-colors">{title}</p>
                            <p className="text-xs text-neutral-dark/55">{desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Col 2 — Resources */}
                  <div className="border-r border-neutral-light/60 px-5 py-5">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-4 w-0.5 bg-punch" />
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-punch">Resources</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {resourceItems.map(({ href, icon, title, desc }) => (
                        <a
                          key={href}
                          href={href}
                          className="group/item flex items-center gap-3 rounded-button px-2 py-2.5 transition-colors hover:bg-neutral-lightest"
                        >
                          <NavIcon src={icon} alt={title} />
                          <div>
                            <p className="text-sm font-semibold text-neutral-darkest group-hover/item:text-punch transition-colors">{title}</p>
                            <p className="text-xs text-neutral-dark/55">{desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Col 3 — CTA */}
                  <div className="bg-neutral-lightest px-5 py-5 flex flex-col justify-between">
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <div className="h-4 w-0.5 bg-punch" />
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-punch">Get started</p>
                      </div>
                      <a href="/request-a-quote" className="block rounded-card border border-punch/25 bg-punch/8 p-4 transition-colors hover:bg-punch/15">
                        <p className="text-sm font-bold text-neutral-darkest">Request a Quote</p>
                        <p className="mt-1 text-xs text-neutral-dark/50">48hr turnaround, no obligation</p>
                      </a>
                      <a href="/contact-us" className="mt-3 block rounded-card border border-neutral-light p-4 transition-colors hover:bg-neutral-light/60">
                        <p className="text-sm font-bold text-neutral-darkest">Contact Us</p>
                        <p className="mt-1 text-xs text-neutral-dark/50">Talk to our team directly</p>
                      </a>
                    </div>
                    <div className="mt-5 border-t border-neutral-light pt-4">
                      <p className="text-xs text-neutral-dark/40">Southeast Queensland</p>
                      <p className="mt-1 text-xs font-semibold text-punch">Est. 2000</p>
                    </div>
                  </div>
                </div>
              </motion.nav>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="mx-2 h-5 w-px bg-white/20" />

          <a href="/request-a-quote">
            <Button
              variant="none"
              size="none"
              className="mb-[3px] rounded-button border-[1.5px] border-[#005f80] bg-[#0099ce] px-5 py-1.5 text-sm font-semibold text-white shadow-[0_3px_0_0_#005f80] transition-all duration-200 hover:translate-y-[3px] hover:shadow-none"
            >
              Quote
            </Button>
          </a>
          <a href="/contact-us">
            <Button
              variant="none"
              size="none"
              className="mb-[3px] rounded-button border-[1.5px] border-[#005f80] bg-[#0099ce] px-5 py-1.5 text-sm font-semibold text-white shadow-[0_3px_0_0_#005f80] transition-all duration-200 hover:translate-y-[3px] hover:shadow-none"
            >
              Contact
            </Button>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="-mr-1 ml-auto flex size-10 cursor-pointer flex-col items-center justify-center rounded-button border border-white/20 lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span className="my-[3px] h-0.5 w-5 bg-white" animate={useActive.animateMobileMenuButtonSpan} variants={{ open: { translateY: 8, transition: { delay: 0.1 } }, rotatePhase: { rotate: -45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
          <motion.span className="my-[3px] h-0.5 w-5 bg-white" animate={useActive.animateMobileMenu} variants={{ open: { width: 0, transition: { duration: 0.1 } }, closed: { width: "1.25rem", transition: { delay: 0.3, duration: 0.2 } } }} />
          <motion.span className="my-[3px] h-0.5 w-5 bg-white" animate={useActive.animateMobileMenuButtonSpan} variants={{ open: { translateY: -8, transition: { delay: 0.1 } }, rotatePhase: { rotate: 45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop — tapping it closes the menu */}
          <motion.div
            variants={{ open: { opacity: 1, pointerEvents: "auto" }, close: { opacity: 0, pointerEvents: "none" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={useActive.toggleMobileMenu}
          />
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b border-white/10 bg-midnight-dark px-[5%] pt-4 pb-8"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {[
                { href: "/about-us", label: "About Us" },
                { href: "/capabilities", label: "Capabilities" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="block py-3.5 text-base font-medium text-white/80 hover:text-white">{label}</a>
              ))}

              {/* Projects accordion (mobile) */}
              <div>
                <button
                  className="flex w-full items-center justify-between py-3.5 text-base font-medium text-white/80"
                  onClick={useActive.toggleProjectsDropdown}
                >
                  Projects
                  <motion.span animate={useActive.animateProjectsDropdownIcon} variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }} transition={{ duration: 0.3 }}>
                    <KeyboardArrowDown className="size-5 text-white/50" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.div
                    variants={{ open: { opacity: 1, height: "var(--height-open, auto)", display: "block" }, close: { opacity: 0, height: "var(--height-close, 0)", display: "none" } }}
                    animate={useActive.animateProjectsDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pb-2"
                  >
                    <div className="flex flex-col gap-0.5 pl-2">
                      <p className="py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-punch">Recent Projects</p>
                      {projectItems.map(({ href, title }) => (
                        <a key={href} href={href} className="py-2 text-sm text-white/65 hover:text-white">{title}</a>
                      ))}
                      <a href="/projects" className="mt-1 py-2 text-sm font-semibold text-punch">View All Projects →</a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {[
                { href: "/careers", label: "Careers" },
                { href: "/news", label: "News" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="block py-3.5 text-base font-medium text-white/80 hover:text-white">{label}</a>
              ))}

              {/* More Info accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between py-3.5 text-base font-medium text-white/80"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  More Info
                  <motion.span animate={useActive.animateDropdownMenuIcon} variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }} transition={{ duration: 0.3 }}>
                    <KeyboardArrowDown className="size-5 text-white/50" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.div
                    variants={{ open: { opacity: 1, height: "var(--height-open, auto)", display: "block" }, close: { opacity: 0, height: "var(--height-close, 0)", display: "none" } }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pb-2"
                  >
                    <div className="flex flex-col gap-0.5 pl-2">
                      <p className="py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-punch">Scaffolding</p>
                      {[
                        { href: "/capabilities/commercial-scaffolding", label: "Commercial Scaffolding" },
                        { href: "/capabilities/residential-scaffolding", label: "Residential Scaffolding" },
                        { href: "/capabilities/labour-hire", label: "Labour Hire" },
                        { href: "/capabilities/commercial-scaffolding", label: "Civil Engineering" },
                        { href: "/projects/scaffolding-birdcage", label: "Birdcage Systems" },
                      ].map(({ href, label }) => (
                        <a key={label} href={href} className="py-2 text-sm text-white/65 hover:text-white">{label}</a>
                      ))}
                      <p className="mt-2 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-punch">Resources</p>
                      {[
                        { href: "/safety-and-compliance", label: "Safety & Compliance" },
                        { href: "/news", label: "News" },
                        { href: "/hear-from-our-clients", label: "Client Stories" },
                        { href: "/about-us", label: "About OSG" },
                        { href: "/forms-library", label: "Forms Library (Staff)" },
                      ].map(({ href, label }) => (
                        <a key={href} href={href} className="py-2 text-sm text-white/65 hover:text-white">{label}</a>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a href="/request-a-quote">
                <Button
                  variant="none"
                  size="none"
                  className="mb-[3px] w-full rounded-button border-[1.5px] border-[#005f80] bg-[#0099ce] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_0_#005f80] transition-all duration-200 hover:translate-y-[3px] hover:shadow-none"
                >
                  Get a Quote
                </Button>
              </a>
              <a href="/contact-us">
                <Button
                  variant="none"
                  size="none"
                  className="mb-[3px] w-full rounded-button border-[1.5px] border-[#005f80] bg-[#0099ce] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_0_#005f80] transition-all duration-200 hover:translate-y-[3px] hover:shadow-none"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
