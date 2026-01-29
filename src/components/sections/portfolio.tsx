"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

const categories = ["All", "IoT/ML", "Web", "Tools"];

const projects = [
  {
    id: 1,
    title: "Predictive Energy Management System (PEMS)",
    description: "AI-driven hybrid smart metering system that predicts weather, forecasts energy demand, and automatically shifts power between grid, solar, and battery. Uses ESP32 with LSTM-based ML, intelligent switching, cost optimization, and battery life protection.",
    image: "/11.png",
    category: "IoT/ML",
    tags: ["ESP32", "Python", "LSTM", "TensorFlow Lite", "IoT"],
    githubUrl: "https://github.com/Sayanwebdev",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "You're currently viewing my personal portfolio website — a responsive Next.js design focused on showcasing my skills, experience, and projects. Built with Next.js, TypeScript, Tailwind CSS, and Magic UI animations.",
    image: "/portfolio.png",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    liveUrl: "https://portfolio.sayan.qzz.io",
    githubUrl: "https://github.com/Sayanwebdev/portfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Daily Habit Tracker — Habit Tracker Pro",
    description: "Habit Tracker Pro helps you add and monitor daily habits, stay strict with streaks, and visualise progress as a completion percentage against your targets. Includes integrated calendar view for historical records with localStorage data persistence.",
    image: "/habit.png",
    category: "Tools",
    tags: ["JavaScript", "LocalStorage", "Calendar", "Data Visualization"],
    featured: false,
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              My Work
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Here are some of my recent projects. Each project is a unique piece
              of development showcasing my skills and passion.
            </p>
          </BlurFade>
        </div>

        {/* Filter Tabs */}
        <BlurFade delay={0.4}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <MagicCard className="group relative overflow-hidden bg-card h-full">
                  {project.featured && (
                    <BorderBeam size={150} duration={8} delay={index} />
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={project.liveUrl || "#"}
                      target="_blank"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
