import PageBanner from "@/components/common/PageBanner";
import ClientList from "@/components/landing/clients/ClientList";

export default function ClientsPage() {
  return (
    <section>
      <PageBanner pageName="Clients" />
      <div className="container mx-auto ">
        <ClientList isHomePage={false} />
      </div>
    </section>
  );
}
