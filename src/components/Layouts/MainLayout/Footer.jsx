import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  ChevronUpIcon,
} from "@/components/icons";
import { Logo } from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-10">
      <section className="container flex flex-col gap-10">
        <section className="flex flex-col gap-4 items-center">
          <Logo />
          <p data-aos="fade-down" className="m-0 text-sm">
            Inspiring Talents—Making a Difference
          </p>
        </section>

        <section className="flex justify-center">
          <NavMenu isFooter />
        </section>

        <section className="flex gap-4 items-start border-t border-gray-800 pt-8">
          <SocialLink
            icon={<FacebookIcon />}
            url="https://facebook.com/project774"
          />

          <SocialLink
            icon={<TwitterIcon />}
            url="https://twitter.com/project774"
          />

          <SocialLink
            icon={<InstagramIcon />}
            url="https://instagram.com/project774"
          />

          <button
            data-aos="flip-right"
            title="Back to top"
            className="p-2 bg-orange-500 hover:bg-orange-600 ml-auto"
            onClick={backToTop}
          >
            <ChevronUpIcon />
          </button>
        </section>

        <section>
          <p data-aos="fade-down" className="m-0 text-center text-sm">
            &copy; 2023 Project774. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

const SocialLink = ({ icon, url, title }) => (
  <a
    data-aos="flip-left"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="p-2 bg-primary hover:bg-primary-dark"
  >
    {icon}
  </a>
);
