    import { motion } from "framer-motion";
    import { Mail, Phone } from "lucide-react";
    import { Link } from "react-router-dom";

    const companyLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
    ];
    const supportLinks = [
    { label: "Clients", to: "/clients" },
    { label: "FAQs", to: "/faqs" },
    { label: "Request a Quote", to: "/quote" },
    ];
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-3">
              Academy Press
            </h3>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Academy Press Specialized Print Services Limited (APSPSL) is a
              specialized printing company providing business forms, security
              printing, computer stationery, and light packaging solutions.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone size={14} /> 01-212 3412 / 01-212 3408
              </p>
              <a
                href="mailto:apbflmkt@academypress-plc.com"
                className="flex items-center gap-2 hover:text-white transition-colors underline"
              >
                <Mail size={14} /> apbflmkt@academypress-plc.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <motion.span
                      whileHover={{ x: 5, color: "#ffffff" }}
                      className="text-white/60 text-sm inline-block transition-colors cursor-pointer"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <motion.span
                      whileHover={{ x: 5, color: "#ffffff" }}
                      className="text-white/60 text-sm inline-block transition-colors cursor-pointer"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

       <Link to="/newsletter">
  <motion.span
    whileHover={{
      scale: 1.03,
      backgroundColor: "#ffffff",
      color: "#000",
    }}
    whileTap={{ scale: 0.97 }}
    className="border border-white text-white font-semibold px-8 py-3 rounded-2xl inline-block mb-12 transition-colors cursor-pointer"
  >
    Subscribe to newsletters
  </motion.span>
</Link>   

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/50 text-sm">
          <p>
            © 2026 Academy Press Specialized Print Services Limited. All rights
            reserved
          </p>
          <p>Designed by dev-joel</p>
        </div>
      </div>
    </footer>
  );
}