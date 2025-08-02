'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          My Project Work
        </motion.h2>

        {/* ✅ Dynamic Resume Manager Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 space-y-6 mb-12"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Dynamic Resume Manager App</h3>
            <p className="text-gray-300">
              A smart Android application built using Java and Firebase that helps users generate ATS-compliant resumes tailored to specific job listings. 
              The app fetches job listings using LinkedIn, Indeed, and JSearch APIs, recommends suitable jobs based on user skills, and even applies automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Java (Android Studio)</li>
                <li>• Firebase (Auth & Firestore)</li>
                <li>• REST API Integration</li>
                <li>• HTML to PDF Resume Generation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-teal-400 mb-2">Core Features</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Smart job matching based on profile</li>
                <li>• Dynamic resume generation</li>
                <li>• Auto-apply to jobs</li>
                <li>• Resume download & preview</li>
              </ul>
            </div>
          </div>

          <div className="text-sm text-gray-500 italic">
            Final year university project – Simplifies job search and resume creation.
          </div>
        </motion.div>
         {/* ✅ LeetMatrix Project - Completed */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
         className="bg-gray-900/30 border border-purple-700 rounded-lg p-8 space-y-4"
>
      <h3 className="text-2xl font-semibold text-purple-400">LeetMatrix App</h3>
      <p className="text-gray-300">
    🚀 A web app that visualizes LeetCode progress, difficulty-wise stats, ranking, and recent submissions using GraphQL and Node.js backend.
     </p>
      <div className="text-sm text-gray-400">
       Stack: React, Tailwind CSS, Node.js, GraphQL, Vercel
      </div>
       <div className="pt-2">
        <a
      href="https://leetmatrix.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
    >
      🔗 Visit LeetMatrix
    </a>
  </div>
</motion.div>

 

      </div>
    </section>
  );
}

