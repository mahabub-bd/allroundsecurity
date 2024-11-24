import { helpfullinks } from "@/constants/data";
import { HelpfulLink } from "@/types/types";
import Link from "next/link";

export default function HelpfulLinks() {
  return (
    <div className="mb-6 md:mb-0">
      <h1 className="font-bold text-lg text-white mb-4">Helpful Links</h1>
      <ul className="text-whiteColor grid md:grid-cols-1  ">
        {helpfullinks.map((link: HelpfulLink) => (
          <li
            key={link.id}
            className="mb-2 md:text-base text-[14px]  cursor-pointer"
          >
            <Link href={link.path} passHref legacyBehavior>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
