import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TYPED_TEXT = 'Local Optimization. Simplified.';

const HeroSection = () => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, i + 1));
      i++;
      if (i === TYPED_TEXT.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    document.querySelector('.bg-gray-50').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/eye.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dominate Your<br />
            Local Market
          </motion.h1>
          
          {/* Typing animation for subtitle */}
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto font-semibold min-h-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-label="Local Optimization. Simplified."
          >
            {typed}
            <span className="inline-block w-2 animate-pulse align-middle">|</span>
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your Google My Business presence and skyrocket your local search rankings with our proven GMB optimization strategies.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://calendly.com/ranklyai/30min?month=2025-07"
              className="bg-primary-500 hover:bg-primary-600 text-black font-bold text-lg px-10 py-4 rounded-lg shadow-lg border-2 border-primary-500 transition-all duration-300 inline-block"
            >
              Get Started
            </a>
            
            <motion.button
              onClick={scrollToWhatWeDo}
              className="bg-transparent border-2 border-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-500 hover:text-black transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToWhatWeDo}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 