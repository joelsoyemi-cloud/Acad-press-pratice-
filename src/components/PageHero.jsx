import { motion } from "framer-motion";

export default function PageHero({ title, image }) {
  return (
    <section className="relative h-70 mt-8 flex items-end overflow-hidden">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand/55" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative font-bold text-4xl sm:text-5xl text-white px-6 sm:px-16 pb-10"
      >
        {title}
      </motion.h1>
    </section>
  );
}
