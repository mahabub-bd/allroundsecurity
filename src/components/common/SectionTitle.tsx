import { SectionTitleProps } from "@/types/types";

export default function SectionTitle({
  title,
  topTitle,
  description,
  align,
}: SectionTitleProps) {
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      <h1 className="  text-[18px] text-primaryColor py-2 cursor-default">
        {topTitle}
      </h1>

      <h2 className=" md:text-[30px] text-[20px] font-medium mt-1 text-black ">
        {title}
      </h2>
      <p className=" text-[18px]   text-center mt-1 text-primaryColor">
        {description}
      </p>
    </div>
  );
}
