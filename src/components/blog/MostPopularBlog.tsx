import { Blog } from "@/types/types";
import Link from "next/link";
import React from "react";

interface MostPopularProps {
  popularBlogs: Blog[];
}

const MostPopular: React.FC<MostPopularProps> = ({ popularBlogs }) => {
  return (
    <div className="border border-blue-100 rounded-lg pt-5 px-4">
      <h3 className="text-primaryColor text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {popularBlogs &&
          popularBlogs.length > 0 &&
          popularBlogs.map((blog: any) => (
            <li className="sidebar-card cursor-pointer" key={blog.id}>
              <Link
                href={`/blog/${blog.slug}`}
                className="font-medium text-primaryColor transition-all text-base"
              >
                {blog.title}
              </Link>
              <p className="text-slate-400 text-sm mt-1">
                Written by {`${blog.author} `}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MostPopular;
