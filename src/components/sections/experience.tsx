"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              My Journey
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Work{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Experience Items */}
        <div className="space-y-8 sm:space-y-12">
          {/* BSNL Internship */}
          <BlurFade delay={0.3}>
            <MagicCard className="p-4 sm:p-6 md:p-8 bg-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                BSNL Internship — Telecom Trainee
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                <strong>Location:</strong> Burdwan &nbsp; | &nbsp; <strong>Duration:</strong> June–July 2025
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Hands-on telecom trainee work: optical fiber systems, fiber maintenance, traffic control, and NGN (Next Generation Network)
                operations. Assisted in testing fiber links, analyzing traffic loads and learning broadband provisioning procedures.
              </p>

              {/* Images Grid - Mobile First */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="rounded-lg overflow-hidden shadow-md w-full aspect-[4/3]">
                  <Image
                    src="/9.jpg"
                    alt="BSNL Work Experience 1"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md w-full aspect-[4/3]">
                  <Image
                    src="/4.jpg"
                    alt="BSNL Work Experience 2"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="bg-muted p-4 sm:p-5 rounded-lg mb-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>BSNL Internship Certificate</strong> — Successfully completed an internship at BSNL Burdwan.
                  Received from the <strong>Assistant General Manager (AGM)</strong> for outstanding performance and learning.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/1.jpg"
                    alt="BSNL Certificate 1"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/2.jpg"
                    alt="BSNL Certificate 2"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/3.jpg"
                    alt="BSNL Certificate 3"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          {/* SkillCraft Technology */}
          <BlurFade delay={0.4}>
            <MagicCard className="p-4 sm:p-6 md:p-8 bg-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                SkillCraft Technology — Web Development Intern
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                <strong>Duration:</strong> 01 July–31 July 2024
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Built responsive UI using HTML, CSS and JavaScript; participated in code reviews and UI improvements.
              </p>

              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-md w-full max-w-lg">
                  <Image
                    src="/5.jpg"
                    alt="SkillCraft Certificate"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          {/* Pinnacle Labs */}
          <BlurFade delay={0.5}>
            <MagicCard className="p-4 sm:p-6 md:p-8 bg-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Pinnacle Labs — Python Intern
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                <strong>Duration:</strong> 27 Aug–26 Sept 2025
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Worked with Python for automation and basic data processing workflows; practiced debugging and scripting for small projects.
              </p>

              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-md w-full max-w-lg">
                  <Image
                    src="/8.jpg"
                    alt="Pinnacle Certificate"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
