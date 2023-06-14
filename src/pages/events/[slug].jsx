import { POSTS_PATH, postFilePaths } from "@/common/mdxUtils";
import BreadCrumb from "@/components/BreadCrumnb";
import Container from "@/components/Container";
import HostEvent from "@/components/LandingPage/HostEventCta";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import SEO from "@/components/Seo";
import { DateIcon } from "@/components/icons/DateIcon.react.svg";
import { LocationIcon } from "@/components/icons/LocationIcon.react.svg";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Link from "next/link";
import path from "path";

function EventOverviewPage({ source, frontMatter, page_url }) {
  return (
    <>
      <SEO
        title={frontMatter?.title}
        description={frontMatter?.description}
        image={frontMatter?.eventBanner}
        page_url={page_url}
      />
      <Container containerClass={"md:px-0 pt-[120px] pb-[31px]"}>
        <BreadCrumb
          items={[
            { label: "Events", href: "/#events" },
            {
              label: frontMatter?.title,
              isActive: true,
              href: `/events/${page_url}`,
            },
          ]}
        />
      </Container>
      <Container containerClass={"bg-[#DBDBDB]"}>
        <Image
          className="mx-auto max-h-[424px] object-cover"
          width={1236}
          height={424}
          src={frontMatter?.eventBanner}
          
          alt="header"
        />
      </Container>
      <Container
        className={"py-8"}
        containerClass={
          "md:px-0 flex items-start justify-between lg:space-x-14 flex-col lg:flex-row"
        }
      >
        <div className="flex-grow w-full max-w-[813px]">
          <h1 className="font-medium text-[48px] leading-[57px]">
            {frontMatter?.title}
          </h1>
          <p className="mt-[24px] mb-11 text-xl">{frontMatter?.description}</p>
          <p className="flex items-center my-6">
            <DateIcon className="text-primary mr-3" />{" "}
            {dayjs(frontMatter?.eventDate).format("ddd, MMM D, YYYY - hhA ")}
          </p>
          <p className="flex items-center mt-6 mb-11">
            <LocationIcon className="text-primary mr-3" />{" "}
            {frontMatter?.eventLocation}
          </p>

          <h2 className=" text-4xl font-semibold">About the event</h2>
          <h3 className="my-8 font-medium">What is {frontMatter?.title}</h3>
          <div className="mdx-content">
            <MDXRemote {...source} />
          </div>
          <Link
            href={frontMatter?.registerationLink || "#"}
            className="bg-primary underline btn text-base max-w-[139px] decoration-yellow-500"
          >
            REGISTER NOW
          </Link>
        </div>
        <div className="w-full max-w-[435px] p-7 flex-shrink-0 bg-[#FCFBFB] my-6 lg:my-0">
          <p className="font-medium leading-[33.41px] text-[28px] mb-11">
            Make donation
          </p>
          <Link
            href={frontMatter?.donationLink || "#"}
            className="btn bg-primary w-full max-w-none  mx-auto rounded-md"
          >
            Make Donation
          </Link>
        </div>
      </Container>
      <HostEvent />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: JSON.parse(JSON.stringify(data)),
  });

  return {
    props: {
      page_url: params.slug,
      source: mdxSource,
      frontMatter: JSON.parse(JSON.stringify(data)),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((file_path) => file_path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

EventOverviewPage.layout = MainLayout;

export default EventOverviewPage;
