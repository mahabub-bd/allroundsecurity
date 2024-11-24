import PageBanner from "@/components/common/PageBanner";
import ContactFormInfo from "@/components/contact-page/ContactFormInfo";
import ContactInfoArea from "@/components/contact-page/ContactInfoArea";
import Location from "@/components/contact-page/Location";
import { Suspense } from "react";
import Loading from "./loading";

export default function ContctPage() {
  return (
    <section>
      <PageBanner pageName="Contact Us" />
      <div className="container mx-auto relative z-20 md:px-0 px-4">
        <div className="relative z-20 mb-14 overflow-hidden">
          <Suspense fallback={<Loading />}>
            <Location />
          </Suspense>
        </div>
        <div className="absolute md:bottom-[-15%] bottom-[-50%] z-50 left-0 right-0 ">
          <ContactInfoArea />
        </div>
      </div>

      <div className="py-10">
        <ContactFormInfo />
      </div>
    </section>
  );
}
