"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Fisheries and Oceans Canada",
    role: "Data Technician",
    period: "2022 - Present",
    location: "Victoria, BC",
    type: "Full-time",
    logo: "/placeholder-logo.svg",
    skills: ["Data Management", "Statistical Analysis", "Monitoring"],
  },
  {
    id: 2,
    company: "Environmental Research Institute",
    role: "Research Assistant",
    period: "2020 - 2022",
    location: "Victoria, BC",
    type: "Full-time",
    logo: "/placeholder-logo.svg",
    skills: ["Data Collection", "Environmental Monitoring", "Research"],
  },
]

const skillsData = {
  "Data Skills": [
    { name: "Data Management", proficiency: 90 },
    { name: "Statistical Analysis", proficiency: 85 },
    { name: "Data Visualization", proficiency: 80 },
    { name: "Database Design", proficiency: 75 },
    { name: "GIS", proficiency: 70 },
  ],
  "Programming": [
    { name: "Python", proficiency: 85 },
    { name: "R", proficiency: 80 },
    { name: "SQL", proficiency: 75 },
    { name: "JavaScript", proficiency: 60 },
  ],
  "Financial & Math": [
    { name: "Quantitative Analysis", proficiency: 90 },
    { name: "Algorithmic Trading", proficiency: 85 },
    { name: "Risk Modeling", proficiency: 80 },
    { name: "Mathematical Optimization", proficiency: 85 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              About Me
            </span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/front-page.jpg"
                  alt="Owen Fisher"
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                <p className="text-xl mb-4">
                  I'm passionate about solving complex problems at the intersection of mathematics, finance, and technology. Whether it's quantitative finance, algorithmic trading, or mathematical modeling, I enjoy applying rigorous analytical thinking and coding to tackle real-world challenges.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3 text-purple-400">What I Do</h3>
                
                <p className="mb-2">
                  <span className="text-purple-400 font-bold">💡 Data-Driven Problem Solving</span> – I love working with large datasets to uncover patterns, optimize decision-making, and develop predictive models.
                </p>
                
                <p className="mb-2">
                  <span className="text-purple-400 font-bold">📊 Quantitative Finance & Trading</span> – I'm particularly interested in market dynamics, portfolio optimization, and risk management. I've built tools leveraging Black-Scholes, Monte Carlo simulations, and machine learning to analyze financial markets.
                </p>
                
                <p className="mb-2">
                  <span className="text-purple-400 font-bold">💻 Software & Algorithm Development</span> – I code in Python, C++, and Java, implementing efficient algorithms and data structures to streamline computations and enhance performance.
                </p>
                
                <p className="mb-4">
                  <span className="text-purple-400 font-bold">🔢 Mathematical Modeling</span> – I enjoy translating complex problems into mathematical frameworks using probability, statistics, and optimization techniques to find innovative solutions.
                </p>
                
                <p>
                  Feel free to check out my projects or reach out if you're interested in discussing quantitative finance, coding, or problem-solving!
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string;
  proficiency: number;
}

function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}

