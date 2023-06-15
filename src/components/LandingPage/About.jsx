import Link from "next/link";
import Container from "../Container";
import { ArrowRightIcon } from "../icons/ArrowRightIcon.react.svg";
import aboutImg from "@/assets/images/aboutImg.png";
import Image from "next/image";

const InfoBox = ({ title, description }) => (
  <div className="my-4">
    <h3 className="text-primary mb-3">{title}</h3>
    <p>{description}</p>
  </div>
);

function About(props) {
  return (
    <Container id="about" className={"py-9"}>
      <h2 data-aos="fade-down" className="text-center fv-caps mb-2">
        About <span className="text-secondary">Project 774</span>
      </h2>
      <h4 data-aos="fade-down" className="text-center">
        THE MISSION, THE VISION AND ALL ABOUT THE PROJECT 774
      </h4>
      <div
        data-aos="fade-right"
        className="flex justify-between my-8 lg:my-[70px] flex-col lg:flex-row"
      >
        <div className="max-w-[393px]">
          <InfoBox
            title={"OUR VISION"}
            description={`To give our people the power to create, collaborate and share ideas to
      change the world without barriers.`}
          />
          <InfoBox
            title={"OUR MISSION"}
            description={` To add value, provide resources for technological advancement, and
            raise public awareness of the benefits and opportunities of a
            digital and technology-skilled economy.`}
          />

          <Link
            href="/"
            className="text-smh3 flex text-center mb-5 md:text-left items-center font-semibold text-secondary hover:text-secondary-dark hover:scale-105" style={{fontSize: "12px"}}
          >
            LEARN MORE ABOUT OUR STORY <ArrowRightIcon className="ml-4" />
          </Link>
        </div>
        <div className=" my-12 lg:my-0">
          <Image
            data-aos="fade-left"
            width={576}
            height={400}
            src={aboutImg}
            alt="an event instructor ensuring a participant is following along"
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
