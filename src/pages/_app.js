import { GA } from "@/_firebase/_firebase_client";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Router from "next/router";

Router.events.on("routeChangeComplete", (url) => {
  GA.logEvent("screen_view", {
    screen_class: url,
    sreen_name: url,
  });
});

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
