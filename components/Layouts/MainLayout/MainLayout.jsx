import { barlow } from "@/assets/fonts";
import cx from "classnames";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className={cx(barlow.className, barlow.variable, "min-h-screen")}>
        {children}
      </main>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
