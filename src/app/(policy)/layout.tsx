import PageBanner from "@/components/common/PageBanner";
import PolicyMenu from "@/components/policy/PolicyMenu";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PageBanner pageName="Policy" />
      <div className="container mx-auto px-4 sm:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-5 md:py-10">
          <div className="lg:col-span-8 2xl:col-span-9 order-2 lg:order-1">
            {children}
          </div>

          <div className="lg:col-span-4 2xl:col-span-3 order-1 lg:order-2 mb-6 lg:mb-0">
            <PolicyMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
