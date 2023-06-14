import Head from "next/head";
import React from "react";

const SEO = ({
  title,
  description,
  keywords,
  image,
  metas = [],
  generalise = true,
  page_url = "",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="image" content={image} />
    <meta property="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="reply-to" content="project774ng@gmail.com" />
    <meta name="coverage" content="Worldwide" />
    <meta name="url" content={`https://project744.ng/${page_url}`} />
    <meta name="target" content="all" />
    <meta name="rating" content="General" />
    <meta name="apple-mobile-web-app-title" content={title} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-touch-fullscreen" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
    {generalise ? (
      <>
        {/* GOOGLE META TAGS */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        {/* TWITTER META TAGS */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Project744" />
        <meta property="twitter:domain" content="project744.ng" />
        <meta
          property="twitter:url"
          content={`https://www.project744.ng/${page_url}`}
        />
        <meta name="twitter:creator" content="@project774" />
        <meta name="twitter:description" content={description} />
        {/* FACEBOOK META TAGS */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content={`https://www.project744.ng/${page_url}`}
        />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Project744" />
        <meta property="og:description" content={description} />
      </>
    ) : null}
    {Array.isArray(metas) &&
      metas?.map((info) => (
        <meta
          key={info?.property}
          property={info?.property}
          content={info?.content}
        />
      ))}
  </Head>
);

export default SEO;
