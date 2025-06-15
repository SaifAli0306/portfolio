'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dynamic Resume Manager App',
    description:
      'Smart Android app that builds ATS-compliant resumes, matches jobs using skills and preferences, and auto-applies using APIs. Built with Java, Firebase, and REST APIs.',
    github: '',
    live: '',
  },
  {
    title: 'Coming Soon: Job Portal Web App',
    description: 'A full-featured MERN/ASP.NET job portal with user dashboard, filtering, resume parser, and job matching.',
    github: '',
    live: '',
  },
  {
    title: 'Coming Soon: Portfolio CMS',
    description: 'A content management system to build and customize personal portfolios easily with built-in resume builder.',
    github: '',
    live: '',
  },
];

export default function GitHubProjectsSection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Projects Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg space-y-4"
            >
              <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              {project.github === '' && (
                <span className="text-xs text-gray-500 italic">Private project – source code not available</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

