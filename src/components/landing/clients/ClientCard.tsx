import { Client } from "@/types/types";
import { imagePath } from "@/utilis/helper";
import Image from "next/image";

export default function ClientCard({ attachment }: Client) {
  console.log(attachment);

  return (
    <div
      className=" md:w-60 w-50 h-32
        flex justify-center items-center rounded-2xl shadow-2xl 
        hover:shadow-md transition-shadow duration-300 ease-in-out "
    >
      <Image
        src={imagePath(attachment.path)}
        alt="client"
        width={180}
        height={180}
        className="
           transition-transform duration-300 ease-in-out
          hover:scale-105 p-1"
      />
    </div>
  );
}
