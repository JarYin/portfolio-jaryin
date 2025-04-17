import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

export default function Resume() {
  const { t } = useTranslation();

  // Replace with your actual resume PDF URL
  const resumeUrl = t('resume.ResumeURL');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {t('resume.title')}
          </h1>
          <a
            href={resumeUrl}
            download
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} className="mr-2" />
            {t('resume.download')}
          </a>
        </div>

        {/* Add your resume content here */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <img src={t('resume.ResumeIMG')} alt="" />
        </div>
      </motion.div>
    </div>
  );
}