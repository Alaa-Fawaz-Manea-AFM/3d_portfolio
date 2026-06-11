"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-neon-purple/10 blur-[120px] rounded-full -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[120px] sm:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 select-none leading-none"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-4 max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Lost in Cyberspace?
        </h2>
        <p className="text-secondary text-[14px] sm:text-[16px] leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-bold text-white rounded-xl group bg-gradient-to-br from-purple-600 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 shadow-[0_0_15px_rgba(145,94,255,0.3)] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] transition-all duration-300"
        >
          <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-primary rounded-xl group-hover:bg-opacity-0 font-mono tracking-wider">
            &lt; Return To Mission /&gt;
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
