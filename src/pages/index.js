import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/About";
import Donate from "@/components/LandingPage/Donate";
import Events from "@/components/LandingPage/Events";
import HostEvent from "@/components/LandingPage/HostEventCta";
import Partners from "@/components/LandingPage/Partners";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import { POSTS_PATH, postFilePaths } from "@/common/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Home({ events }) {
  return (
    <>
      <Hero />
      <About />
      <Events events={events} />
      <Partners />
      <Donate />
      <HostEvent />
    </>
  );
}

export const getStaticProps = async () => {
  //read events from mdx files
  const events = postFilePaths.map((file_path) => {
    const postFilePath = path.join(POSTS_PATH, file_path);
    const source = fs.readFileSync(postFilePath);
    const { data } = matter(source);
    return { ...data, page_url: file_path?.replace(/\.mdx?$/, "") };
  });

  return {
    props: {
      events: JSON.parse(JSON.stringify(events))?.sort(
        (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
      ),
    },
  };
};

Home.layout = MainLayout;
