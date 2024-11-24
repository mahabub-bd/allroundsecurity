import { AboutItem } from "@/types/types";
import { aboutItems } from "../../constants/data";
import CustomLink from "../common/header/CustomLink";

export default function SideMenuAbout() {
  return (
    <aside className="md:p-8 p-6 bg-white shadow-xl rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primaryColor">
        About Us
      </h2>
      <div className="flex flex-col gap-3">
        {aboutItems.map(({ id, title, href }: AboutItem) => (
          <div key={id} className="group">
            <CustomLink path={href}>
              <div className="flex gap-3 items-center p-3 transition-shadow shadow-sm rounded-md">
                <p className="text-[15px] font-medium">{title}</p>
              </div>
            </CustomLink>
          </div>
        ))}
      </div>
    </aside>
  );
}
