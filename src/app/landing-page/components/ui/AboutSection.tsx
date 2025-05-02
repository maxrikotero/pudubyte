'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const AboutSection = () => {
  const features = [
    "Dedicated development teams",
    "Cost-effective solutions",
    "US timezone overlap",
    "Agile development process",
    "Transparent communication",
    "Scalable infrastructure"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Outsourcing Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We bridge the gap between quality and affordability, providing US businesses with top-tier development talent at competitive rates.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-2xl opacity-70 blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
        src="/images/team-collaboration.png" // Your PNG file path
        alt="puduByte development team working together"
        width={500}
        height={350}
        className="w-full h-auto object-cover"
        quality={85} // Optimizes PNG compression
      />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Delivering Excellence Since 2023
            </h3>
            <p className="text-gray-600 mb-6">
              Our boutique outsourcing firm specializes in creating custom web and mobile solutions that drive business growth. We combine technical expertise with deep understanding of US market needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};