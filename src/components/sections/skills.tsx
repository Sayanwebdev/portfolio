"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML / CSS / JavaScript", level: 90 },
      { name: "React / Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Design", level: 85 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL / MySQL", level: 75 },
      { name: "Data Engineering", level: 70 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "ESP32 / IoT", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "Power BI / MATLAB", level: 70 },
    ],
    color: "from-orange-500 to-yellow-500",
  },
];

const technologies = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS",
  "Python", "Java", "SQL", "MySQL", "Git", "GitHub",
  "ESP32", "IoT", "Machine Learning", "LSTM", "TensorFlow",
  "Power BI", "MATLAB", "Data Engineering", "DevOps",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <BlurFade delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              My Skills
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Technologies &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              I work with a variety of technologies to bring ideas to life.
              Here are some of the tools and technologies I use on a daily basis.
            </p>
          </BlurFade>
        </div>

        {/* Skills Grid */}
        <div className="relative mb-16">
          <BorderBeam size={250} duration={12} delay={0} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <BlurFade key={category.title} delay={0.4 + categoryIndex * 0.1}>
                <MagicCard className="relative p-6 h-full bg-card">
                  <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MagicCard>
            </BlurFade>
          ))}
          </div>
        </div>

        {/* Technology Tags */}
        <BlurFade delay={0.7}>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
