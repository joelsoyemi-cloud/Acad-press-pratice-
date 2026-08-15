import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6">
          About Us
        </span>
        <h2 className="font-display font-semibold text-4xl sm:text-5xl text-brand-black mb-6">
          Who We Are
        </h2>
        <p className="text-brand-black/80 text-lg leading-relaxed">
          This subsidiary of Academy Press (incorporated in 1965) was
          established in 1995 to meet the growing needs of the information
          technology world. Since the world was moving towards digital
          information technology and conventional printing could not satisfy
          this evolving market, there became the need to diversify into printing
          requirements of this new market. It is in line with this that the
          management of Academy Press Plc. decided to establish Academy Press
          Business Forms Limited — now renamed{" "}
          <span className="font-semibold text-brand-black">
            Academy Press Specialized Print Services Limited.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ rotate: 1, scale: 1.02 }}
        className="rounded-2xl overflow-hidden shadow-xl h-105"
      >
        <img
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=900"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
