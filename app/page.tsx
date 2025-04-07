import BlogCard from "@/components/cards/blog-card/blogCard";
import Header from "@/components/common/header/header";
import HeroSection from "@/components/common/heroSection/heroSection";
import ResponsivePageContainer from "@/components/common/responsivePageContainer/responsivePageContainer";
import blogData from "@/lib/BlogData";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Home - Welcome to the Blog App",
  description:
    "Explore the latest blogs and articles on various topics including web development, JavaScript, and more.",
};

export default function Home() {  
  return (
    <div>
      <Header />
      <HeroSection />

      <ResponsivePageContainer>
        <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 gap-6">
          {blogData.slice(0, 3).map((blog, index) => (
            <Link href={`/blog/${blog.id}`} key={index}>
              <BlogCard
                key={index}
                pic={blog.heroImage}
                title={blog.title}
                description={blog.description}
              />
            </Link>
          ))}
        </div>
      </ResponsivePageContainer>
    </div>
  );
}
