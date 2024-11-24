import { SingleService } from "@/types/types";
import { imagePath } from "@/utilis/helper";
import Image from "next/image";
import { NoImage } from "../../../public";
import { HeadingPrimaryService } from "./headingService";

export default function ServiceDetails({
  title,
  attachment,
  content,
  shortDescription,
}: SingleService) {
  return (
    <section className="flex flex-col gap-6 text-justify md:p-8 p-6 bg-white shadow-xl rounded-lg">
      <HeadingPrimaryService>{title}</HeadingPrimaryService>
      <div className="w-full">
        {attachment?.path ? (
          <Image
            src={imagePath(attachment.path)}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-[500px] rounded-lg shadow-lg mb-6 object-conatin"
          />
        ) : (
          <Image
            src={NoImage}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-[500px] rounded-lg shadow-lg mb-6 object-conatin"
          />
        )}
      </div>
      <p>{shortDescription}</p>
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
