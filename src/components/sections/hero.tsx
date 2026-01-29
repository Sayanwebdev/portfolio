"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useTheme } from "next-themes";

const socialLinks = [
  { href: "https://github.com/Sayanwebdev", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sayan-mondal-746255314", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:myself@sayan.qzz.io", icon: Mail, label: "Email" },
];

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  
  const particleColor = useMemo(() => {
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  }, [resolvedTheme]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        color={particleColor}
        ease={80}
        refresh
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Greeting */}
          <BlurFade delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium">
              <span className="animate-wave">👋</span> Hello, I&apos;m
            </span>
          </BlurFade>

          {/* Name */}
          <BlurFade delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Sayan Mondal
              </span>
            </h1>
          </BlurFade>

          {/* Typing Animation */}
          <BlurFade delay={0.3}>
            <div className="h-12 flex items-center">
              <span className="text-xl md:text-2xl text-muted-foreground">
                I&apos;m a{" "}
              </span>
              <TypingAnimation
                words={[
                  "Frontend Developer",
                  "Python Enthusiast",
                  "Data Engineer",
                  "IoT Developer",
                ]}
                className="text-xl md:text-2xl font-semibold text-primary ml-2"
                duration={100}
                delay={0}
                loop
              />
            </div>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.4}>
            <p className="max-w-2xl text-lg text-muted-foreground">
              4th year B.Tech student (ECE) at Dr. B. C. Roy Engineering College, Durgapur.
              I build front-ends and work with Python & Java. Currently expanding my skills into DevOps.
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Link href="/Sayan's_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={0.6}>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-foreground" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </BlurFade>

          {/* Scroll Indicator */}
          <BlurFade delay={0.7}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-4"
            >
              <Link href="#about" className="text-muted-foreground hover:text-foreground">
                <ArrowDown className="h-6 w-6" />
              </Link>
            </motion.div>
          </BlurFade>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
