"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  Download,
  ArrowRight,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 const downloadResume = () => {
  
  const fileName = 'PavanKumarRamanandPrasadResume.pdf'; 
  const fileUrl = `${process.env.PUBLIC_URL || ''}/${fileName}`;
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', fileName); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const skills = {
    frontend: [
      { name: "React.js", level: 90, experience: "2+ years" },
      { name: "Next.js", level: 85, experience: "1.5+ years" },
      { name: "JavaScript", level: 88, experience: "2+ years" },
      { name: "TypeScript", level: 75, experience: "1+ year" },
      { name: "Tailwind CSS", level: 80, experience: "1.5+ years" },
      { name: "Material-UI", level: 85, experience: "2+ years" },
    ],
    backend: [
      { name: "Node.js", level: 88, experience: "2+ years" },
      { name: "Express.js", level: 85, experience: "2+ years" },
      { name: "REST APIs", level: 90, experience: "2+ years" },
      { name: "GraphQL", level: 70, experience: "1+ year" },
      { name: "Socket.IO", level: 75, experience: "1+ year" },
    ],
    database: [
      { name: "MongoDB", level: 85, experience: "2+ years" },
      { name: "PostgreSQL", level: 80, experience: "1.5+ years" },
      { name: "MySQL", level: 75, experience: "1+ year" },
      { name: "Redis", level: 70, experience: "1+ year" },
    ],
    tools: [
      { name: "Git/GitHub", level: 88, experience: "2+ years" },
      { name: "Docker", level: 75, experience: "1+ year" },
      { name: "NGINX", level: 70, experience: "1+ year" },
      { name: "Cloudflare", level: 75, experience: "1+ year" },
    ],
  }

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CHANGE Networks",
      location: "Ghansoli, Mumbai",
      period: "2024 - Present",
      type: "Full-time",
      achievements: [
        "Developed global email campaign system with Next.js and Node.js supporting multiple time zones",
        "Optimized API performance by 40%, enhancing data processing speed and scalability",
        "Deployed applications using NGINX with robust CI/CD pipeline for automated testing",
        "Implemented role-based access control (RBAC) for Admin and Super Admin permissions",
        "Leveraged MongoDB and PostgreSQL for optimal data organization and retrieval",
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "PostgreSQL", "NGINX", "CI/CD"],
    },
    {
      title: "Full Stack Developer",
      company: "Nextgen Techno Ventures Private Limited",
      location: "Mumbai, India",
      period: "Dec 2023 - May 2024",
      type: "Full-time",
      achievements: [
        "Engineered Admin and Super Admin dashboards with key management functionalities",
        "Enabled Excel file uploads via APIs with direct database insertion and validation",
        "Integrated complex Graph APIs for dynamic, real-time data visualizations",
        "Built multiple dashboard pages with advanced filters and interactive graphs",
        "Handled complex database operations seamlessly with React.js and Node.js",
      ],
      technologies: ["React.js", "Node.js", "Graph APIs", "Excel Integration", "Dashboard Development"],
    },
    {
      title: "MERN Stack Intern",
      company: "Placementium",
      location: "Ahmedabad, India",
      period: "Jun 2023 - Nov 2023",
      type: "Internship",
      achievements: [
        "Constructed scalable architecture using Next.js with SSR and SSG for optimal performance",
        "Built responsive, user-friendly interfaces ensuring seamless cross-device functionality",
        "Integrated Ant Design UI components for enhanced visual appeal and accessibility",
        "Improved SEO performance and achieved fast page load times",
      ],
      technologies: ["Next.js", "SSR", "SSG", "Ant Design", "Responsive Design"],
    },
  ]

  const projects = [
    {
      title: "Online Test Platform",
      description:
        "Advanced online test platform with AI-powered student monitoring, intuitive dashboards, and automated result analysis for educational institutions.",
      technologies: ["React.js", "Node.js", "MongoDB", "AI Integration", "Real-time Monitoring"],
      features: [
        "AI-powered student monitoring system",
        "Intuitive admin and teacher dashboards",
        "Automated result analysis and reporting",
        "Real-time test supervision",
        "Scalable architecture for multiple institutions",
      ],
      status: "In Development",
      timeline: "April 2024 - Present",
    },
    {
      title: "Fiverr Clone Platform",
      description:
        "Full-featured freelancing platform with gig management, real-time chat, secure payments, and comprehensive user management system.",
      technologies: ["MERN Stack", "Stripe", "Cloudinary", "WhatsApp API", "Real-time Chat"],
      features: [
        "Gig purchasing and listing system",
        "Real-time chat functionality",
        "Secure payment processing with Stripe",
        "Image upload with Cloudinary",
        "WhatsApp API integration for notifications",
        "MongoDB Atlas for scalable database management",
      ],
      status: "Completed",
      timeline: "2023",
    },
    {
      title: "E-commerce Frontend",
      description:
        "Comprehensive e-commerce frontend with multiple pages, dynamic components, and seamless user experience for online shopping.",
      technologies: ["React.js", "Bootstrap", "HTML5", "CSS3", "Component Architecture"],
      features: [
        "Product comparison functionality",
        "Admin management panel",
        "Order tracking system",
        "Dynamic product pages",
        "Secure payment integration",
        "Responsive design across all devices",
      ],
      status: "Completed",
      timeline: "2023",
    },
    {
      title: "Work Cycle Application",
      description:
        "MERN stack platform helping students manage part-time roles and track earnings alongside their academic studies.",
      technologies: ["MERN Stack", "Student Management", "Earnings Tracking", "Role Management"],
      features: [
        "Part-time job management",
        "Earnings tracking and analytics",
        "Student profile management",
        "Work schedule optimization",
        "Academic integration features",
      ],
      status: "Completed",
      timeline: "2023",
    },
  ]

  const achievements = [
    {
      title: "40% Performance Optimization",
      description: "Reduced API response times and improved system scalability",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "25% User Engagement Boost",
      description: "Enhanced user experience through responsive UI design",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "40% Bug Reduction",
      description: "Implemented automated testing pipelines for production quality",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "2.3+ Years Experience",
      description: "Progressive growth from intern to full-stack developer",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900">Pavan Kumar Ramanand Prasad</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Download className="w-4 h-4 mr-2" 
             
              />
              <div
              onClick={downloadResume}
              >
Resume
              </div>
              
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4">
                Pavan Kumar Ramanand Prasad
                <span className="block text-3xl md:text-4xl text-blue-600 mt-2">Full Stack Developer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate MERN Stack Developer with 2.3+ years of experience building scalable web applications.
                Specialized in React.js, Node.js, and modern JavaScript technologies with a proven track record of
                optimizing performance and enhancing user experiences.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Mumbai, India
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available for Opportunities
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Code className="w-4 h-4 mr-2" />
                  MERN Stack Expert
                </Badge>
              </div>

              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>

              <div className="flex justify-center gap-6 mt-8">
                <a
                  href="tel:+919987018754"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9987018754
                </a>
                <a
                  href="mailto:pavanprasad035@gmail.com"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  pavanprasad035@gmail.com
                </a>
                <a
                  href="https://github.com/pavanmum"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://in.linkedin.com/in/pavan-kumar-ramanand-prasad-726a62246"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated full-stack developer with a passion for creating innovative web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer with over 2.3 years of hands-on experience in building dynamic web
                applications using the MERN stack. My journey began with a 7-month internship and has evolved into a
                successful career focused on creating scalable, user-centric solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in JavaScript, React.js, Node.js, MongoDB, and Express.js, with a strong foundation in
                modern web development practices. I'm particularly skilled at optimizing application performance,
                implementing robust APIs, and creating intuitive user interfaces that drive engagement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working at CHANGE Networks, I've successfully developed global email campaign systems,
                optimized API performance by 40%, and implemented role-based access control systems. I thrive in
                collaborative, fast-paced environments and am always eager to take on new challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">{achievement.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the full development stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 capitalize">
                    {category === "frontend" && <Globe className="w-5 h-5 text-blue-600" />}
                    {category === "backend" && <Server className="w-5 h-5 text-green-600" />}
                    {category === "database" && <Database className="w-5 h-5 text-purple-600" />}
                    {category === "tools" && <Code className="w-5 h-5 text-orange-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.experience}</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progressive career growth with measurable impact and technical excellence
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {exp.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {exp.type}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative solutions and technical expertise across diverse domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription className="text-lg leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.timeline}
                    </span>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how I can help you build amazing web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:pavanprasad035@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">pavanprasad035@gmail.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+919987018754"
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">+91 9987018754</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-lg border">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-gray-600">Sion, Mumbai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect Online</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pavanmum"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/pavan-kumar-ramanand-prasad-726a62246"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Have a project in mind? Let's discuss how we can work together.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Project discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Pavan Kumar Ramanand Prasad. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">Full Stack Developer | MERN Stack Expert | Mumbai, India</p>
        </div>
      </footer>
    </div>
  )
}
