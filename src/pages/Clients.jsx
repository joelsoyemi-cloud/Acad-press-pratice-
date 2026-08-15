import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import PageHero from "../components/PageHero";

const clients = [
  "Wema Bank Plc.",
  "Osun State Government",
  "West African Examination Council",
  "United Parcel Service",
  "Union Bank of Nigeria Plc.",
  "UAC of Nigeria Plc.",
  "Lafarge Plc.",
  "Nigerian Breweries Plc.",
  "Nigerian Bottling Company",
  "Nigeria National Petroleum Corporation",
  "Ikeja Electricity Distribution Company Plc.",
  "Ibadan Electricity Distribution Company Plc.",
  "GLOBACOM",
  "GTBank Plc.",
  "Flour Mills of Nigeria Plc.",
  "First Bank of Nigeria Plc.",
  "Fidelity Bank",
  "Ecobank Plc.",
  "DHL Plc.",
  "Dangote Group",
  "Crusader Sterling Pensions Ltd.",
  "Central Bank of Nigeria",
  "Ogun State Government",
  "Lagos State Government",
  "United Bank of Africa Plc.",
  "Guinness Nigeria",
  "Oando",
  "Stanbic IBTC Plc.",
  "FCMB Plc.",
  "National Examination Council",
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
          We have had the opportunity of working for the following organizations
          and have earned credible commendations from them, in the supply of all
          products listed earlier.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clients.map((name) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ y: -6, borderColor: "#982836" }}
              className="border border-black/10 rounded-2xl p-6 flex items-center gap-4 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-brand/10 flex items-center justify-center">
                <Building2 size={22} className="text-brand" />
              </div>
              <p className="font-medium text-brand-black">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
