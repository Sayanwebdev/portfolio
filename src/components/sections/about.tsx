"use client";

import Image from "next/image";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";

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

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <BlurFade delay={0.1}>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30" />
                
                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 rounded-2xl">
                  <div className="bg-background rounded-2xl overflow-hidden">
                    <Image
                      src="/0.jpg"
                      alt="Sayan Mondal"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right: Content */}
          <div className="space-y-8">
            <BlurFade delay={0.2}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                About Me
              </span>
            </BlurFade>

            <BlurFade delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Engineering{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Student
                </span>
                {" "}& Developer
              </h2>
            </BlurFade>

            <BlurFade delay={0.4}>
              <TextAnimate
                animation="blurInUp"
                by="word"
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I am a 4th year B.Tech student (ECE) at Dr. B. C. Roy Engineering College, Durgapur. I build front-ends and work with Python & Java. Currently expanding my skills into DevOps.
              </TextAnimate>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="text-muted-foreground leading-relaxed">
                Ongoing project: <strong>Predictive Energy Management System (PEMS)</strong> — Weather-Integrated, machine learning-driven smart metering system that predicts weather, forecasts energy demand, and automatically shifts power between grid, solar, and battery.
              </p>
            </BlurFade>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <BlurFade key={item.title} delay={0.6 + index * 0.1}>
                  <MagicCard className="p-4 bg-card">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
