import { motion } from "framer-motion";

const services = [
  {
    title: "Set Unit Forms",
    image:
      "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=600",
    dark: true,
  },
  {
    title: "Computer Forms",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
    dark: false,
  },
  {
    title: "Security Forms",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600",
    dark: false,
  },
  {
    title: "Confidential Forms",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600",
    dark: true,
  },
  {
    title: "Flexographic Printing Brands",
    image:
      "https://images.unsplash.com/photo-1607262807149-dfd4c39320a6?q=80&w=600",
    dark: true,
  },
  {
    title: "Collapsible Light Packaging Products",
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?q=80&w=600",
    dark: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhatWeOffer() {
  return (
    <section className="bg-[rgba(255,243,245,0.6)] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6">
            Our Product Services
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-black">
            What We <span className="text-brand">Offer</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className={`group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg ${
                s.dark ? "bg-brand" : "bg-white/70"
              }`}
            >
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              />
              <div
                className={`absolute inset-0 ${
                  s.dark
                    ? "bg-linear-to-t from-brand-dark/90 via-brand/40 to-transparent"
                    : "bg-linear-to-t from-white/90 via-white/40 to-transparent"
                }`}
              />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3
                  className={`font-medium text-2xl mb-4 ${
                    s.dark ? "text-white" : "text-brand-black"
                  }`}
                >
                  {s.title}
                </h3>
                <motion.a
                  href="#"
                  className={`inline-flex items-center gap-2 w-fit border rounded-2xl px-5 py-2.5 text-sm font-medium ${
                    s.dark
                      ? "border-white text-white"
                      : "border-brand-black text-brand-black"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  Request a Quote
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
