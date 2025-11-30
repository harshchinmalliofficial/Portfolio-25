"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: "github", href: "https://github.com/harshchinmalliofficial", label: "GitHub" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/harsh-chinmalli-1242b42b6/", label: "LinkedIn" },
    { icon: "youtube", href: "https://youtube.com", label: "YouTube" },
    { icon: "twitter", href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Harsh Chinmalli</h3>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer | Building the web, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/job-profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Job Profile
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-muted-foreground hover:text-primary transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">
                    {social.icon === "github"
                      ? "⚙️"
                      : social.icon === "linkedin"
                        ? "💼"
                        : social.icon === "youtube"
                          ? "▶️"
                          : "𝕏"}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Harsh Chinmalli. Built with Next.js, Tailwind, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
