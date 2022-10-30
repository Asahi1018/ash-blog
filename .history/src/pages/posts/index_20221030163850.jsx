import React from "react";
import BlogHome from "../../components/BlogHome";
import { client } from "../../../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {grfd
      blog: data,
    },
  };
};
export default function Post({ blog }) {
  return <BlogHome blog={blog} />;
}
