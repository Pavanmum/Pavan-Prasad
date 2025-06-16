import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pavan Kumar Ramanand Prasad - Full Stack Developer | MERN Stack Expert | Mumbai",
  description:
    "Experienced Full Stack Developer specializing in React.js, Node.js, MongoDB, and Express.js. 2.3+ years of experience building scalable web applications in Mumbai, India. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB Expert",
    "Express.js",
    "Web Developer Mumbai",
    "Frontend Developer",
    "Backend Developer",
    "API Development",
    "Database Design",
    "Pavan Kumar",
    "Mumbai Developer",
    "India Full Stack Developer",
  ],
  authors: [{ name: "Pavan Kumar Ramanand Prasad" }],
  creator: "Pavan Kumar Ramanand Prasad",
  publisher: "Pavan Kumar Ramanand Prasad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pavankumar-portfolio.vercel.app",
    title: "Pavan Kumar - Full Stack Developer | MERN Stack Expert",
    description:
      "Experienced Full Stack Developer with 2.3+ years in MERN stack. Specialized in building scalable web applications with React.js, Node.js, and modern JavaScript technologies.",
    siteName: "Pavan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kumar - Full Stack Developer",
    description:
      "MERN Stack Developer with 2.3+ years experience. Building scalable web applications with React.js, Node.js, MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pavankumar-portfolio.vercel.app" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
