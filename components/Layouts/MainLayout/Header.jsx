import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

function Header(props) {
  return (
    <Container
      containerClass={"flex items-center justify-between container"}
      className="flex bg-black text-white flex-col justify-center shadow-header sticky  left-0 right-0 top-0  w-full z-[2]   items-center  min-h-[88px]"
    >
      <Link href="/">
        <Image
          priority
          src="/logo.svg"
          width={188.62}
          height={48}
          alt="project744"
        />
      </Link>
      <nav className="">
        <Link href="/">Home </Link>
      </nav>

      <button className="btn">Donate</button>
    </Container>
  );
}

Header.propTypes = {};

export default Header;
