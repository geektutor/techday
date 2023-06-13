import React from "react";
import cx from "classnames";

function Container({ wrapper, className, containerClass, id, children }) {
  let WrapperComponent;

  if (wrapper === "header") {
    WrapperComponent = HeaderWrapper;
  } else if (wrapper === "footer") {
    WrapperComponent = FooterWrapper;
  } else {
    WrapperComponent = SectionWrapper;
  }

  return (
    <WrapperComponent id={id} className={cx(className, `overflow-hidden`)}>
      <div className={cx("container", containerClass)}>{children}</div>
    </WrapperComponent>
  );
}

Container.defaultProps = {
  wrapper: "section",
};

// Define separate wrapper components for header, section, and footer
const HeaderWrapper = ({ id, className, children }) => (
  <header id={id} className={className}>
    {children}
  </header>
);

const SectionWrapper = ({ id, className, children }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

const FooterWrapper = ({ id, className, children }) => (
  <footer id={id} className={className}>
    {children}
  </footer>
);

export default Container;
