import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import Newsletter from "./pages/Newsletter";
import PasswordGate from "./components/PasswordGate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PasswordGate>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </PasswordGate>
  </StrictMode>,
);
