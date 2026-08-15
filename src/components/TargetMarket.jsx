import { motion } from "framer-motion";

const industries = [
  "Banking & Finance",
  "Manufacturing",
  "Courier / Transportation / Hotels",
  "Oil & Gas",
  "Government",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function TargetMarket() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-white text-white text-sm font-medium px-5 py-2 rounded-full mb-6"
        >
          Industrial Sector
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl text-white mb-6"
        >
          Our Target Market
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg max-w-xl mb-12"
        >
          Our target market is very wide generally and also specialized, because
          it cuts across almost all segments of the economy.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          {industries.map((ind) => (
            <motion.span
              key={ind}
              variants={pill}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#ffffff",
                color: "#982836",
              }}
              className="border border-white text-white font-medium text-lg px-6 py-3 rounded-full cursor-default transition-colors"
            >
              {ind}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
