import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      
      <div className="max-w-3xl text-center text-white">
        
      
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Learn With{" "}
          <span className="text-yellow-300">Udemy Clone </span>
        </motion.h1>

      
        <motion.p
          className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A modern EdTech platform where you can learn React, Node, JavaScript,
          and many more skills from industry-level instructors.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Study anytime, anywhere with high-quality video courses and practical
          industry projects.
        </motion.p>

      
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/login"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/courses"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
