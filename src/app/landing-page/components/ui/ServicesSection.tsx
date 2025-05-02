'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Cpu, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like Next.js, React, and Node.js for seamless user experiences.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps using React Native and Flutter that perform beautifully on both iOS and Android.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Full-Stack Solutions",
    description: "End-to-end development services from frontend to backend with scalable architecture.",
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Cloud Services",
    description: "Cloud-native application development and migration to AWS, Azure, or Google Cloud.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your applications running smoothly.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions tailored to meet your specific business requirements and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};