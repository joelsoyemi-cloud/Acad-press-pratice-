import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const clients = [
  { name: "Wema Bank Plc.", logo: "/logos/wema-bank.jpeg" },
  { name: "Union Bank of Nigeria Plc.", logo: "/logos/union-bank.png" },
  { name: "United Bank of Africa Plc.", logo: "/logos/uba.png" },
  { name: "DHL", logo: "/logos/dhl.png" },
  { name: "First Bank of Nigeria Plc.", logo: "/logos/first-bank.png" },
  { name: "Oando", logo: "/logos/oando.png" },
  { name: "Ibadan Electricity Distribution Company Plc.", logo: "/logos/ibedc.png" },
  { name: "Dangote Group", logo: "/logos/dangote.png" },
  { name: "Fidelity Bank", logo: "/logos/fidelity.jpeg" },
  { name: "GLOBACOM", logo: "/logos/glo.jpeg" },
  { name: "Flour Mills of Nigeria Plc.", logo: "/logos/flour-mills.png" },
  { name: "National Examination Council", logo: "/logos/neco.jpeg" },
  { name: "Central Bank of Nigeria", logo: "/logos/cbn.jpeg" },
  { name: "West African Examination Council", logo: "/logos/waec.png" },
  { name: "MRS", logo: "/logos/mrs.png" },
  { name: "Ikeja Electricity Distribution Company Plc.", logo: "/logos/ikeja-electric.png" },
  { name: "Ecobank Plc.", logo: "/logos/ecobank.png" },
  { name: "Osun State Government", logo: "/logos/osun-state.jpeg" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Clients() {
  return (
    <>
      <PageHero
        title="Our Clients"
        image="https://images.unsplash.com/photo-1568205612837-017257d2310a?q=80&w=1600"
      />

      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-brand-black/80 text-lg max-w-3xl mx-auto mb-16"
        >
          We have had the opportunity of working for the following
          organizations and have earned credible commendations from them, in
          the supply of all products listed earlier.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={item}
              whileHover={{ y: -6, borderColor: "#982836", boxShadow: "0px 12px 30px rgba(152,40,54,0.12)" }}
              className="border border-black/10 rounded-2xl p-6 flex items-center gap-4 bg-white shadow-sm transition-all"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-black/5 flex items-center justify-center overflow-hidden p-1.5">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="font-medium text-brand-black">{c.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}