import Container from "../Container";
import placeholderImg from "@/assets/images/placeholderImg.png";
import EventCard from "../EventCard";
import { v4 } from "uuid";
import Link from "next/link";

const events = [
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
];

function HostEvent(props) {
  return (
    <Container
      className={"min-h-[50vh] py-[100px] text-center"}
      containerClass={"text-center"}
    >
      <h2 className="text-center font-bold text-[40px] leading-[48px] md:text-[64px] md:leading-[28px] fv-caps">
        Host the next Tech Day!
      </h2>
      <p className="text-center mt-14 mb-14">
        Should we come to your LGA next? Click the button below and upvote your
        LGA.
      </p>

      <Link
        className="btn bg-primary text-center mx-auto max-w-[144px] text-base rounded-sm mt-10"
        href="/donate"
      >
        I WANT TO HOST
      </Link>
    </Container>
  );
}

export default HostEvent;
