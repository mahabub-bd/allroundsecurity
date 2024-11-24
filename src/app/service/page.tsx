import PageBanner from "@/components/common/PageBanner";
import ServicesList from "@/components/landing/services/ServicesList";
import ServicesFormSection from "@/components/service-page/ServicesFormSection";

export default function page() {
  return (
    <>
      <PageBanner pageName="Services" />
      <div className="container mx-auto md:py-10 py-5">
        <ServicesList />
        <ServicesFormSection />
      </div>
    </>
  );
}
