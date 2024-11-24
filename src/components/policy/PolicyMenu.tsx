import { policylinks } from "@/constants/data";
import { HelpfulLink } from "@/types/types";
import CustomLink from "../common/header/CustomLink";

export default function PolicyMenu() {
  return (
    <aside className="md:p-8 p-6 bg-white shadow-xl rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primaryColor">
        Legal Information
      </h2>
      <div className="flex flex-col gap-3">
        {policylinks.map(({ id, path, name }: HelpfulLink) => (
          <div key={id} className="group">
            <CustomLink path={path}>
              <div className="flex gap-3 items-center p-3 transition-shadow shadow-sm rounded-md">
                <p className="text-[15px] font-medium">{name}</p>
              </div>
            </CustomLink>
          </div>
        ))}
      </div>
    </aside>
  );
}
