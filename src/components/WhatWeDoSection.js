import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';

const WhatWeDoSection = () => {
  const features = [
    {
      icon: Target,
      title: "Focused Approach",
      description: "We specialize exclusively in Google My Business optimization, ensuring your local business gets maximum visibility."
    },
    {
      icon: Zap,
      title: "Automated Solutions",
      description: "Our streamlined processes and automation tools make optimization simple and efficient for your business."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "See measurable improvements in your local search rankings and customer engagement within weeks."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.png" 
            alt="Rankly360 Logo" 
            className="h-20 w-auto object-contain rounded-xl shadow-md"
            style={{maxWidth: '220px'}}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-primary-600">Rankly360</span>, we're dedicated to simplifying local business growth through 
            comprehensive Google My Business optimization. Our mission is to help local businesses 
            dominate their local search results and connect with more customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Google My Business Optimization?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Google My Business is the foundation of local SEO success. With over 80% of consumers 
              searching for local businesses online, having an optimized GMB profile is crucial for 
              attracting customers and driving foot traffic to your business. Our comprehensive approach 
              ensures your business stands out in local search results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection; 