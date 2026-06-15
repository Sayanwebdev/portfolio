"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Activity, ShieldCheck, Cpu, GitBranch, CheckCircle2, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#devops", label: "Terminal" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);
  const [latency, setLatency] = React.useState(14);
  const [activeSection, setActiveSection] = React.useState("home");
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  // Monitor scroll for header background and Back-to-Top visibility
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fluctuating latency simulation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const nextVal = prev + delta;
        return Math.max(11, Math.min(26, nextVal));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Close status popover when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scrollspy: Observe sections and update active menu item
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Detect when section is in active view area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold flex-shrink-0 select-none">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sayan
            </span>
          </Link>

          {/* Desktop Navigation with Scrollspy Sliding Indicator */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors select-none",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Actions (DevOps Badge, ThemeToggle, Mobile Menu) */}
          <div className="flex items-center gap-3 relative">
            
            {/* DevOps Status Widget */}
            <div className="relative" ref={popoverRef}>
              <button
                onClick={() => setIsStatusOpen(!isStatusOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-muted hover:bg-muted/80 border border-border/50 shadow-sm transition-all duration-200 cursor-pointer select-none"
                aria-label="DevOps Status Console"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-muted-foreground hidden sm:inline-block">System:</span>
                <span className="text-emerald-500 font-bold">Online</span>
              </button>

              {/* High-Tech Popover Dropdown */}
              <AnimatePresence>
                {isStatusOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-72 bg-popover/95 backdrop-blur-xl border border-border/80 shadow-xl rounded-xl p-4 z-50 text-foreground"
                  >
                    {/* Title Console Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-border/50 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                        DevOps Console
                      </span>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-500 font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
                        SECURE
                      </span>
                    </div>

                    {/* Metrics List */}
                    <div className="space-y-3">
                      {/* Environment */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <Cpu className="h-3.5 w-3.5 text-purple-500" />
                          Environment
                        </span>
                        <span className="font-semibold text-foreground">Production</span>
                      </div>

                      {/* Uptime */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                          Uptime
                        </span>
                        <span className="font-semibold text-emerald-500">99.98%</span>
                      </div>

                      {/* Latency */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <Activity className="h-3.5 w-3.5 text-pink-500" />
                          API Latency
                        </span>
                        <motion.span 
                          key={latency}
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                          className="font-mono font-semibold text-foreground"
                        >
                          {latency} ms
                        </motion.span>
                      </div>

                      {/* CI/CD Build pipeline */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          Build Status
                        </span>
                        <span className="font-semibold text-foreground flex items-center gap-1">
                          Passing <span className="text-[10px] text-muted-foreground font-mono">#148</span>
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/50 my-3" />

                    {/* Commit details */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <GitBranch className="h-3 w-3 text-amber-500" />
                        Active Release
                      </span>
                      <div className="bg-muted/50 border border-border/30 rounded p-2 mt-1">
                        <p className="text-[11px] font-mono text-foreground font-semibold leading-relaxed truncate">
                          feat: optimize layout & devops UI
                        </p>
                        <p className="text-[9px] font-mono text-muted-foreground mt-0.5">
                          SHA: <span className="text-foreground">e2a48b1</span> • main
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const sectionId = item.href.substring(1);
                    const isActive = activeSection === sectionId;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium py-1.5 transition-colors border-l-2 pl-3",
                          isActive
                            ? "text-primary border-primary font-semibold"
                            : "text-muted-foreground border-transparent hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg text-foreground hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 group select-none cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
