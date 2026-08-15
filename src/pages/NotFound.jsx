import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-bold text-7xl sm:text-9xl text-brand mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-brand-black/70 text-lg mb-8"
      >
        The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/"
          className="bg-brand text-white font-medium px-8 py-3 rounded-2xl inline-block hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
