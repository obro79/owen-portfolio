"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import Image from "next/image"

// Add type interfaces at the top of the file, right after the imports
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  imageSrc: string;
  takeaway: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! I'm Owen Fisher
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Mathematician | Quantitative Analyst | Software Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-xl"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" />}
                title="Data Science"
                description="Applying advanced statistical methods and machine learning algorithms to extract valuable insights from complex datasets and solve challenging problems."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="Quantitative Finance"
                description="Developing sophisticated models for asset pricing, portfolio optimization, and risk management using stochastic calculus and computational methods."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Algorithm Development"
                description="Creating efficient, high-performance algorithms and computational solutions for complex mathematical and financial problems."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Machine Learning"
                description="Building predictive models and implementing deep learning techniques for pattern recognition, time-series forecasting, and automated decision systems."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title="Financial Modeling"
                description="Constructing robust statistical models for pricing derivatives, analyzing market trends, and optimizing investment strategies."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Mathematical Research"
                description="Exploring theoretical concepts in mathematics and their practical applications in finance, cryptography, and computational problems."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Fisheries Monitoring Dashboard"
                description="Interactive visualization tool for tracking fish populations and monitoring environmental factors affecting marine ecosystems."
                tags={["Python", "Dash", "Data Visualization", "GIS"]}
                image="/placeholder.jpg"
              />
              <ProjectCard
                title="Environmental Data Pipeline"
                description="Automated data processing system for collecting, cleaning, and analyzing environmental monitoring data from multiple sources."
                tags={["Python", "SQL", "ETL", "Automation"]}
                image="/placeholder.jpg"
              />
              <ProjectCard
                title="Statistical Analysis Framework"
                description="Framework for applying statistical methods to environmental datasets, with built-in reporting and visualization capabilities."
                tags={["R", "Statistics", "Data Analysis"]}
                image="/placeholder.jpg"
              />
              <ProjectCard
                title="Coastal Resource Management Tool"
                description="Decision support tool for sustainable management of coastal resources based on historical data and predictive modeling."
                tags={["Python", "Machine Learning", "GIS", "Sustainability"]}
                image="/placeholder.jpg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Interests & Hobbies
              </span>
              <span className="ml-2 text-white">🎯</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Beyond the data and code, here's what keeps me balanced and inspired.
            </p>

            {/* Weightlifting Section */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Olympic Weightlifting
                </span>
                <span className="ml-2 text-white">🏋️‍♂️</span>
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
                I'm passionate about Olympic weightlifting. It's not just a physical challenge but a mental one - requiring focus, dedication, and technical precision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <motion.div 
                  className="rounded-xl overflow-hidden h-[350px] relative bg-gray-800"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/weightlifting.jpg" 
                    alt="Olympic weightlifting snatch" 
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.div 
                  className="rounded-xl overflow-hidden h-[350px] relative bg-gray-800"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/weights-3.jpg" 
                    alt="Olympic weightlifting jerk" 
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.div 
                  className="rounded-xl overflow-hidden h-[350px] relative bg-gray-800"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/weights-4.jpg" 
                    alt="Olympic weightlifting session" 
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-gray-300 mb-4">
                  What I love about weightlifting is the continuous pursuit of technical mastery and physical development. The sport combines strength, speed, flexibility, and precision in a unique way.
                </p>
              </div>
            </div>

            {/* Reading Section */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Books That Shaped My Thinking
                </span>
                <span className="ml-2 text-white">📚</span>
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
                Reading is my way of exploring new ideas and perspectives. Here are some books that have influenced me. Here is a combination of my recent reads as well as my most impactful reads.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <BookCard 
                  title="The Power of Now" 
                  author="Eckhart Tolle" 
                  description="A guide to spiritual enlightenment focused on living in the present moment."
                  imageSrc="/book-power-of-now.jpg"
                  takeaway="This book taught me to appreciate the present moment and how mindfulness can reduce stress and anxiety."
                />
                <BookCard 
                  title="Think and Grow Rich" 
                  author="Napoleon Hill" 
                  description="Classic self-help book exploring the psychological power of thought and personal belief."
                  imageSrc="/book-think-and-growrich.jpg"
                  takeaway="Hill's principles of persistence and positive thinking have directly influenced my approach to long-term goals."
                />
                <BookCard 
                  title="The Intelligent Investor" 
                  author="Benjamin Graham" 
                  description="The definitive book on value investing, endorsed by Warren Buffett."
                  imageSrc="/book-intelligent-investor.jpg"
                  takeaway="Graham's approach to value investing has formed the foundation of my investment philosophy and risk management."
                />
                <BookCard 
                  title="Attached" 
                  author="Amir Levine & Rachel Heller" 
                  description="Explores how attachment theory can help form better relationships."
                  imageSrc="/book-attached.png"
                  takeaway="Understanding attachment styles has given me valuable insights into relationship dynamics and communication patterns."
                />
                <BookCard 
                  title="Nonviolent Communication" 
                  author="Marshall B. Rosenberg" 
                  description="A language of life and approach to communicating with empathy."
                  imageSrc="/non-violent-communication.jpg"
                  takeaway="Rosenberg's framework has transformed how I express needs and listen empathetically in both personal and professional settings."
                />
                <BookCard 
                  title="The Alchemist" 
                  author="Paulo Coelho"
                  description="A philosophical novel about following your dreams and listening to your heart."
                  imageSrc="/the-alchemist.jpg"
                  takeaway="This story reinforced my belief in pursuing personal goals while staying attentive to the journey's lessons along the way."
                />
              </div>
            </div>
            
            {/* Food Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Culinary Adventures
                </span>
                <span className="ml-2 text-white">🍽️</span>
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
                I enjoy both cooking and exploring new foods. Here's a glimpse of my culinary interests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <motion.div 
                  className="rounded-xl overflow-hidden h-[350px] relative bg-gray-800"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/cinnamon-buns.jpg" 
                    alt="Homemade cinnamon rolls" 
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-400">Baking & Cooking</h3>
                  <p className="text-gray-300">
                    From homemade cinnamon rolls to exploring local cafes, I enjoy the creative and scientific aspects of cooking and baking. It's a perfect balance to my technical work - combining precision with creativity.
                  </p>
                  <p className="text-gray-300">
                    I'm always on the lookout for new recipes to try or local food spots that offer unique culinary experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Connect With Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-xl bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-xl bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-xl bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.linkedin.com/in/fisherowen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-pink-600 hover:bg-pink-700"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/obro79" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/fisherowen" label="LinkedIn" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Owen Fisher. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:owenfisher46@gmail.com" className="text-purple-400 hover:text-purple-300">
        owenfisher46@gmail.com
      </a>
    </div>
  )
}

function BookCard({ title, author, description, imageSrc, takeaway }: BookCardProps) {
  return (
    <motion.div 
      className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 flex flex-col h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded-xl bg-gray-800">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-purple-400 text-sm mb-3">by {author}</p>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <p className="text-gray-300 text-sm italic border-t border-gray-800 pt-3 mt-auto">{takeaway}</p>
    </motion.div>
  )
}

