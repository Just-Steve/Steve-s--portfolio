'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120
      }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror" as const, // Add if needed
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center px-4 fixed top-0 left-0 right-0 bottom-0 z-50 py-20">
      <motion.div
        className="max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 number - FIXED: Removed animate prop when using variants */}
        <motion.div
          variants={pulseVariants}
          animate="animate" // This should reference the variant name, not a custom object
        >
          <h1 className="text-6xl font-bold text-black/80">
            404
          </h1>
        </motion.div>

        {/* Rest of your code remains the same */}
        <motion.h2 
          className="text-3xl font-bold mb-6 text-black"
          variants={itemVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p 
          className="text-xl mb-10 text-black/70"
          variants={itemVariants}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* Private repository explanation section */}
        <motion.div 
          className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-10"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-4 text-black"
            variants={itemVariants}
          >
            Private Repository Notice
          </motion.h3>
          
          <motion.p 
            className="mb-4 text-black/70 "
            variants={itemVariants}
          >
            If you reached this page by clicking a &apos;View Source Code&apos; link, 
            I&apos;m afraid the repository for this project is currently private.
          </motion.p>
          
          <motion.div 
            className="text-left max-w-md mx-auto"
            variants={itemVariants}
          >
            <h4 className="font-medium mb-2 text-black/80">Why private?</h4>
            <ul className="list-disc list-inside space-y-2 text-black/70">
              <li>Client confidentiality agreements</li>
              <li>Protection of proprietary code</li>
              <li>Project still in development</li>
              <li>Sensitive implementation details</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link href="/" passHref>
            <motion.button
              className="px-6 py-3 bg-black rounded-lg font-medium text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
}

export default Page;