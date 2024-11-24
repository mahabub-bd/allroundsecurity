import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PageBannerBg } from "../../../public";

const PageBanner = ({ pageName }: { pageName: string }) => {
  return (
    <section
      className="text-white py-20"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, .66), transparent), url(${PageBannerBg.src})`,
        backgroundSize: "cover",
        backgroundPositionY: "top ",
      }}
    >
      <div className="container mx-auto md:p-0 p-6">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-6">{pageName}</h2>
          <nav aria-label="breadcrumb">
            <ol className="inline-flex items-center space-x-2  py-2 rounded-md text-base">
              <li className="text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-100">
                <ChevronRightIcon />
              </li>
              <li aria-current="page" className="text-white">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
