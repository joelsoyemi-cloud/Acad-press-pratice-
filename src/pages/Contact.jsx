import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkpbplj";

const infoItems = [
  { icon: Phone, text: "01-212 3408" },
  {
    icon: Mail,
    text: "academyforms@yahoo.com",
    href: "mailto:academyforms@yahoo.com",
  },
  {
    icon: MapPin,
    text: "28/32, Industrial Avenue, Ilupeju, P.O. Box 3445, Lagos, Nigeria",
  },
];

const fields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
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
        title="Contact Us"
        image="https://images.unsplash.com/photo-1568205612837-017257d2310a?q=80&w=1600"
      />

      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[rgba(255,243,245,0.6)] rounded-2xl p-8 sm:p-10"
        >
          <h3 className="font-display font-bold text-3xl text-brand-black mb-8">
            Get In Touch
          </h3>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-12"
            >
              <CheckCircle size={56} className="text-brand mb-4" />
              <p className="text-xl font-semibold text-brand-black mb-2">
                Message sent!
              </p>
              <p className="text-brand-black/70">
                We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-brand underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-brand-black font-medium mb-2">
                    {f.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#982836" }}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="w-full border border-black/25 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-brand-black font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#982836" }}
                  name="message"
                  required
                  rows={5}
                  placeholder="Type here..."
                  className="w-full border border-black/25 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 25px rgba(152,40,54,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-white font-medium px-10 py-3 rounded-2xl inline-flex items-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send"}{" "}
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-3xl text-brand-black mb-4">
            Contact Us
          </h3>
          <p className="text-brand-black/80 text-lg leading-relaxed mb-10">
            We'd love to hear from you. Whether you have a question about our
            services, need technical support, or want to discuss a new project,
            the APSPS team is ready to assist you.
          </p>

          <div className="space-y-6">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-11 h-11 shrink-0 bg-brand rounded-full flex items-center justify-center"
                >
                  <item.icon size={18} className="text-white" />
                </motion.div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-brand-black text-lg underline hover:text-brand transition-colors pt-2"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="text-brand-black text-lg pt-2">{item.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-10 pb-24"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg h-105">
          <iframe
            title="Academy Press Location"
            src="https://www.google.com/maps?q=Ilupeju,Lagos,Nigeria&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </motion.section>
    </>
  );
}
