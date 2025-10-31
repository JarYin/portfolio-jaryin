import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "lantong-website",
      description: t("projects.description-lantong"),
      image: "lantong.png",
      technologies: ["Nextjs", "JavaScript", "MongoDB"],
      github: "https://github.com/JarYin/lantong-website",
      live: "https://lantongshop.com/",
    },
    {
      title: "AI Resume",
      description: t("projects.description-ai-resume"),
      image: "/AiResume.png",
      technologies: [
        "Nextjs",
        "TypeScript",
        "DeepSeek",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Clerk",
        "Shadcn",
      ],
      github: "https://github.com/JarYin/nextjs15-ai-resume",
      live: "https://nextjs15-ai-resume.vercel.app/",
    },
    {
      title: "Intelligence Weather Station",
      description: t("projects.description-weather-station"),
      image: "/Intelligence Weather Station.png",
      technologies: [
        "Nextjs",
        "TypeScript",
        "PostgreSQL",
        "Flask",
        "Prisma",
        "Docker",
        "socket.io",
        "Randomforest Classifier",
      ],
      github: "https://github.com/JarYin/weathers-project",
      live: "http://itdev.cmtc.ac.th:3001/",
    },
    {
      title: "E-commerce App-clone (in progress)",
      description: t("projects.description-e-commerce"),
      image: "/E-commerce.png",
      technologies: [
        "Nextjs",
        "TypeScript",
        "PostgreSQL",
        "Supabases",
        "Prisma",
        "Honor",
        "Shadcn",
        "framer-motion",
        "Stripe",
      ],
      github: "https://github.com/JarYin/e-commerces",
      live: "https://e-commerces-ten.vercel.app/",
    },
    {
      title: "Weather Hub",
      description: t("projects.description-weather-hub"),
      image: "/WeatherHub.png",
      technologies: [
        "Nextjs",
        "TypeScript",
        "PostgreSQL",
        "Neon Serverless",
        "Prisma",
        "Express",
        "Shadcn",
        "Animation UI",
        "Recharts",
        "Open-Meteo API",

      ],
      github: "https://github.com/JarYin/WeatherHub",
      live: "https://weatherhub-frontend-oth9.onrender.com/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          {t("projects.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Open
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
