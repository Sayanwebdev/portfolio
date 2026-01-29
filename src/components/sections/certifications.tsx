"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const certifications = [
  {
    id: 1,
    title: "AI Tools Workshop (Be10x)",
    description: "Completed a 3-hour workshop focused on using Artificial Intelligence tools to enhance productivity and automate tasks efficiently.",
    image: "/6.jpg",
  },
  {
    id: 2,
    title: "MATLAB Programming Certification",
    description: "Gained hands-on experience with MATLAB for engineering problem-solving, data visualization, and signal processing applications.",
    image: "/7.jpg",
  },
  {
    id: 3,
    title: "Power BI Workshop (OfficeMaster)",
    description: "Successfully completed the Power BI Workshop on August 17th, 2025. Skilled in creating AI-powered interactive dashboards in Power BI.",
    image: "/10.jpg",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Achievements
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Certifications List */}
        <div className="space-y-6 sm:space-y-8">
          {certifications.map((cert, index) => (
            <BlurFade key={cert.id} delay={0.3 + index * 0.1}>
              <MagicCard className="overflow-hidden bg-card">
                <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Image */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* More Coming Soon */}
        <BlurFade delay={0.7}>
          <p className="text-center text-base sm:text-lg font-medium text-muted-foreground mt-8 sm:mt-12">
            🎖️ More certifications coming soon...
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
