import { socialLinks } from "@/constants/data";
import { SocialLinkType } from "@/types/types";
import Link from "next/link";
import { FC } from "react";

const SocialIcons: FC = () => {
  return (
    <div className="flex gap-4 py-6">
      {socialLinks.map((social: SocialLinkType) => (
        <Link
          key={social.id}
          href={social.href}
          target="_blank"
          className="size-11 hover:bg-primaryColor rounded-sm border-[#E1E1E1] border flex items-center justify-center group"
        >
          {social.icon && (
            <social.icon className="w-5 h-5 text-[#31508c] group-hover:fill-white" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
