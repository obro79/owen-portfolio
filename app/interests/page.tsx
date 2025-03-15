"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import InteractiveShapes from "@/components/InteractiveShapes"

export default function InterestsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              My Interests & Hobbies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond data and environmental work, here's what keeps me balanced and inspired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weightlifting Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Olympic Weightlifting
              </span>
              <span className="ml-2 text-white">🏋️‍♂️</span>
            </h2>
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
          </motion.div>
        </div>
      </section>

      {/* Reading Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Books That Shaped My Thinking
              </span>
              <span className="ml-2 text-white">📚</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Reading is my way of exploring new ideas and perspectives. Here are some books that have influenced me.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <BookCard 
                title="The Power of Now" 
                author="Eckhart Tolle" 
                description="A guide to spiritual enlightenment focused on living in the present moment."
                imageSrc="/book-power-of-now.jpg"
              />
              <BookCard 
                title="Think and Grow Rich" 
                author="Napoleon Hill" 
                description="Classic self-help book exploring the psychological power of thought and personal belief."
                imageSrc="/book-think-and-growrich.jpg"
              />
              <BookCard 
                title="The Intelligent Investor" 
                author="Benjamin Graham" 
                description="The definitive book on value investing, endorsed by Warren Buffett."
                imageSrc="/book-intelligent-investor.jpg"
              />
              <BookCard 
                title="Attached" 
                author="Amir Levine & Rachel Heller" 
                description="Explores how attachment theory can help form better relationships."
                imageSrc="/book-attached.png"
              />
              <BookCard 
                title="Nonviolent Communication" 
                author="Marshall B. Rosenberg" 
                description="A language of life and approach to communicating with empathy."
                imageSrc="/non-violent-communication.jpg"
              />
              <BookCard 
                title="The Alchemist" 
                author="Paulo Coelho"
                description="A philosophical novel about following your dreams and listening to your heart."
                imageSrc="/the-alchemist.jpg"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-300 mb-4">
                These books span personal growth, investing, relationships, and communication - reflecting my interests in holistic development and continuous learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Food Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Culinary Adventures
              </span>
              <span className="ml-2 text-white">🍽️</span>
            </h2>
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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto text-center">
          <Button 
            variant="outline" 
            className="border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-xl"
            onClick={() => window.history.back()}
          >
            Back to Main Page
          </Button>
        </div>
      </footer>
    </div>
  )
}

function BookCard({ title, author, description, imageSrc }: { 
  title: string; 
  author: string; 
  description: string; 
  imageSrc: string;
}) {
  return (
    <motion.div 
      className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 flex flex-col h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-[250px] relative mb-4 overflow-hidden rounded-xl bg-gray-800">
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
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
    </motion.div>
  )
} 