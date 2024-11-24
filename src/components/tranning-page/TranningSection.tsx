import SectionTitle from "@/components/common/SectionTitle";

import Loading from "@/app/contact-us/loading";
import { GallaryImageData } from "@/types/types";
import { apiService } from "@/utilis/apiService";
import { imagePath } from "@/utilis/helper";
import { Suspense } from "react";
import ImageCard from "../landing/image-gallery/ImageCard";

export default async function TranningGallery() {
  const tranningImages: GallaryImageData[] = await apiService(
    "gallery?type=training"
  );

  return (
    <section className="container mx-auto my-10">
      <SectionTitle title="Tranning & Recognization" topTitle="Image gallery" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-10 ">
        <Suspense fallback={<Loading />}>
          {tranningImages &&
            tranningImages.length > 0 &&
            tranningImages.map(({ id, path }: GallaryImageData) => (
              <ImageCard key={id} ImageUrl={imagePath(path)} />
            ))}
        </Suspense>
      </div>
    </section>
  );
}
