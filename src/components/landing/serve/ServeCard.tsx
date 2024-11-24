import { Serve } from "@/types/types";

export default function ServeCard({ name }: Serve) {
  return (
    <div className="group hover:text-white">
      <div className="hover:bg-primaryColor hover:rounded-b-none rounded-xl bg-[#E2E2E2] md:min-w-[280px] min-w-[260px] h-24 flex justify-center items-center cursor-pointer">
        <h6 className="text-primaryColor group-hover:text-white md:text-base text-base text-center">
          {name}
        </h6>
      </div>
      <div className="bg-primaryColor group-hover:bg-[#E2E2E2] h-2 rounded-xl shadow-2xl"></div>
    </div>
  );
}
