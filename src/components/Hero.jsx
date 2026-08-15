import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?fm=jpg&q=80&w=1600",
    title: "Precision, Security, and Confidentiality in Every Print",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610891015188-5369212db097?fm=jpg&q=80&w=1600",
    title: "Delivering Quality, Value and Support",
  },
  {
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?fm=jpg&q=80&w=1600",
    title: "Secure and Reliable Printing for Modern Businesses",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504941319307-771ebfa02a51?fm=jpg&q=80&w=1600",
    title: "Specialised Printing Solutions You Can Trust",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-dark/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob [animation-delay:4s] z-10 pointer-events-none" />

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-6 sm:px-10 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8"
          >
            {slides[index].title}
          </motion.h1>
        </AnimatePresence>

        <motion.a
          href="#quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#fff",
            color: "#982836",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 border-2 border-white text-white font-medium px-8 py-4 rounded-2xl w-fit shadow-[0_0_20px_rgba(0,0,0,0.25)] transition-colors"
        >
          Request a Quote
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-2 rounded-full bg-white/40 overflow-hidden transition-all"
            style={{ width: i === index ? 32 : 8 }}
          >
            {i === index && (
              <motion.div
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-y-0 left-0 bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
