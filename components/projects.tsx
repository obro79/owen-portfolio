export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mt-4 flex justify-between items-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
} 