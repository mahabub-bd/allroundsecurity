import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  ImageUrl: StaticImageData | string;
}

export default function ImageCard({ ImageUrl }: ImageCardProps) {
  return (
    <div className="border border-slate-100 p-2 rounded-lg ">
      <Image
        src={ImageUrl}
        alt="Gallery Image"
        className="rounded-md h-72 "
        width={700}
        height={500}
      />
    </div>
  );
}
