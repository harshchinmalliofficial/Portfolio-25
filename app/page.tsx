"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import SkillTag from "@/components/skill-tag"

const frontendSkills = ["ReactJS", "NextJS", "Tailwind", "Bootstrap", "HTML", "CSS", "JavaScript"]
const backendSkills = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "SQL"]
const toolsSkills = ["Git", "Docker", "REST APIs", "GitHub Actions", "GCP"]
const languageSkills = ["JavaScript", "Java", "Python", "C/C++", "Go"]

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Harsh <span className="text-primary">Chinmalli</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full Stack Developer | MERN | Node.js | Cloud & DevOps
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Full Stack Developer with expertise in building high-performance APIs and scalable web applications.
              Proficient in JavaScript, Node.js, React, MongoDB, and cloud platforms (GCP). Experienced with CI/CD
              pipelines using GitHub Actions and database optimization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors text-center"
              >
                View Projects
              </Link>
              <Link
                href="/job-profile"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-center"
              >
                Job Profile
              </Link>
              <Link
                href="/certificates"
                className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:border-primary transition-colors text-center"
              >
                Certificates
              </Link>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Let's talk →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
              <img src="/imagesix.jpeg" alt="Harsh Chinmalli" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-6 -right-4 bg-card border-2 border-primary rounded-2xl p-4 shadow-lg"
            >
              <p className="text-sm font-semibold text-primary">Available for Work</p>
              <p className="text-xs text-muted-foreground">Remote & Hybrid</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Full-stack capabilities across modern web and cloud technologies
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-5 flex items-center gap-2">
                <span className="text-xl">💻</span> Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, idx) => (
                  <SkillTag key={skill} label={skill} index={idx} category="frontend" />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-5 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, idx) => (
                  <SkillTag key={skill} label={skill} index={idx} category="backend" />
                ))}
              </div>
            </motion.div>

            {/* Tools & Cloud */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-5 flex items-center gap-2">
                <span className="text-xl">🛠️</span> Tools & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, idx) => (
                  <SkillTag key={skill} label={skill} index={idx} category="tools" />
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-amber-400 mb-5 flex items-center gap-2">
                <span className="text-xl">🚀</span> Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languageSkills.map((skill, idx) => (
                  <SkillTag key={skill} label={skill} index={idx} category="learning" />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life. I'm always interested in
            hearing about new opportunities.
          </p>
          <motion.a
            href="mailto:harshanilchinmalli@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}
