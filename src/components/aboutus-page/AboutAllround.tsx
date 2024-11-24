import Image from "next/image";
import { AboutImage } from "../../../public";

const AboutAllround = () => {
  return (
    <div className="py-8 container mx-auto lg:px-0 px-4">
      <div className="mb-8 flex flex-col lg:flex-row text-justify">
        <div className="xl:w-1/3 flex justify-center lg:justify-start p-4 hover:scale-95">
          <Image
            src={AboutImage}
            alt="Security Services"
            width={450}
            height={260}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <p className="mt-4">
            Welcome to Allround Security, your trusted partner in safeguarding
            what matters most. Established with a commitment to excellence,
            Allround Security provides comprehensive and reliable security
            solutions tailored to meet the unique needs of our clients. Our team
            of highly trained professionals is dedicated to offering top-tier
            protection, ensuring peace of mind and security for individuals and
            businesses alike.
          </p>
          <p className="mt-4">
            At Allround Security, we pride ourselves on our unwavering
            dedication to safety and customer satisfaction. Our services range
            from personal bodyguard protection to advanced security systems and
            emergency response. We work closely with our clients to understand
            their specific security requirements and deliver customized
            solutions that exceed expectations. Whether you need protection for
            a high-profile event or a comprehensive security plan for your
            business, we have the expertise and resources to deliver.
          </p>
          <p className="mt-4">
            Join us in our mission to provide unmatched security solutions and
            let Allround Security be your trusted partner in ensuring a safe and
            secure environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAllround;
