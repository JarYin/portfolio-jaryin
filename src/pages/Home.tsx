import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Mail } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            {t('home.greeting')} <br/> <span className="text-blue-600">{t('home.name')}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 mb-8">
            {t('home.role')}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.description')}
          </p>  
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/JarYin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:panachon.0131@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}