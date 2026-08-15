import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-[rgba(255,243,245,0.6)] py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-right">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6"
        >
          Mission
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-semibold text-4xl sm:text-5xl text-brand-black mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-black/80 text-lg leading-relaxed ml-auto max-w-2xl"
        >
          Our mission is to provide excellent, value-for-money service in return
          for our clients' trust and enduring patronage, and to provide
          solutions to the businesses of our clients through functional and
          cost-effective printing.
        </motion.p>
      </div>
    </section>
  );
}
