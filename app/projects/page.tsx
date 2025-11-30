"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "BLOGTECH",
      description: "A modern blogging platform with rich text editing, user authentication, and real-time comments.",
      shortDescription: "Modern blogging platform built with React and Node.js",
      image: "/blogging-platform-interface.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Rich text editor with formatting options",
        "User authentication and authorization",
        "Real-time commenting system",
        "Search and filter functionality",
        "Responsive design",
        "User profile management",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      id: 2,
      title: "CODECLUB",
      description: "Community-driven coding platform for developers to share solutions and collaborate on problems.",
      shortDescription: "Community platform for coding challenges and collaboration",
      image: "/coding-community-platform.jpg",
      tags: ["Next.js", "PostgreSQL", "Express", "Socket.io"],
      features: [
        "Real-time coding collaboration",
        "Challenge and problem repository",
        "Socket.io for live updates",
        "User leaderboard system",
        "Code submission and evaluation",
        "Community discussion forums",
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Socket.io", "Redis", "Docker"],
      link: "https://github.com",
    },
    {
      id: 3,
      title: "GitHub Auto-Commit Extension",
      description: "Browser extension that automates GitHub commits with intelligent message generation.",
      shortDescription: "Chrome extension for automated GitHub commits",
      image: "/github-automation-tool.jpg",
      tags: ["JavaScript", "GitHub API", "Chrome Extension"],
      features: [
        "Automatic commit scheduling",
        "Intelligent message generation",
        "GitHub API integration",
        "Repository management",
        "Commit history tracking",
        "Easy configuration",
      ],
      technologies: ["JavaScript", "GitHub API", "Chrome Extension API", "Webpack"],
      link: "https://github.com",
    },
    {
      id: 4,
      title: "PDF Chatbot",
      description: "AI-powered chatbot that answers questions about PDF documents using NLP.",
      shortDescription: "AI chatbot for PDF document analysis",
      image: "/pdf-ai-chatbot-interface.jpg",
      tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
      features: [
        "PDF document parsing",
        "Natural Language Processing",
        "Context-aware responses",
        "Multiple file support",
        "Conversation history",
        "Export capabilities",
      ],
      technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "PyPDF2", "Streamlit"],
      link: "https://github.com",
    },
  ]

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
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my recent projects showcasing expertise in full-stack development, AI integration, and innovative
            solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <ProjectCard
                title={project.title}
                description={project.shortDescription}
                image={project.image}
                tags={project.tags}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub repository for additional projects and contributions.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
