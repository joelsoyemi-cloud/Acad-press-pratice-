import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero";

const faqs = [
  {
    q: "What is the company's production capacity?",
    a: "We operate modern production lines capable of handling both high-volume and specialized print runs, scaled to meet corporate, government, and industrial demand.",
  },
  {
    q: "How long does it take to complete a typical order?",
    a: "Turnaround time depends on the scope and complexity of the job, but most standard orders are completed within a few business days after specifications are confirmed.",
  },
  {
    q: "Where is the company located?",
    a: "Academy Press Specialized Print Services Limited operates within the Academy Press Plc group structure in Lagos, Nigeria.",
  },
  {
    q: "Which industries does the company serve?",
    a: "We serve corporate organizations, government institutions, and industries such as pharmaceuticals, food and beverage, banking, and cosmetics.",
  },
  {
    q: "What services does the company provide?",
    a: "Business forms, security printing, computer stationery, flexographic printing, and light collapsible packaging products.",
  },
  {
    q: "When was the company established?",
    a: "The company was established in 1995 as a subsidiary of Academy Press Plc, which was itself incorporated in 1965.",
  },
  {
    q: "What is Academy Press Specialised Print Services Limited?",
    a: "APSPSL is a specialized printing company providing business forms, security printing, computer stationery, and light packaging solutions to corporate and government clients.",
  },
  {
    q: "How does the company ensure the security of clients' printing jobs?",
    a: "CCTV cameras and monitors are installed at strategic locations across our factories, alongside a trained and experienced workforce dedicated to confidentiality and job security.",
  },
];

function FAQRow({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-black/15">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="text-brand-black font-medium text-xl sm:text-2xl pr-6 group-hover:text-brand transition-colors">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="text-brand-black" size={26} />
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
            <p className="text-brand-black/70 pb-7 max-w-3xl leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        title="FAQs"
        image="https://images.unsplash.com/photo-1568205612837-017257d2310a?q=80&w=1600"
      />
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-24">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl text-brand-black"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((item, i) => (
            <FAQRow
              key={item.q}
              item={item}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}
