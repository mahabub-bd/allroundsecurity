import ContactForm from "./ContactFom";
import SocialIcons from "./SocialsLink";

export default function ContactFormInfo() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20  pt-40 lg:px-0 px-4  ">
      <div className="flex flex-col gap-6 ">
        <h3 className="text-base md:text-lg font-medium text-primaryColor">
          Contact Us
        </h3>

        {/* Get In Touch Section */}
        <div>
          <h4 className="text-4xl md:text-4xl lg:text-5xl font-bold text-primaryColor">
            Get In Touch
          </h4>
          <p className="text-sm md:text-base text-[#7A7A7A] w-4/5 leading-7 mt-2">
            Design is a broad category that encompasses various technological
            solutions.
          </p>
          <SocialIcons />
        </div>
      </div>

      <div className="border-2 border-[#e1e1e1] rounded-xl md:p-10 p-4">
        <ContactForm />
      </div>
    </section>
  );
}
