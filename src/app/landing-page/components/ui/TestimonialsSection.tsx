// components/TestimonialsSection.tsx

'use client'

import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const testimonials = [
  {
    name: "Jessica R.",
    text: "Dr. Smith and his team are amazing. I used to be afraid of the dentist, but now I look forward to my visits!",
  },
  {
    name: "Michael T.",
    text: "The office is modern and spotless, and the care is exceptional. Highly recommend to anyone!",
  },
  {
    name: "Sandra W.",
    text: "They made my kids feel so comfortable. It’s a perfect place for families!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-600 mb-12"
        >
          What Our Patients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md text-left relative"
            >
              <Quote className="absolute top-4 right-4 text-gray-600 opacity-20" size={28} />
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-gray-600 font-semibold">– {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
