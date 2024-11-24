import { SingleBlog } from "@/types/types";
import { imagePath, timeAgo } from "@/utilis/helper";
import Image from "next/image";
import { Avatar } from "../../../public";

const BlogDetail = ({
  title,
  author,
  content,
  shortDescription,
  createdAt,
  attachment,
}: SingleBlog) => {
  return (
    <div className="mx-auto">
      {attachment?.path ? (
        <Image
          src={imagePath(attachment.path)}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg mb-6"
        />
      ) : (
        <div className="w-full h-auto rounded-lg shadow-lg mb-6 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      <h1 className="text-3xl font-bold text-primaryColor mb-4">{title}</h1>

      <div className="flex items-center mb-4">
        <Image
          src={Avatar}
          alt={`${author} `}
          className="w-12 h-12 rounded-full border-2 border-gray-300 mr-3"
        />
        <p className="text-sm text-gray-600">
          <span className="font-semibold">{`${author}`}</span>
          <span className="text-gray-500"> {timeAgo(createdAt)}</span>
        </p>
      </div>

      <p className="text-base text-gray-800 leading-relaxed my-5">
        {shortDescription}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogDetail;
