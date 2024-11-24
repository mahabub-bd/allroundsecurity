import { Blog } from "@/types/types";
import { timeAgo } from "@/utilis/helper";
import Link from "next/link";

import React from "react";

interface RecentBlogProps {
  blogs: Blog[];
}

const RecentBlog: React.FC<RecentBlogProps> = ({ blogs }) => {
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="border border-blue-100 rounded-lg pt-5 px-4">
      <h3 className="text-primaryColor text-xl lg:text-2xl font-semibold">
        Recent Blogs 🆕
      </h3>

      <ul className="space-y-5 my-5">
        {sortedBlogs &&
          sortedBlogs.length > 0 &&
          sortedBlogs.map((blog: Blog) => (
            <li className="recent-blog-card cursor-pointer" key={blog.id}>
              <Link
                href={`/blog/${blog.slug}`}
                className="font-medium text-primaryColor transition-all text-base"
              >
                {blog.title}
              </Link>
              <p className="text-slate-400 text-sm mt-1">
                Written by
                <span className="mx-1">{blog.author}</span>
                <span className="mx-1">·</span> Published{" "}
                {timeAgo(blog.createdAt)}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentBlog;
