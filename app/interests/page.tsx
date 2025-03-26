"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import InteractiveShapes from "@/components/InteractiveShapes"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  imageSrc: string;
  takeaway: string;
}

interface VideoCardProps {
  title: string;
  url: string;
  thumbnail: string;
  thoughts: string;
}

const books: BookCardProps[] = [
  {
    title: "How to Not Die Alone",
    author: "Logan Ury",
    description: "The Surprising Science That Will Help You Find Love",
    imageSrc: "/books/HowToNotDieAlone.png",
    takeaway: "Understanding behavioral science and psychology in modern dating to make better relationship decisions."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for Focused Success in a Distracted World",
    imageSrc: "/books/DeepWork.png",
    takeaway: "The ability to focus without distraction on cognitively demanding tasks is becoming increasingly rare and valuable."
  },
  {
    title: "The 4-Hour Work Week",
    author: "Timothy Ferriss",
    description: "Escape 9-5, Live Anywhere, and Join the New Rich",
    imageSrc: "/books/The4HourWorkWeek.png",
    takeaway: "Work smarter, not harder - automate and delegate to focus on what truly matters."
  },
  {
    title: "Running on Empty",
    author: "Jonice Webb, PhD",
    description: "Overcome Your Childhood Emotional Neglect",
    imageSrc: "/books/RunningOnEmpty.png",
    takeaway: "Understanding and healing from childhood emotional neglect to build healthier relationships."
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    description: "A classic guide to understanding and mastering personal finance through parables",
    imageSrc: "/books/RichestManInBabylon.png",
    takeaway: "Timeless principles of saving, investing, and growing wealth that are still relevant today."
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    imageSrc: "/books/RichDadPoorDad.png",
    takeaway: "The importance of financial education and building assets rather than liabilities."
  },
  {
    title: "How to Become a Straight-A Student",
    author: "Cal Newport",
    description: "The Unconventional Strategies Real College Students Use to Score High While Studying Less",
    imageSrc: "/books/HowToBecomeStraightAStudent.png",
    takeaway: "Strategic studying and time management techniques that maximize learning efficiency."
  },
  {
    title: "Make It Stick",
    author: "Peter C. Brown, Henry L. Roediger III, Mark A. McDaniel",
    description: "The Science of Successful Learning",
    imageSrc: "/books/MakeItStick.png",
    takeaway: "Evidence-based techniques for more effective and durable learning."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Tiny Changes, Remarkable Results",
    imageSrc: "/books/AtomicHabits.png",
    takeaway: "Small, consistent changes compound into remarkable results over time."
  },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    description: "Jumpstart Your Income, Your Life, Your Success",
    imageSrc: "/books/CompoundEffect.png",
    takeaway: "Success is built through small, consistent actions that compound over time."
  },
  {
    title: "Transfer of Training in Sports",
    author: "Anatoliy P. Bondarchuk",
    description: "A scientific approach to sports training and skill transfer",
    imageSrc: "/books/TransferOfTraining.png",
    takeaway: "Understanding how different training methods transfer to actual performance in sports."
  }
]

const videos: VideoCardProps[] = [
  {
    title: "Nothing Except Everything",
    url: "https://www.youtube.com/watch?v=hif5eI5pBxo",
    thumbnail: "https://img.youtube.com/vi/hif5eI5pBxo/maxresdefault.jpg",
    thoughts: "A powerful perspective on finding balance and meaning in life. Demonstrates how simplicity and mindfulness can lead to profound personal growth."
  },
  {
    title: "WORLD'S FIRST IRON MAN IN ANTARCTICA ❄️ Project Iceman Film",
    url: "https://www.youtube.com/watch?v=ROQNfVc4BYI",
    thumbnail: "https://img.youtube.com/vi/ROQNfVc4BYI/maxresdefault.jpg",
    thoughts: "An extraordinary documentary showcasing human potential and resilience in extreme conditions. Demonstrates how pushing physical and mental boundaries can lead to groundbreaking achievements."
  },
  {
    title: "I Spent 24 Hours in Korea with No Money",
    url: "https://www.youtube.com/watch?v=WtJxVrr2F8M",
    thumbnail: "https://img.youtube.com/vi/WtJxVrr2F8M/maxresdefault.jpg",
    thoughts: "Reinforces the idea that strangers are just friends we haven't met yet and often the best experiences lie outside one's comfort zones."
  },
  {
    title: "Why You're Struggling To Find Love: things I wish I knew earlier",
    url: "https://www.youtube.com/watch?v=a2WXiwg36P8",
    thumbnail: "https://img.youtube.com/vi/a2WXiwg36P8/maxresdefault.jpg",
    thoughts: "Valuable lessons about self-awareness and authentic connection in relationships. Offers practical guidance for building healthy, lasting relationships."
  },
  {
    title: "I Survived On $0.01 For 30 Days",
    url: "https://www.youtube.com/watch?v=JEqi3VVLYkg",
    thumbnail: "https://img.youtube.com/vi/JEqi3VVLYkg/maxresdefault.jpg",
    thoughts: "Remarkable demonstration of resourcefulness and determination. Shows how creativity and persistence can overcome seemingly impossible challenges."
  },
  {
    title: "Why we should fall in love slowly...",
    url: "https://www.youtube.com/watch?v=3SNSZSaonnk",
    thumbnail: "https://img.youtube.com/vi/3SNSZSaonnk/maxresdefault.jpg",
    thoughts: "Thoughtful exploration of emotional intelligence and healthy relationship development. Important insights about building strong foundations in relationships."
  },
  {
    title: "We surprised Ryan Trahan with his own movie",
    url: "https://www.youtube.com/watch?v=wa9BVyGeE2o",
    thumbnail: "https://img.youtube.com/vi/wa9BVyGeE2o/maxresdefault.jpg",
    thoughts: "An inspiring example of how dedication and consistency can lead to extraordinary achievements. Shows the journey from small beginnings to significant milestones."
  },
  {
    title: "This Keeps 99% Single! Chris Williamson on The Dating Crisis",
    url: "https://www.youtube.com/watch?v=rR_14L2RI2A",
    thumbnail: "https://img.youtube.com/vi/rR_14L2RI2A/maxresdefault.jpg",
    thoughts: "Insightful analysis of modern dating challenges and practical solutions. Offers valuable perspective on building meaningful relationships in today's world."
  },
  {
    title: "Harvard Psychologist Reveals How THEY Keep You BROKE, Miserable, And Lazy",
    url: "https://www.youtube.com/watch?v=8IRDGuDqqX4",
    thumbnail: "https://img.youtube.com/vi/8IRDGuDqqX4/maxresdefault.jpg",
    thoughts: "Eye-opening discussion about the psychological barriers to success and how to overcome them. Essential insights for personal development and growth."
  },
  {
    title: "This Keeps 99% Broke & Depressed - Fix This NOW",
    url: "https://www.youtube.com/watch?v=3KfqTC7FLeM",
    thumbnail: "https://img.youtube.com/vi/3KfqTC7FLeM/maxresdefault.jpg",
    thoughts: "Crucial insights into breaking free from limiting beliefs and building a successful mindset. Practical strategies for overcoming common obstacles to success."
  },
  {
    title: "Navy Seal 'MrBallen' Reveals Near Death Experience, Rescue Missions, & Millionaire Mindset",
    url: "https://www.youtube.com/watch?v=pFQtRACnh_I",
    thumbnail: "https://img.youtube.com/vi/pFQtRACnh_I/maxresdefault.jpg",
    thoughts: "Fascinating exploration of resilience, courage, and the mindset required for extraordinary achievement. Shows how military discipline translates to business success."
  }
]

export default function InterestsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Books Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Reading List
              </h2>
              <p className="text-gray-300 mb-6">Here is a non-exhaustive list of books I've read</p>
              <Button 
                onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Skip to Videos
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 flex flex-col h-full"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded-xl bg-gray-800">
                    <Image
                      src={book.imageSrc}
                      alt={book.title}
                      fill
                      className="object-contain"
                      priority={index < 6}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                  <p className="text-purple-400 text-sm mb-3">by {book.author}</p>
                  <p className="text-gray-400 text-sm mb-3">{book.description}</p>
                  <p className="text-gray-300 text-sm italic border-t border-gray-800 pt-3 mt-auto">
                    <span className="font-semibold text-purple-400">Key Takeaway:</span> {book.takeaway}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section id="videos">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                YouTube Videos
              </h2>
              <p className="text-gray-300">Various YouTube videos with good cinematography, lessons, and insights</p>
              <p className="text-gray-400 mt-2">Sadly, I always forget to like YouTube videos, so here are some of the ones I remember, but lots have been lost.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 flex flex-col h-full"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded-xl bg-gray-800">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      priority={index < 6}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm italic border-t border-gray-800 pt-3 mt-auto">
                    <span className="font-semibold text-purple-400">Key Takeaway:</span> {video.thoughts}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                  >
                    Watch Video →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

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