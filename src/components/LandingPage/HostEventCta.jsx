import Container from "../Container";
import Link from "next/link";

function HostEvent(props) {
  return (
    <Container
      id="volunteer"
      className={"min-h-[50vh] py-[100px] text-center"}
      containerClass={"text-center"}
    >
      <h2
        data-aos="zoom-in-up"
        className="text-center font-bold text-[40px] leading-[48px] md:text-[64px] md:leading-[28px] fv-caps"
      >
        Host the next Tech Day!
      </h2>
      <p data-aos="zoom-in-up" className="text-center mt-14 mb-14">
        Should we come to your LGA next? Click the button below and upvote your
        LGA.
      </p>

      <Link
        data-aos="zoom-in"
        className="btn bg-primary hover:bg-primary-dark text-center mx-auto max-w-[144px] text-base rounded-sm mt-10"
        href="/donate"
      >
        I WANT TO HOST
      </Link>
    </Container>
  );
}

export default HostEvent;
