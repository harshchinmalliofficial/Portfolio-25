"use client"

import { motion } from "framer-motion"
import JobCard from "@/components/job-card"

const jobExperience = [
  {
    role: "Analyst Trainee",
    company: "Cognizant Technology Solutions (MNC)",
    duration: "Sept 2025 - Present",
    location: "Chennai, India (Onsite)",
    responsibilities: [
      "Windows Server Administration - Hands-on experience with Active Directory, DNS, DHCP configuration and management",
      "Networking & Virtualization - Understanding of network fundamentals, VMware vSphere (vCenter, ESXi), and virtual machine provisioning",
      "Linux System Management - Basic administration, command-line operations, and scripting for automation",
      "Storage & Backup Solutions - Knowledge of SAN, DAS, NAS architectures and backup/monitoring tools for data protection",
      "Database Management - Exposure to Microsoft SQL Server and Oracle database fundamentals",
      "Automation & IT Processes - Basics of Python, PowerShell scripting, middleware concepts, and ITIL best practices",
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "VMware vSphere",
      "Linux",
      "Python",
      "PowerShell",
      "SQL Server",
      "Oracle",
      "ITIL",
    ],
  },
  {
    role: "Backend Developer",
    company: "Sikoter (US Startup)",
    duration: "Jan 2025 - Present",
    location: "Chicago, IL (Remote)",
    responsibilities: [
      "Developed and optimized scalable Node.js APIs, increasing application performance by 30%",
      "Automated CI/CD processes using GitHub Actions, reducing deployment time and improving team efficiency",
      "Optimized MySQL queries and deployed services on GCP and MongoDB, resulting in 30% faster data retrieval",
      "Designed and developed responsive frontend UI/UX with React/JavaScript for major interface redesigns",
      "Implemented Winston.js error logging system and deployed MySQL databases on Google Cloud Platform",
      "Built interactive admin dashboard with data visualization charts for real-time business analytics",
    ],
    technologies: ["Node.js", "Express.js", "React", "MySQL", "MongoDB", "GCP", "GitHub Actions", "Winston.js"],
  },
]

export default function JobProfile() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A timeline of my career journey, highlighting key roles, responsibilities, and the technologies I've
            mastered along the way.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {jobExperience.map((job, idx) => (
            <JobCard key={idx} {...job} index={idx} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
                  🎓
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">Bachelor of Computer Applications</h3>
                <p className="text-primary font-medium">KLE Technological University</p>
                <p className="text-muted-foreground text-sm">Hubli | 2022 - 2025</p>
                <p className="text-muted-foreground text-sm mt-2">GPA: 7.5/10</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for more details?</h2>
          <p className="text-muted-foreground mb-8">
            Download my resume or connect with me on LinkedIn to learn more about my professional background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/HARSHCHINMALLI.pdf"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-chinmalli-1242b42b6/"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              View on LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
