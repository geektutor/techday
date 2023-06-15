import { GA } from "@/_firebase/_firebase_client";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "aos/dist/aos.css";
import Router from "next/router";
import AOS from "aos";
import { useEffect } from "react";

Router.events.on("routeChangeComplete", (url) => {
  GA.logEvent("screen_view", {
    screen_class: url,
    sreen_name: url,
  });
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
