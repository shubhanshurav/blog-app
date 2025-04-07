import React from "react";
import Image from "next/image";

interface BlogCardProps {
  pic: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ pic, title, description }) => {
  return (
    <div className="blog-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-0 pb-[62.5%]">
        <Image src={pic} alt={title} layout="fill" className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
