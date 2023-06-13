import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

const Homepage = ({ children, title, description }) => {
  return (
    <section>
      <Hero title={title} description={description} />

      {children}

      <Footer />
    </section>
  );
};
export default Homepage;
