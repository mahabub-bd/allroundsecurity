import HierarchyManagement from "@/components/aboutus-page/HierarchyManagement";
import SectionTitle from "@/components/common/SectionTitle";

export default function OurTeam() {
  return (
    <section>
      <SectionTitle title="MEET OUR TEAM" />
      <p className="text-justify py-4">
        At Allround Security, we believe that our greatest strength lies in our
        people – their skills, passion, and dedication drive our success. Our
        executive team, the visionary leaders who guide our companys direction
        and inspire us to reach new heights. We have our own exceptional group
        of department heads, each an expert in their respective fields. Our
        success doesnt stop with our leadership. Our team is comprised of
        talented individuals with various functions. Each brings unique skills
        and perspectives to the table. Our dedicated research and development
        team, who continuously innovate and create cutting-edge solutions to
        ensure our clients receive top-notch service. Every member of our team
        plays a crucial role in our accomplishments.
      </p>

      <HierarchyManagement />
    </section>
  );
}
