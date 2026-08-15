import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeOffer from "./components/WhatWeOffer";
import TargetMarket from "./components/TargetMarket";
import TrustedBy from "./components/TrustedBy";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <TargetMarket />
      <TrustedBy />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
