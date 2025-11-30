// "use client"

// import { motion } from "framer-motion"
// import CertificateCard from "@/components/certificate-card"

// const certificates = [
//   {
//     title: "Add Your Certificates",
//     platform: "Add Platform",
//     year: "2024",
//   },
//   {
//     title: "Add Your Certificates",
//     platform: "Add Platform",
//     year: "2024",
//   },
//   {
//     title: "Add Your Certificates",
//     platform: "Add Platform",
//     year: "2024",
//   },
// ]

// export default function Certificates() {
//   return (
//     <main className="min-h-screen">
//       {/* Header */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-primary">Certificates</span> & Credentials
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl">
//             A collection of certifications and courses I've completed to stay current with industry standards and best
//             practices.
//           </p>
//         </motion.div>
//       </section>

//       {/* Certificate Grid */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {certificates.map((cert, idx) => (
//             <CertificateCard key={idx} {...cert} index={idx} />
//           ))}
//         </motion.div>
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuous Learning</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             I'm committed to staying ahead of the curve. Always learning new technologies and improving my skills.
//           </p>
//           <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
//             View My Profile
//           </button>
//         </motion.div>
//       </section>
//     </main>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Certificate {
  title: string
  platform: string
  year: string
  image?: string
  link?: string
}

const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development",
    platform: "Udemy",
    year: "2025",
    image: "/VMware.jpg", // Add your image path here
    link: "https://cognizant.udemy.com/certificate/UC-75414a6f-820b-4b2f-a1f3-6d678cd948f2/" // Optional: Add certificate verification link
  },
  {
    title: "Advanced React & TypeScript",
    platform: "Udemy",
    year: "2025",
    image: "/Networking.jpg",
    link: "https://udemy.com/certificate/your-cert-id"
  },
  {
    title: "AWS Certified Developer",
    platform: "Udemy",
    year: "2025",
    image: "/SANANDNAS.jpg",
    link: "https://aws.amazon.com/verification/your-cert-id"
  },
  {
    title: "AWS Certified Developer",
    platform: "Udemy",
    year: "2025",
    image: "/SQL.jpg",
    link: "https://aws.amazon.com/verification/your-cert-id"
  },
  {
    title: "AWS Certified Developer",
    platform: "Udemy",
    year: "2025",
    image: "/WindowsServer.jpg",
    link: "https://aws.amazon.com/verification/your-cert-id"
  },
  {
    title: "AWS Certified Developer",
    platform: "Udemy",
    year: "2025",
    image: "/Python.jpg",
    link: "https://aws.amazon.com/verification/your-cert-id"
  },
  {
    title: "AWS Certified Developer",
    platform: "Udemy",
    year: "2025",
    image: "/ITIL.jpg",
    link: "https://aws.amazon.com/verification/your-cert-id"
  },
]

interface CertificateCardProps {
  title: string
  platform: string
  year: string
  image?: string
  link?: string
  index: number
}

function CertificateCard({ title, platform, year, image, link, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Certificate Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${title} certificate`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                target.parentElement.innerHTML = '<div class="text-primary"><svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div>';
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Award className="w-16 h-16 text-primary opacity-50" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium">{platform}</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            {year}
          </span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-8 h-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
        <Award className="relative w-full h-full text-primary" />
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Certificates</span> & Credentials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of certifications and courses I've completed to stay current with industry standards and best
            practices.
          </p>
        </motion.div>
      </section>

      {/* Certificate Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, idx) => (
            <CertificateCard key={idx} {...cert} index={idx} />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm committed to staying ahead of the curve. Always learning new technologies and improving my skills.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            <Link href={"/"}>View My Profile</Link>
          </button>
        </motion.div>
      </section>
    </main>
  )
}