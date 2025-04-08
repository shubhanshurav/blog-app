import React from "react";
import blogData from "../../../lib/BlogData";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const blog = blogData.find((b) => b.id === params.blogId);
  if (blog) {
    return {
      title: `Blogs - ${blog.title}`,
      description: blog.description,
    };
  }
  return {
    title: "Blog Not Found",
    description: "The blog you are looking for does not exist.",
  };
}

interface BlogPageProps {
  params: { blogId: string };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const blogIds = [
    "the-future-of-web-development",
    "mastering-react-in-2023",
    "top-10-javascript-libraries",
    "building-scalable-applications",
    "understanding-typescript",
    "css-grid-vs-flexbox",
    "devops-for-developers",
  ];

  const blog = blogIds.includes(params.blogId)
    ? blogData.find((b) => b.id === params.blogId)
    : null;

  if (!blog) {
    return <div className="p-4 text-center">Blog not found!</div>;
  }

  return (
    <div className="p-4">
      <Image
        src={blog.heroImage}
        alt={blog.altText}
        width={800}
        height={600}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
};

export default BlogPage;
