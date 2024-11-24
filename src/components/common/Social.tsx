import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook, BsStackOverflow } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";

interface SocialProps {
  className?: string;
}

export default function Social({ className = "flex-row" }: SocialProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Link
        href="https://www.linkedin.com/company/allroundbd"
        className="cursor-pointer text-xl"
        target="_blank"
        aria-label="LinkedIn Profile"
      >
        <span className="h-10 w-10 bg-buttoncColor rounded-full inline-flex items-center justify-center hover:text-black hover:-translate-y-2 transition-all duration-300">
          <AiFillLinkedin />
        </span>
      </Link>

      <Link
        href="https://www.facebook.com/allroundbd2018"
        className="cursor-pointer text-xl"
        target="_blank"
        aria-label="Facebook Profile"
      >
        <span className="h-10 w-10 bg-buttoncColor rounded-full inline-flex items-center justify-center hover:text-black hover:-translate-y-2 transition-all duration-300">
          <BsFacebook />
        </span>
      </Link>
      <Link
        href="https://www.instagram.com/allroundbd"
        className="cursor-pointer text-xl"
        target="_blank"
        aria-label="instagram Profile"
      >
        <span className="h-10 w-10 bg-buttoncColor rounded-full inline-flex items-center justify-center hover:text-black hover:-translate-y-2 transition-all duration-300">
          <FaInstagram />
        </span>
      </Link>

      <Link
        href="https://x.com/allroundbd"
        className="cursor-pointer text-xl"
        target="_blank"
        aria-label="Stack Overflow Profile"
      >
        <span className="h-10 w-10 bg-buttoncColor rounded-full inline-flex items-center justify-center hover:text-black hover:-translate-y-2 transition-all duration-300">
          <FaTwitter />
        </span>
      </Link>
    </div>
  );
}
