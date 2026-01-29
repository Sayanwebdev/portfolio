"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const hobbies = [
  { name: "Cricket", icon: "🏏" },
  { name: "Badminton", icon: "🏸" },
  { name: "Coding", icon: "💻" },
  { name: "Photography", icon: "📸" },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Beyond Work
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hobbies
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Hobbies Grid */}
        <div className="max-w-2xl mx-auto">
          <BlurFade delay={0.3}>
            <MagicCard className="p-6 sm:p-8 md:p-10 bg-card">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl">
                      {hobby.icon}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
