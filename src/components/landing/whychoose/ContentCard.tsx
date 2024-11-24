import { Security } from "@/types/types";

export default function ContentCard({ title, description }: Security) {
  return (
    <div className="md:px-0 px-2">
      <h6 className="text-lg font-semibold py-3 text-primaryColor">{title}</h6>
      <p className="md;text-base text-sm text-justify">{description}</p>
    </div>
  );
}
