import Link from "next/link";

const NavMenu = ({ isFooter = false, isMobile = false }) => {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <NavMenuItem label="Home" url="/" />
      <NavMenuItem label="About Us" url="/about-us" />
      <NavMenuItem label="Blog" url="/blog" />
      <NavMenuItem label="Events" url="/events" />
      <NavMenuItem label="Gallery" url="/gallery" />
      <NavMenuItem label="Volunteer" url="/volunteer" />

      {isFooter && <NavMenuItem label="Volunteer" url="/volunteer" />}

      {(isFooter || isMobile) && <NavMenuItem label="Donate" url="/donate" />}
    </nav>
  );
};

export default NavMenu;

const NavMenuItem = ({ label, url }) => <Link href={url} className="hover:text-primary font-medium ease-in-out duration-200">{label}</Link>;
