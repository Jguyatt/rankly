import React from 'react';
import { motion } from 'framer-motion';
import { Building, Stethoscope, Gavel } from 'lucide-react';

const caseStudies = [
  {
    title: 'Construction Company',
    icon: Building,
    summary: 'How a local construction company increased project leads and phone calls with Rankly360\'s GMB optimization.',
    pdf: '/Construction Company.pdf',
  },
  {
    title: 'Medical Imaging Center',
    icon: Stethoscope,
    summary: 'See how a medical imaging center boosted appointment bookings and patient engagement through local SEO.',
    pdf: '/Medical Imaging Center.pdf',
  },
  {
    title: 'Law Firm',
    icon: Gavel,
    summary: 'Discover how a law firm improved online visibility and client inquiries with our Google My Business strategies.',
    pdf: '/Law Firm.pdf',
  },
];

const CaseStudySection = () => (
  <section id="case-study" className="section-padding bg-gray-50">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          📈 Real Results: Client Case Studies
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore how Rankly360 delivers measurable growth for businesses in different industries.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 mb-4">
              <cs.icon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{cs.title}</h3>
            <p className="text-gray-700 mb-6">{cs.summary}</p>
            <a
              href={cs.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
            >
              View Case Study
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudySection; 