"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, GraduationCap, Award, Heart, Code2, Palette, Sparkles, Zap } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";

const tabs = [
  { id: "bio", label: "About Me", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "hobbies", label: "Hobbies", icon: Heart },
];

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive web applications",
  },
  {
    icon: Palette,
    title: "Python & Java",
    description: "Backend and data engineering",
  },
  {
    icon: Zap,
    title: "IoT & ML",
    description: "ESP32, LSTM, predictive systems",
  },
  {
    icon: Sparkles,
    title: "DevOps Learning",
    description: "Expanding into infrastructure",
  },
];

const academics = [
  {
    degree: "B.Tech (ECE)",
    institution: "Dr. B. C. Roy Engineering College, Durgapur",
    status: "ongoing",
    details: "Focusing on Electronics and Communication Engineering fundamentals and programming.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Maliara R. N. High School",
    status: "completed",
    details: "Completed Higher Secondary education with Science stream.",
    icon: "📚",
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Nityanandapur High School",
    status: "completed",
    details: "Completed foundational Secondary education.",
    icon: "🏫",
  },
];

const certifications = [
  {
    id: 1,
    title: "AI Tools Workshop (Be10x)",
    issuer: "Be10x",
    date: "2024",
    description: "Completed a workshop focused on using Artificial Intelligence tools to enhance productivity and automate tasks efficiently.",
    image: "/6.jpg",
  },
  {
    id: 2,
    title: "MATLAB Programming Certification",
    issuer: "Dr. B. C. Roy Engineering College",
    date: "2024",
    description: "Gained hands-on experience with MATLAB for engineering problem-solving, data visualization, and signal processing applications.",
    image: "/7.jpg",
  },
  {
    id: 3,
    title: "Power BI Workshop (OfficeMaster)",
    issuer: "OfficeMaster",
    date: "Aug 17, 2025",
    description: "Successfully completed the Power BI Workshop. Skilled in creating AI-powered interactive dashboards in Power BI.",
    image: "/10.jpg",
  },
];

const hobbies = [
  { name: "Cricket", icon: "🏏", desc: "Playing and watching cricket matches" },
  { name: "Badminton", icon: "🏸", desc: "Playing friendly badminton games" },
  { name: "Coding", icon: "💻", desc: "Building software, web pages and problem-solving" },
  { name: "Photography", icon: "📸", desc: "Capturing beautiful moments and landscapes" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Photo Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <BlurFade delay={0.1}>
              <div className="relative">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 aspect-square max-w-md mx-auto">
                  {/* Decorative Glow */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30" />

                  {/* Main Image */}
                  <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 rounded-2xl shadow-xl">
                    <div className="bg-background rounded-2xl overflow-hidden aspect-square relative">
                      <Image
                        src="/0.jpg"
                        alt="Sayan Mondal"
                        fill
                        sizes="(max-width: 768px) 280px, 320px"
                        className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-foreground">Sayan Mondal</h3>
                  <p className="text-sm text-muted-foreground mt-1">ECE Student & Software Developer</p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Side: Consolidated Tabs Content Column (Span 8) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 w-full">
            <div className="space-y-4">
              <BlurFade delay={0.2}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  My Profile
                </span>
              </BlurFade>

              <BlurFade delay={0.3}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Sayan{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mondal
                  </span>
                </h2>
              </BlurFade>
            </div>

            {/* Custom Interactive Tab Controls */}
            <BlurFade delay={0.4}>
              <div className="bg-muted/60 backdrop-blur-md rounded-xl p-1.5 flex flex-wrap sm:flex-nowrap gap-1 border border-border/40 max-w-2xl w-full">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 select-none cursor-pointer ${
                        isActive
                          ? "text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-profile-tab"
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg -z-10 shadow-md"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </BlurFade>

            {/* Dynamic Content Container */}
            <div className="relative min-h-[350px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {activeTab === "bio" && (
                    <div className="space-y-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <TextAnimate
                          animation="blurInUp"
                          by="word"
                          className="text-lg"
                        >
                          I am a B.Tech student majoring in Electronics and Communication Engineering (ECE) at Dr. B. C. Roy Engineering College, Durgapur. I build front-ends and work with Python & Java.
                        </TextAnimate>
                        <p>
                          Ongoing project: <strong>Predictive Energy Management System (PEMS)</strong> — Weather-Integrated, machine learning-driven smart metering system that predicts weather, forecasts energy demand, and automatically shifts power between grid, solar, and battery.
                        </p>
                      </div>

                      {/* Highlights Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {highlights.map((item) => {
                          const Icon = item.icon;
                          return (
                            <MagicCard key={item.title} className="p-4 bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300">
                              <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                                </div>
                              </div>
                            </MagicCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div className="relative pl-6 border-l border-border/80 space-y-8 py-2">
                      {academics.map((item, index) => (
                        <div key={index} className="relative group">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-all duration-300" />
                          
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xl">{item.icon}</span>
                              <h4 className="text-lg font-bold text-foreground">{item.degree}</h4>
                              {item.status === "ongoing" ? (
                                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                                  Ongoing
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                  Completed
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">{item.institution}</p>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-2xl">{item.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "certifications" && (
                    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
                      {certifications.map((cert) => (
                        <div key={cert.id} className="snap-start flex-shrink-0 w-[82vw] sm:w-[280px] md:w-auto h-full">
                          <MagicCard className="p-5 bg-card/40 border border-border/30 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full relative group">
                            <div className="space-y-4">
                              {/* Top Icon & Verified Badge */}
                              <div className="flex items-center justify-between">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-primary border border-primary/10">
                                  <Award className="h-5 w-5" />
                                </div>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  Active
                                </span>
                              </div>

                              {/* Title, Issuer & Date */}
                              <div className="space-y-1">
                                <h4 className="font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                                  {cert.title}
                                </h4>
                                <div className="text-xs text-muted-foreground font-medium">
                                  {cert.issuer} • <span className="text-muted-foreground/75">{cert.date}</span>
                                </div>
                              </div>

                              <p className="text-xs text-muted-foreground/95 leading-relaxed line-clamp-3">
                                {cert.description}
                              </p>
                            </div>

                            {/* Action Link */}
                            <div className="pt-4 border-t border-border/30 mt-4 flex items-center justify-between">
                              <button
                                onClick={() => setSelectedCert(cert.image)}
                                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                View Certificate ↗
                              </button>
                            </div>
                          </MagicCard>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "hobbies" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {hobbies.map((hobby, index) => (
                        <MagicCard key={index} className="p-4 bg-card/40 border border-border/30 hover:border-primary/20 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl p-3 bg-muted/50 rounded-xl flex-shrink-0 select-none">
                              {hobby.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground">{hobby.name}</h4>
                              <p className="text-sm text-muted-foreground mt-0.5">{hobby.desc}</p>
                            </div>
                          </div>
                        </MagicCard>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Overlay for Certifications */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out select-none"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[80vh] aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCert}
                alt="Certificate View"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain p-2"
                priority
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all select-none cursor-pointer w-9 h-9 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
