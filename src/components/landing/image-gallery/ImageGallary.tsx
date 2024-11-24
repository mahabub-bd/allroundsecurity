import SectionTitle from "@/components/common/SectionTitle";

import { GallaryImageData } from "@/types/types";
import { imagePath } from "@/utilis/helper";
import ImageCard from "./ImageCard";
import { apiService } from "@/utilis/apiService";

export default async function ImageGallery() {
  const imageGalleryData: GallaryImageData[] = await apiService("gallery");

  return (
    <section className="container mx-auto my-10">
      <SectionTitle title="Image Gallery" topTitle="gallery" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-10 ">
        {imageGalleryData &&
          imageGalleryData.length > 0 &&
          imageGalleryData.map(({ id, path }: GallaryImageData) => (
            <ImageCard key={id} ImageUrl={imagePath(path)} />
          ))}
      </div>
    </section>
  );
}
