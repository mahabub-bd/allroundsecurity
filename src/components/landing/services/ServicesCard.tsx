import { Service } from "@/types/types";
import { imagePath } from "@/utilis/helper";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ title, slug, attachment }: Service) {
  return (
    <div className="w-[350px] bg-primaryColor rounded-[10px] overflow-hidden">
      <Image
        src={imagePath(attachment?.path)}
        alt={title}
        className="w-full h-[200px] object-cover"
        width={1200}
        height={800}
      />
      <Link
        href={`/service/${slug}`}
        className="bg-primaryColor text-center text-white text-lg py-4 h-[100px] flex items-center justify-center"
      >
        {title}
      </Link>
    </div>
  );
}
