import { Stats } from "@/types/types";

const StatsCard = ({ id, title, description }: Stats) => {
  return (
    <div className="bg-primaryColor text-white flex justify-center items-center flex-col py-6 md:px-0 px-4 stat-clip-path">
      <h2 className="md:text-4xl text-2xl font-bold capitalize">{title}</h2>
      <p className="md:text-lg text-[13px] pt-1">{description}</p>
    </div>
  );
};

export default StatsCard;
