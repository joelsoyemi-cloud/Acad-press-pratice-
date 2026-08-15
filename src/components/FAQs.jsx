import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is the company's production capacity?",
    a: "We operate modern production lines capable of handling both high-volume and specialized print runs, with capacity scaled to meet corporate, government, and industrial demand.",
  },
  {
    q: "How long does it take to complete a typical order?",
    a: "Turnaround time depends on the scope and complexity of the job, but most standard orders are completed within a few business days after specifications are confirmed.",
  },
  {
    q: "Where is the company located?",
    a: "Academy Press Specialized Print Services Limited operates within the Academy Press Plc group structure in Nigeria.",
  },
  {
    q: "Which industries does the company serve?",
    a: "We serve corporate organizations, government institutions, and industries such as pharmaceuticals, food and beverage, banking, and cosmetics.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-white/30">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-white font-medium text-lg pr-6">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <Plus className="text-white" size={22} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/80 pb-6 leading-relaxed max-w-xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-4xl sm:text-6xl text-white mb-12 leading-tight"
        >
          Frequently Asked Questions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
