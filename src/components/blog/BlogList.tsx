import { Blog } from "@/types/types";
import React from "react";
import BlogCard from "./BlogCard";
import { apiService } from "@/utilis/apiService";

const BlogList: React.FC = async () => {
  const blogData: Blog[] = await apiService("blog");

  return (
    <div className="grid grid-cols-1 gap-4 ">
      {blogData &&
        blogData.length > 0 &&
        blogData.map((blog: Blog) => <BlogCard key={blog.id} {...blog} />)}
    </div>
  );
};

export default BlogList;
