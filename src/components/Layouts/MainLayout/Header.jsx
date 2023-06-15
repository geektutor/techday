import { DonateButton } from "@/components/DonateButton";
import { Logo } from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";
import { useState } from "react";
import cx from "classnames";
import { CloseIcon, HamburgerIcon } from "@/components/icons";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const isHomepage = router.pathname === "/";
  
  return (
    <header
      className={cx("absolute w-screen text-white bg-black z-[1]", {
        "bg-transparent py-4": isHomepage,
      })}
    >
      <section className="container flex gap-6 py-2 item-center relative">
        <section className="">
          <Logo />
        </section>

        <section className="hidden md:flex flex-1 items-center justify-center">
          <NavMenu />
        </section>

        <section className="hidden md:flex items-center justify-end">
          <DonateButton />
        </section>

        <button
          className="flex md:hidden items-center ml-auto px-2"
          onClick={toggleMenu}
        >
          <HamburgerIcon />
        </button>
      </section>

      <MobileMenu isOpen={isOpen} closeMenu={toggleMenu} />
    </header>
  );
};

export default Header;

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <aside
      className={cx(
        "bg-black fixed flex flex-col items-center justify-center md:hidden w-full top-0 h-screen",
        "ease-in-out duration-300",
        { "opacity-100 right-0": isOpen },
        { "opacity-0 right-[-100%]": !isOpen }
      )}
    >
      <button onClick={closeMenu} className="absolute top-8 right-6">
        <CloseIcon />
      </button>

      <section className="flex" onClick={closeMenu}>
        <NavMenu isMobile />
      </section>
    </aside>
  );
};
