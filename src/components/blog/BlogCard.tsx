import { Blog } from "@/types/types";
import { imagePath, timeAgo } from "@/utilis/helper";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  title,
  author,
  content,
  slug,
  createdAt,
  shortDescription,
  attachment,
}: Blog) => {
  return (
    <div className="flex flex-col md:flex-row border border-blue-100 rounded-lg gap-4 p-4 items-start md:items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/4">
        <Image
          src={imagePath(attachment?.path)}
          alt={title}
          width={350}
          height={180}
          className="rounded-sm w-full md:w-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-2 w-full md:w-3/4">
        {/* Title */}
        <h3 className="text-primaryColor text-lg md:text-xl font-semibold transition-colors mb-2">
          <Link href={`/blog/${slug}`} className="line-clamp-2 hover:underline">
            {title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mb-4 text-sm md:text-base text-slate-400 line-clamp-3">
          {shortDescription}
        </p>

        {/* Author & Time Info */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-3">
            {/* Author Avatar */}
            <div className="avatar-img bg-indigo-600 w-10 h-10 rounded-full text-white flex items-center justify-center">
              <span className="text-base capitalize">{author.charAt(0)}</span>
            </div>

            {/* Author Details */}
            <div>
              <p className="text-sm font-medium text-red-400 hover:text-red-500 capitalize">
                {author}
              </p>
              <span className="text-xs text-slate-400">
                {timeAgo(createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
