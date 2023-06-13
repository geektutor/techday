import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/About";
import Donate from "@/components/LandingPage/Donate";
import Events from "@/components/LandingPage/Events";
import HostEvent from "@/components/LandingPage/HostEventCta";
import Partners from "@/components/LandingPage/Partners";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Partners />
      <Donate />
      <HostEvent />
    </>
  );
}

Home.layout = MainLayout;
