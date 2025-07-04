import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  MessageSquare, 
  FileText, 
  Target,
  TrendingUp,
  Zap,
  Users,
  Settings,
  Monitor,
  BarChart
} from 'lucide-react';
import ServiceStatsVisual from './ServiceStatsVisual';

const ServicesSection = () => {
  const gbpServices = [
    {
      icon: Search,
      title: "AI-powered weekly profile optimization",
      description: "Advanced AI technology continuously optimizes your Google Business Profile for maximum local visibility and performance."
    },
    {
      icon: MapPin,
      title: "Category, keyword & info tuning",
      description: "Strategic optimization of business categories, keywords, and information to improve search rankings and customer discovery."
    },
    {
      icon: Calendar,
      title: "High-quality photo & media updates",
      description: "Professional photo and media content updates to showcase your business and attract more customers."
    },
    {
      icon: MessageSquare,
      title: "Google Posts (offers, events, updates)",
      description: "Regular, engaging posts featuring offers, events, and business updates to keep customers informed and engaged."
    },
    {
      icon: Users,
      title: "Q&A section management",
      description: "Proactive management of your Q&A section with relevant questions and helpful answers to improve customer engagement."
    },
    {
      icon: Star,
      title: "Review monitoring & response strategy",
      description: "Comprehensive review monitoring and strategic response management to maintain and improve your online reputation."
    },
    {
      icon: Monitor,
      title: "Local ranking tracker and visibility reports",
      description: "Detailed tracking of your local search rankings and comprehensive visibility reports to measure success."
    }
  ];

  const adsServices = [
    {
      icon: Target,
      title: "Full campaign setup and launch",
      description: "Complete Google Ads campaign setup and launch with strategic targeting and optimization from day one."
    },
    {
      icon: FileText,
      title: "Targeted ad copy and creative",
      description: "Compelling, targeted ad copy and creative assets designed to convert your ideal customers."
    },
    {
      icon: Settings,
      title: "Smart bidding & daily budget management",
      description: "Intelligent bidding strategies and daily budget management to maximize ROI and campaign performance."
    },
    {
      icon: TrendingUp,
      title: "Campaign optimization & A/B testing",
      description: "Continuous campaign optimization and A/B testing to improve performance and drive better results."
    },
    {
      icon: Zap,
      title: "Lead form, callout & location ad extensions",
      description: "Strategic use of ad extensions including lead forms, callouts, and location extensions to increase engagement."
    },
    {
      icon: BarChart,
      title: "Conversion tracking and ROI reporting",
      description: "Comprehensive conversion tracking and detailed ROI reporting to measure campaign success and optimize performance."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <ServiceStatsVisual />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ✅ What's Included in the Google Booster Kit
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* GBP Services Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Google Business Profile Optimization (GBP Ranker Pro)</h3>
            </div>
            <div className="space-y-6">
              {gbpServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ads Services Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Google Ads Management (Google Ads Pro)</h3>
            </div>
            <div className="space-y-6">
              {adsServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Dominate Local Search?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get started with our comprehensive Google Booster Kit and see results within weeks.
            </p>
            <a href="https://calendly.com/ranklyai/30min?month=2025-07" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 