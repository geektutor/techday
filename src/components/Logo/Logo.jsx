import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        width={192}
        height={48}
        priority
        src="/logo.png"
        alt="Project774"
      />
    </Link>
  );
};

export default Logo;
