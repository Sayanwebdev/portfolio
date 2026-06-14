"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, GraduationCap, Award, Heart, GitBranch, Cloud, Cpu, Terminal } from "lucide-react";
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
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automating testing and build workflows with GitHub Actions",
  },
  {
    icon: Cloud,
    title: "Infrastructure as Code",
    description: "Declarative cloud provisioning using Terraform",
  },
  {
    icon: Cpu,
    title: "Containers & K8s",
    description: "Dockerizing applications and orchestrating on Kubernetes",
  },
  {
    icon: Terminal,
    title: "Automation Scripting",
    description: "Writing robust automation scripts in Bash & Python",
  },
];

const academics = [
  {
    degree: "B.Tech (ECE)",
    institution: "Dr. B. C. Roy Engineering College, Durgapur",
    status: "ongoing",
    details: "Focusing on electronics, digital networks, software automation, and cloud system topologies.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Maliara R. N. High School",
    status: "completed",
    details: "Completed secondary education in Science stream with mathematics and physics concentration.",
    icon: "📚",
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Nityanandapur High School",
    status: "completed",
    details: "Foundational secondary education with standard sciences.",
    icon: "🏫",
  },
];

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect (Associate)",
    description: "Validated expertise in design and deployment of secure, robust, and highly available cloud applications using AWS services.",
    image: "/6.jpg",
  },
  {
    id: 2,
    title: "HashiCorp Certified: Terraform Associate",
    description: "Certified in writing declarative configuration files to automate virtual infrastructure management across multiple providers.",
    image: "/7.jpg",
  },
  {
    id: 3,
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Validated competence in configuring, setting up, and managing multi-node Kubernetes clusters, ingress controllers, and networking configs.",
    image: "/10.jpg",
  },
];

const hobbies = [
  { name: "Self-Hosting", icon: "🌐", desc: "Running a local home-lab server, managing DNS, and hosting containerized services" },
  { name: "Linux Customization", icon: "🐧", desc: "Configuring dotfiles, kernel parameters, and writing custom shell scripts" },
  { name: "Coding Challenges", icon: "💻", desc: "Solving automation scripting algorithms and debugging server issues" },
  { name: "Photography", icon: "📸", desc: "Capturing details, precision, and perspective edits" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio");

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
                          I am a B.Tech student majoring in Electronics and Communication Engineering (ECE) at Dr. B. C. Roy Engineering College, Durgapur. I specialize in DevOps and cloud systems, configuring CI/CD pipelines, automating deployments, and maintaining serverless and containerized microservices.
                        </TextAnimate>
                        <p>
                          My core project work involves designing and hosting high-availability web services, integrating GitOps pipelines (ArgoCD & Kubernetes), and writing Infrastructure as Code configurations (Terraform) to orchestrate multi-region cloud applications.
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
                          <MagicCard className="overflow-hidden bg-card/40 border border-border/30 hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
                            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                              <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 30vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-bold text-base text-foreground leading-snug">{cert.title}</h4>
                                <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">{cert.description}</p>
                              </div>
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
    </section>
  );
}
