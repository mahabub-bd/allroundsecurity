import { Service } from "@/types/types";
import CustomLink from "../common/header/CustomLink";
import { apiService } from "@/utilis/apiService";

export default async function ServiceMenu() {
  const services: Service[] = await apiService("service");

  return (
    <aside className="md:p-6 p-4 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primaryColor">
        Services
      </h2>
      <div className="flex flex-col gap-2">
        {services &&
          services.length > 0 &&
          services?.map(({ id, slug, title }) => (
            <div key={id} className="group">
              <CustomLink path={slug}>
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
