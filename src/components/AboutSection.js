import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Rankly360
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a young entrepreneur from Toronto, I started Rankly360 with a simple belief: local businesses deserve to be found online just as easily as big corporations. What began as my vision has grown into a passionate team effort.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to democratize local SEO by making Google My Business optimization accessible, affordable, and effective for businesses of all sizes. We truly believe that every local business has the potential to thrive in their local market with the right digital strategy. Every success story is a team win, and we're grateful to help so many businesses grow.
              <br /><br />
              <span className="font-semibold text-primary-700">— Jacob Guyatt, Founder</span>
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Local Focus</h4>
                  <p className="text-gray-600">Born and raised in Toronto, we understand local business challenges</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mission-Driven</h4>
                  <p className="text-gray-600">Committed to helping local businesses grow and succeed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Results-Oriented</h4>
                  <p className="text-gray-600">Focused on delivering measurable improvements in local search rankings</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Rankly360?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialized Expertise</h4>
                    <p className="text-gray-600">We focus exclusively on GMB optimization, ensuring deep expertise in this critical area.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                    <p className="text-gray-600">Our clients see significant improvements in local search rankings and customer engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">We provide continuous monitoring and optimization to maintain your competitive edge.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <p className="text-primary-800 font-medium italic">
                  "Our goal is simple: help local businesses get found by the customers who need them most."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 