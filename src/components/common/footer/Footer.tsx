import { Service } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { LogoDark } from "../../../../public";
import Social from "../Social";
import HelpfulLinks from "./HelpfulLinks";
import { apiService } from "@/utilis/apiService";

export default async function Footer() {
  const services: Service[] = await apiService("service");

  return (
    <footer className="bg-footerbgColor">
      <div className="container mx-auto px-4 lg:px-0 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-5 flex  md:flex-row items-center  lg:gap-6 gap-10 justify-around">
            <div className="flex flex-col items-center">
              <Image src={LogoDark} alt="logo" width={120} height={120} />
              <div className="pt-6">
                <Social className="text-white justify-center md:justify-start" />
              </div>
            </div>
            <HelpfulLinks />
          </div>

          <div className="md:col-span-7 lg:col-span-3">
            <h6 className="font-bold text-lg text-white mb-4  ">Services</h6>
            <ul className=" text-whiteColor">
              {services &&
                services.length > 0 &&
                services.map((service: Service) => (
                  <li
                    key={service.id}
                    className="text-[14px] hover:text-[#46A4AD] transition-colors mb-2"
                  >
                    <Link href={service.slug}>{service.title}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-lg text-white mb-4">Contact Us</h4>
            <p className="text-white text-justify leading-7 text-[14px]">
              Ka-25, Abdul Aziz Sharok, Jagannathpur, Vatara, Dhaka-1229,
              Bangladesh
            </p>

            <div className="my-4 text-white space-y-3">
              <div className="space-y-2">
                <ContactItem
                  icon={<AiFillPhone className="mr-2" />}
                  href="tel:+8801979927723"
                  text="+88 01711 791 183"
                />
                <ContactItem
                  icon={<AiFillPhone className="mr-2" />}
                  href="tel:+8801979927723"
                  text="+88 01709 927 723"
                />
              </div>
              <div className="space-y-2">
                <ContactItem
                  icon={<AiOutlineMail className="mr-2" />}
                  href="mailto:weprotect@allroundbd.com"
                  text="weprotect@allroundbd.com"
                />
                <ContactItem
                  icon={<AiOutlineMail className="mr-2" />}
                  href="mailto:allround.weprotect@gmail.com"
                  text="allround.weprotect@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#15477D] py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 px-4 sm:px-8">
          <p className="text-white text-base text-center md:text-left">
            ©2024 ALLROUND SECURITY. All Rights Reserved.
          </p>
          <p className="text-white text-center md:text-right">
            Design & Develop by
            <Link href="https://www.techqul.com">
              {" "}
              <span className="font-semibold"> Techqul</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Reusable Contact Item Component
function ContactItem({
  icon,
  href,
  text,
}: {
  icon: React.ReactNode;
  href: string;
  text: string;
}) {
  return (
    <div className="flex items-center">
      {icon}
      <Link href={href}>{text}</Link>
    </div>
  );
}
