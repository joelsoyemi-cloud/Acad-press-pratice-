import { motion } from "framer-motion";
import { ShieldCheck, Factory } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Personnel and Security",
    text: "Our establishment comprises about 40 trained and highly skilled professionals — from the Executive Director down to the assistant factory hands — with 5-30 years of experience, ready to go the extra mile to secure every job entrusted to us. CCTV cameras and monitors are installed at strategic locations across our factories and environment.",
    dark: true,
  },
  {
    icon: Factory,
    title: "Installed Capacity",
    text: "We parade the highest number and most versatile crop of machines in the Business Forms, Security Printing and Computer Stationery industry, with a combined installed capacity of 1.8m forms daily — A3: 0.4m, A4: 0.8m, A5: 0.6m — achieving faster turnaround at a maximum delivery of four weeks without compromising quality.",
    dark: false,
  },
];

export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-semibold text-4xl sm:text-5xl text-brand-black text-center mb-16"
      >
        Why Choose APSPS
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className={`rounded-3xl p-10 transition-shadow duration-300 ${
              c.dark
                ? "bg-brand text-white shadow-lg hover:shadow-2xl"
                : "bg-white border border-brand/30 shadow-lg hover:shadow-2xl"
            }`}
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: i * 0.15 + 0.2,
              }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                c.dark ? "bg-white/15" : "bg-brand/10"
              }`}
            >
              <c.icon
                size={30}
                className={c.dark ? "text-white" : "text-brand"}
              />
            </motion.div>
            <h3 className="font-semibold text-2xl mb-4">{c.title}</h3>
            <p
              className={`leading-relaxed ${
                c.dark ? "text-white/90" : "text-brand-black/80"
              }`}
            >
              {c.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
