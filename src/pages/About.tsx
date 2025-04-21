import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Layout } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    {
      category: t("about.languages"),
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "PostgreSQL",
        "PHP",
        "HTML",
        "CSS",
      ],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: t("about.frameworks"),
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Angular",
        "ASP.NET",
        "Tailwind CSS",
      ],
      icon: <Layout className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t("about.title")}
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            {t("about.description")}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t("about.skills")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
