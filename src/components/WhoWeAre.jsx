import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?fm=jpg&q=80&w=900",
  "https://images.unsplash.com/photo-1510511336377-1a9caa095849?fm=jpg&q=80&w=900",
  "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?fm=jpg&q=80&w=900", // placeholder until i get image address for the 3rd one
];
export default function WhoWeAre() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6">
          About Us
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-black mb-6">
          Who We <span className="text-brand">Are</span>
        </h2>
        <p className="text-brand-black/80 text-lg leading-relaxed mb-8">
          Academy Press Specialized Print Services Limited is a printing
          solutions company committed to delivering high-quality and reliable
          print services for businesses and organizations. We help bring ideas
          to life through efficient, and well-executed printing solutions that
          support our clients' communication and branding needs.
        </p>
        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(152,40,54,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-2xl"
        >
          Learn More
        </motion.a>
      </motion.div>

      {/* Image collage */}
      <div className="flex gap-4 h-105">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ flex: 2.5 }}
            className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-[flex] duration-500"
            style={{ minWidth: 0 }}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/20 hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
