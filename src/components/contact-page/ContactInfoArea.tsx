import { contactInfo } from "@/constants/data";
import { contactInfoType } from "@/types/types";

import Image from "next/image";
import Link from "next/link"; // Import Next.js Link

export default function ContactInfoArea() {
  return (
    <div className="bg-primaryColor mx-5 md:mx-24 rounded-[20px]">
      <div className="grid md:grid-cols-3 grid-cols-1 md:px-10 px-5 md:gap-4 gap-10 md:place-items-center place-items-start">
        {contactInfo.map((item: contactInfoType) => (
          <div
            key={item.id}
            className="flex gap-4 text-white items-center py-4 md:py-5"
          >
            <Image src={item.icon} alt={item.title} className="size-16" />
            <div className="flex flex-col gap-1 ">
              <h5 className="text-lg font-bold">{item.title}</h5>
              {item.title === "Phone" ? (
                <Link
                  href={`tel:${item.info}`}
                  className="text-base text-gray-50 cursor-pointer"
                >
                  {item.info}
                </Link>
              ) : item.title === "Email" ? (
                <Link
                  href={`mailto:${item.info}`}
                  className="text-base text-gray-50 cursor-pointer"
                >
                  {item.info}
                </Link>
              ) : (
                <p className="text-base text-gray-50">{item.info}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
