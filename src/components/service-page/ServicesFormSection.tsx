import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/contact-page/ContactFom";
import Image from "next/image";
import { ServicesSectionImage } from "../../../public";

export default function ServicesFormSection() {
  return (
    <div className="py-10 md:px-0 px-2">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <Image src={ServicesSectionImage} alt="service" />
        </div>
        <div className="px-2 flex flex-col gap-4">
          <SectionTitle
            topTitle="Talk To Us"
            align="left"
            title="Strategic Solutions"
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
