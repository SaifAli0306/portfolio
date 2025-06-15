'use client';

import { motion } from 'framer-motion';

export default function SkillsEducationSection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Skills & Education
        </motion.h2>

        {/* Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* 🔹 Left: Image */}
          <div className="w-full">
            <img
              src="/code.jpg"
              alt="Laptop"
              className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-800"
            />
          </div>

          {/* 🔹 Right: Skills & Education Box */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 space-y-10 shadow-xl">
            {/* 🌟 Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Java',
                  'Firebase', 'ASP.NET', 'C#', 'MVC', 'Git', 'REST APIs',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-700/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 🎓 Education Section */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                <li>
                  <strong>Bachelor of Science in Information Technology</strong><br />
                         University of Gujrat
                </li>
                <li>Duration: <span className="text-gray-400">2021 – 2025</span></li>
                <li>Major Courses: Web & App Dev, Databases, Networks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
