import { useEffect, useState } from "react";
import { ChevronUpIcon } from "./icons";
import cx from "classnames";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window?.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-aos="flip-right"
      title="Back to top"
      className={cx(
        "p-2 bg-orange-500 hover:bg-orange-600 ml-auto",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <ChevronUpIcon />
    </button>
  );
};

export default BackToTopButton;
