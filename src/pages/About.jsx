import PageHero from "../components/PageHero";
import AboutIntro from "../components/AboutIntro";
import Mission from "../components/Mission";
import WhyChoose from "../components/WhyChoose";

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        image="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1600"
      />
      <AboutIntro />
      <Mission />
      <WhyChoose />
    </>
  );
}
