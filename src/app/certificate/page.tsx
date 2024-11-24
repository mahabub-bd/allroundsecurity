import CertificateSection from "@/components/certificate-page/CertificateSection";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";

export default function CertificatePage() {
  return (
    <section>
      <PageBanner pageName="Certificate" />
      <SectionTitle title="Certificate & Recognition" />
      <CertificateSection />
    </section>
  );
}
