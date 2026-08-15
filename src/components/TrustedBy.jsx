import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const clients = ["MTN", "GTBank", "UBA", "Oando", "Stanbic IBTC", "Guinness"];
const loop = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block border border-brand text-brand-black text-sm font-medium px-5 py-2 rounded-full mb-6">
          What We Do
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-black mb-6">
          Trusted by <span className="text-brand">leading Organizations</span>
        </h2>
        <p className="text-brand-black/80 text-lg leading-relaxed mb-8">
          We have had the opportunity of working for the following organizations
          and have earned credible commendations from them, in the supply of all
          products listed earlier.
        </p>
        <Link to="/clients">
          <motion.span
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(152,40,54,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-2xl cursor-pointer"
          >
            View Other Clients
          </motion.span>
        </Link>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent z-10" />

        <div className="grid grid-rows-2 gap-4">
          <div className="flex gap-4 animate-marquee w-max">
            {loop.map((c, i) => (
              <motion.div
                key={`row1-${i}`}
                whileHover={{
                  y: -4,
                  borderColor: "#982836",
                  boxShadow: "0px 10px 25px rgba(152,40,54,0.15)",
                }}
                className="shrink-0 w-44 h-24 flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-black/10 bg-white transition-all"
              >
                <Building2 size={18} className="text-brand/50" />
                <span className="font-semibold text-brand-black/80 text-base">
                  {c}
                </span>
              </motion.div>
            ))}
          </div>
          <div
            className="flex gap-4 w-max"
            style={{ animation: "marquee 25s linear infinite reverse" }}
          >
            {loop.map((c, i) => (
              <motion.div
                key={`row2-${i}`}
                whileHover={{
                  y: -4,
                  borderColor: "#982836",
                  boxShadow: "0px 10px 25px rgba(152,40,54,0.15)",
                }}
                className="shrink-0 w-44 h-24 flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-black/10 bg-white transition-all"
              >
                <Building2 size={18} className="text-brand/50" />
                <span className="font-semibold text-brand-black/80 text-base">
                  {c}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
