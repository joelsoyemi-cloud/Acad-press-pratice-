import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkpbplj";

export default function Newsletter() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    data.append("_subject", "New Newsletter Subscription");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        title="Subscribe to Our Newsletter"
        image="https://images.unsplash.com/photo-1568205612837-017257d2310a?q=80&w=1600"
      />

      <section className="max-w-2xl mx-auto px-6 sm:px-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-6"
        >
          <Mail size={28} className="text-brand" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-brand-black mb-4"
        >
          Stay in the loop
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-black/70 text-lg mb-10"
        >
          Get occasional updates on new services, industry news, and offers
          from Academy Press Specialized Print Services — no spam, unsubscribe
          anytime.
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-8"
          >
            <CheckCircle size={48} className="text-brand mb-4" />
            <p className="text-xl font-semibold text-brand-black mb-1">
              You're subscribed!
            </p>
            <p className="text-brand-black/70">
              Thanks for signing up — watch your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="flex-1 border border-black/25 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-brand/30 transition-all"
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(152,40,54,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-white font-medium px-8 py-3.5 rounded-2xl disabled:opacity-60 whitespace-nowrap"
            >
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </motion.form>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm mt-4">
            Something went wrong — please try again.
          </p>
        )}
      </section>
    </>
  );
}