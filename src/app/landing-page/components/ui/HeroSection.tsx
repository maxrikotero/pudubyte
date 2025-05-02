'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-100 opacity-50 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-indigo-100 opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-purple-100 opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Next-Gen</span> Tech Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We deliver high-quality web and mobile development solutions that help US businesses scale efficiently with our dedicated offshore teams.
            </p>
  
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl opacity-70 blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
  src="/images/pududashboard.png"
  alt="puduByte development solutions dashboard"
  width={600}
  height={400}
  className="w-full h-auto"
  quality={85} // Adjust quality (1-100)
/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};