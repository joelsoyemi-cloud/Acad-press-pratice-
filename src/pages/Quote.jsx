import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // same one from Contact, or a separate form

const textFields = [
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
  {
    name: "company",
    label: "Company Name",
    placeholder: "Enter your company name",
    type: "text",
  },
  {
    name: "timeframe",
    label: "Estimated Timeframe",
    placeholder: "Enter your project estimated timeframe",
    type: "text",
  },
  {
    name: "budget",
    label: "Estimated Budget",
    placeholder: "Enter your estimated budget",
    type: "text",
  },
];

const serviceTypes = [
  "Set Unit Forms",
  "Computer Forms",
  "Security Forms",
  "Confidential Forms",
  "Flexographic Printing",
  "Collapsible Light Packaging",
  "Other",
];

export default function Quote() {
  const [status, setStatus] = useState("idle");

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
        title="Request a Quote"
        image="https://images.unsplash.com/photo-1568205612837-017257d2310a?q=80&w=1600"
      />

      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="bg-[rgba(255,243,245,0.6)] rounded-3xl p-8 sm:p-12"
        >
          <p className="text-center text-brand-black/80 text-lg mb-10">
            Please fill the form below and our team will get back to you as soon
            as possible.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-16"
            >
              <CheckCircle size={56} className="text-brand mb-4" />
              <p className="text-xl font-semibold text-brand-black mb-2">
                Quote request sent!
              </p>
              <p className="text-brand-black/70">
                Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-brand underline"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {textFields.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <label className="block text-brand-black font-medium mb-2">
                    {f.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#982836" }}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="w-full border border-black/25 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 transition-all bg-white"
                  />
                </motion.div>
              ))}

              <div>
                <label className="block text-brand-black font-medium mb-2">
                  Service Type
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01, borderColor: "#982836" }}
                  name="serviceType"
                  required
                  defaultValue=""
                  className="w-full border border-black/25 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 transition-all bg-white"
                >
                  <option value="" disabled>
                    Select a service type
                  </option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </motion.select>
              </div>

              <div>
                <label className="block text-brand-black font-medium mb-2">
                  Service Details
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#982836" }}
                  name="details"
                  rows={5}
                  placeholder="Tell us more about what you need..."
                  className="w-full border border-black/25 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 transition-all resize-none bg-white"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong — please try again or contact us
                  directly.
                </p>
              )}

              <div className="flex justify-center pt-4">
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 25px rgba(152,40,54,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand text-white font-medium px-12 py-3.5 rounded-2xl disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Submit"}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}
