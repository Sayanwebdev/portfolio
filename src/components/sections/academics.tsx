"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const academics = [
  {
    degree: "B.Tech",
    institution: "Dr. B. C. Roy Engineering College, Durgapur",
    status: "ongoing",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary",
    institution: "Maliara R. N. High School (HSC)",
    status: "completed",
    icon: "📚",
  },
  {
    degree: "Secondary",
    institution: "Nityanandapur High School (SSC)",
    status: "completed",
    icon: "🏫",
  },
];

export function AcademicsSection() {
  return (
    <section id="academics" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Education
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Academic{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Academics List */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {academics.map((item, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.1}>
              <MagicCard className="p-4 sm:p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.institution}
                    </p>
                    {item.status === "ongoing" && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Ongoing
                      </span>
                    )}
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
