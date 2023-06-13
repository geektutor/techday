import Image from "next/image";

const { default: Container } = require("@/components/Container");

function Footer() {
  return (
    <Container
      wrapper={"footer"}
      className=" bg-techday-dark min-h-[300px] flex justify-center items-center  p-4"
      containerClass={"flex justify-center items-center"}
    >
      <Image
        priority
        src="/logo.svg"
        width={188.62}
        height={48}
        alt="project744"
      />
    </Container>
  );
}

Footer.propTypes = {};

export default Footer;
