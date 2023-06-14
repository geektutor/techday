import Link from "next/link";
import Container from "../Container";
import donateImg from "@/assets/images/donateImg.png";
import Image from "next/image";

function Donate(props) {
  return (
    <Container className={"bg-techday-grey text-white bg-pr774"}>
      <div className="flex justify-between flex-col lg:flex-row my-[70px] items-center">
        <div data-aos="fade-right">
          <Image
            src={donateImg}
            alt="hands of diversed people placed together"
          />
        </div>
        <div data-aos="fade-left" className="max-w-[561px] lg:max-w-[405px]">
          <h3 className="font-semibold text-[26px] mb-11 lg:mt-0 mt-11">
            Donate to support our cause
          </h3>
          <p>
            We could use your assistance to boost the initiative&apos;s
            progress, and in doing so, you would have an impact on lives and
            make a difference. It begins with the belief that things can change.
          </p>

          <Link
            data-aos="zoom-in"
            className="btn bg-primary hover:bg-primary-dark max-w-[160px] text-base rounded-sm mt-10"
            href="/donate"
          >
            I WANT TO DONATE
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Donate;
