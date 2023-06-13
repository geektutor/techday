import Image from "next/image";
import { Header } from "../Header";
import { DonateButton } from "../DonateButton";

const Hero = ({ title, description }) => {
  return (
    <section
      className="bg-black min-h-[500px] max-h-[800px] relative text-white"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <Header isHomepage title={title} description={description} />

      <figure className="md:hidden h-full w-full absolute z-[0] top-0">
        <Image
          src="/hero.jpg"
          alt="Tech Day"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>

      <figure className="hidden md:flex h-full w-full absolute z-[0] top-0">
        <Image
          src="/hero-md.jpg"
          alt="Tech Day"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>

      <section className="container relative h-full flex flex-col gap-6 items-center justify-center">
        <h1>Tech Day</h1>

        <p className="max-w-[480px] text-center">
          A 1-day event aimed at driving awareness of the immense opportunity of
          the digital skill economy to indigenes and residents of the 774 Local
          Governments in Nigeria.
        </p>

        <DonateButton />
      </section>
    </section>
  );
};
export default Hero;
