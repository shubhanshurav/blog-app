import BlogCard from "@/components/cards/blog-card/blogCard";
import Header from "@/components/common/header/header";
import HeroSection from "@/components/common/heroSection/heroSection";
import ResponsivePageContainer from "@/components/common/responsivePageContainer/responsivePageContainer";
import blogData from "@/lib/BlogData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs - Explore Latest Articles",
  description:
    "Discover the latest blogs and articles on web development, JavaScript, React, and more.",
};

const Blog = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      <ResponsivePageContainer>
        <div>
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="grid grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 gap-6"
            >
              <BlogCard
                key={index}
                pic={blog.heroImage}
                title={blog.title}
                description={blog.description}
              />
            </div>
          ))}
        </div>
      </ResponsivePageContainer>
    </div>
  );
};

export default Blog;
