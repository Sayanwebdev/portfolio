"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const categories = ["All", "Infrastructure", "CI/CD", "Monitoring"];

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Kubernetes GitOps Pipeline",
    description: "Designed a GitOps deployment pipeline using ArgoCD and Kubernetes. Automates image builds via GitHub Actions, pushes to Docker Hub, and triggers Kubernetes manifest upgrades with dry-run verification policies.",
    image: "/11.png",
    category: "CI/CD",
    tags: ["Kubernetes", "ArgoCD", "Helm", "GitHub Actions", "Docker"],
    githubUrl: "https://github.com/Sayanwebdev",
    featured: true,
  },
  {
    id: 2,
    title: "Terraform Multi-Region AWS Infrastructure",
    description: "Orchestrated highly available, multi-zone AWS infrastructure using Terraform IaC module structure. Provisions secure VPC networking, public/private subnets, Auto-Scaling Groups behind Application Load Balancers, and RDS databases.",
    image: "/portfolio.png",
    category: "Infrastructure",
    tags: ["Terraform", "AWS", "VPC", "Route53", "IAM"],
    githubUrl: "https://github.com/Sayanwebdev",
    featured: true,
  },
  {
    id: 3,
    title: "Prometheus & Grafana Container Monitoring Stack",
    description: "Assembled a real-time site reliability and telemetry collection cluster using Prometheus. Queries microservices inside a Docker Swarm, tracks request counts, database locks, and alerts via Discord webhook.",
    image: "/habit.png",
    category: "Monitoring",
    tags: ["Prometheus", "Grafana", "Docker Swarm", "Telemetry", "Alertmanager"],
    githubUrl: "https://github.com/Sayanwebdev",
    featured: true,
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

        {/* Projects Grid with horizontal swiping on mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                layout
                className="snap-start flex-shrink-0 w-[82vw] sm:w-[320px] lg:w-auto h-full"
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

                    {/* Project Action Links (Highly Mobile & Accessibility Friendly) */}
                    <div className="flex items-center gap-3 pt-2">
                      {project.liveUrl ? (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs h-8 cursor-pointer"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Live Demo
                          </Link>
                        </Button>
                      ) : null}
                      
                      {project.githubUrl ? (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="text-xs h-8 cursor-pointer"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1.5 h-3.5 w-3.5" />
                            Code
                          </Link>
                        </Button>
                      ) : null}
                    </div>
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
