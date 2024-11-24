import ServiceDetails from "@/components/service-page/ServiceDetails";
import { SingleService } from "@/types/types";
import { apiService } from "@/utilis/apiService";

export default async function ServicePage({
  params,
}: {
  params: { "service-slug": string };
}) {
  const { "service-slug": serviceSlug } = params;

  const service: SingleService = await apiService(`service/${serviceSlug}`);

  if (!service) {
    return <div>Service not found.</div>;
  }

  return <ServiceDetails {...service} />;
}
