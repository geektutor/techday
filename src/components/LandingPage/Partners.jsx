import Container from "../Container";
import placeholderImg from "@/assets/images/placeholderImg.png";
import EventCard from "../EventCard";
import { v4 } from "uuid";
import image1 from "@/assets/images/partners/image1.png";
import image2 from "@/assets/images/partners/image2.png";
import image3 from "@/assets/images/partners/image3.png";
import image4 from "@/assets/images/partners/image4.png";
import image5 from "@/assets/images/partners/image5.png";
import image6 from "@/assets/images/partners/image6.png";
import Image from "next/image";

const images = [image1, image2, image3, image4, image5, image6];

function Partners(props) {
  return (
    <Container>
      <h2 data-aos="fade-down" className="text-center fv-caps mb-2">Our Partners</h2>
      <h4 data-aos="fade-down" className="text-center">
        Anything is possible when you have the right people there to support
        you. Meet some of our supporters.
      </h4>
      <div className="flex flex-wrap flex-col justify-center md:flex-row  md:justify-around my-[75px]">
        {images?.map((image) => (
          <Image
            data-aos="fade-up"
            className="flex-shrink-0 mx-auto md:mx-5 my-5"
            src={image}
            height={60}
            key={v4()}
            alt="our partner"
          />
        ))}
      </div>
    </Container>
  );
}

export default Partners;
