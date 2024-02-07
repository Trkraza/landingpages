import Accordian2 from "./components/Accordian/Accordian2";
import ContactAndAbout from "./components/ContactUs/Contact";
import ContentFeature from "./components/Feature/ContentFeature";
import NewFeature from "./components/Feature/NewFeature";
// import NewFeature from "./components/Feature/NewFeature";
import Features from "./components/Feautures&Benefits/Features";
import SliderComponent from "./components/Feautures&Benefits/Features1";

import HeroSection from "./components/Hero/Hero1";
// import Navbar from "./components/Navbars/Navbar1";

// import navbarprops from "./components/Navbars/props";
import MemberSection from "./components/Team/Team";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Marquee from "./components/marquee/marquee";
import Price from "./components/price/Price";

export default function Home() {
  return (
    <main className=" mx-auto">
      {/* <Navbar props={navbarprops} /> */}

      <Marquee />
      <HeroSection />
      <ContentFeature />
      <NewFeature />
      <Accordian2 />
      <SliderComponent />
      <MemberSection />
      <Features />
      <NewFeature />
      <Tokenomics />
      <ContactAndAbout />
      {/* <AccordionDemo /> */}
      <Price />
    </main>
  );
}
