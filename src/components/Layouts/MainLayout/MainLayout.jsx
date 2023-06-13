import { barlow } from "@/assets/fonts";
import cx from "classnames";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div className={cx(barlow.className, barlow.variable)}>
      <Header />
      <main className={cx("min-h-screen")}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
