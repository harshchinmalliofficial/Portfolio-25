"use client"

import { motion } from "framer-motion"
import AchievementCard from "@/components/achievement-card"

const achievements = [
  {
    title: "Performance Optimization",
    description: "Improved application performance by 30% through efficient system design and implementation",
    icon: "⚡",
    metric: "30% Faster",
  },
  {
    title: "Projects Completed",
    description:
      "Delivered 4+ major projects including platforms for knowledge sharing, coding challenges, and automation",
    icon: "🚀",
    metric: "4+ Projects",
  },
  {
    title: "GitHub Contributions",
    description: "Built VS Code extensions and developed repositories with quality code and documentation",
    icon: "💻",
    metric: "Active Dev",
  },
  {
    title: "API Development",
    description: "Developed and optimized scalable Node.js APIs for production applications",
    icon: "🔧",
    metric: "Production APIs",
  },
  {
    title: "Cloud Deployment",
    description: "Deployed services on GCP and MongoDB with 30% faster data retrieval optimization",
    icon: "☁️",
    metric: "GCP & MongoDB",
  },
  {
    title: "CI/CD Automation",
    description: "Automated deployment processes using GitHub Actions reducing deployment time significantly",
    icon: "🔄",
    metric: "GitHub Actions",
  },
]

export default function Achievements() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary">Milestones</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Key accomplishments and metrics that showcase my impact as a developer and team member.
          </p>
        </motion.div>
      </section>

      {/* Achievements Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, idx) => (
            <AchievementCard key={idx} {...achievement} index={idx} />
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "BLOGTECH",
                description:
                  "Secure internal Q&A platform with role-based access and JWT auth. Integrated Winston.js error logging for proactive debugging.",
                tech: "Node.js, Express, MongoDB, JWT, Winston.js",
              },
              {
                title: "CODECLUB",
                description:
                  "Coding challenge platform with daily problems, rewards, and leaderboards. Integrated Gemini API for automatic test generation.",
                tech: "Node.js, React, Gemini API, MongoDB",
              },
              {
                title: "GitHub Auto-Commit Extension",
                description:
                  "VS Code extension automating repository creation and continuous README commits. Integrated GitHub REST API with Octokit library.",
                tech: "JavaScript, GitHub API, Octokit, VS Code",
              },
              {
                title: "PDF Chatbot",
                description:
                  "Privacy-first chatbot answering questions from offline PDF content. Uses LangChain and FAISS for semantic search.",
                tech: "LangChain, FAISS, Python, Vector Embeddings",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm text-primary font-medium">
                  <span className="font-semibold">Tech Stack:</span> {project.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited about new projects and opportunities to make an impact.
          </p>
          <a
            href="mailto:harshanilchinmalli@gmail.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Start a Project
          </a>
        </motion.div>
      </section>
    </main>
  )
}
