import About from "@/components/LandingPage/About";
import Donate from "@/components/LandingPage/Donate";
import Events from "@/components/LandingPage/Events";
import HostEvent from "@/components/LandingPage/HostEventCta";
import Partners from "@/components/LandingPage/Partners";
import { Homepage } from "@/components/Layouts";

import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <Homepage title="Project774 &bull; Inspiring Talents - Making a Difference" description="">
      <About />
      <Events />
      <Partners />
      <Donate />
      <HostEvent />
    </Homepage>
  );
}

Home.layout = MainLayout;
