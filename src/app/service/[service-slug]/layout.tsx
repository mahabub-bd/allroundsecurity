import Loading from "@/app/contact-us/loading";
import PageBanner from "@/components/common/PageBanner";
import ServiceMenu from "@/components/service-page/ServiceMenu";
import { Suspense } from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PageBanner pageName="Service" />
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4 sm:px-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-5 md:py-10">
            {/* Main Content */}
            <div className="lg:col-span-8 2xl:col-span-9 order-2 lg:order-1">
              {children}
            </div>

            {/* Service Menu */}
            <div className="lg:col-span-4 2xl:col-span-3 order-1 lg:order-2 mb-6 lg:mb-0">
              <ServiceMenu />
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
