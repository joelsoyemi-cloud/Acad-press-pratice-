import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import CursorGlow from "./CursorGlow";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="bg-white">
      <ScrollProgress />
      <CursorGlow />
      <TopBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onAnimationStart={() =>
            window.scrollTo({ top: 0, behavior: "instant" })
          }
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
