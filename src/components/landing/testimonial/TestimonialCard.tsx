import { Testimonial } from "@/types/types";
import { imagePath } from "@/utilis/helper";
import Image from "next/image";

export default function TestimonialCard({
  ceoName,
  name,
  attachment,
  message,
}: Testimonial) {
  return (
    <div className="flex flex-col items-center bg-[#ECF4FF] rounded-xl p-4 gap-4">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
        <Image
          src={imagePath(attachment.path)}
          alt={name}
          width={500}
          height={500}
        />
      </div>

      <div className="text-center space-y-2">
        <p className="text-base text-gray-600 leading-relaxed sm:text-lg line-clamp-3">
          {message}
        </p>
        <h3 className="font-semibold text-xl text-primaryColor">{ceoName}</h3>
      </div>
    </div>
  );
}
