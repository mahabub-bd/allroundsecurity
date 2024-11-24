import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Service } from "@/types/types";
import { apiService } from "@/utilis/apiService";
import React, { useEffect, useState } from "react";

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={`block select-none  rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

const ServicesMenu = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiService("service");
        setServices(data);
      } catch (err: any) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return <div className="p-3 text-red-500">{error}</div>;
  }

  return (
    <ul className="grid w-full md:w-[360px] gap-2 p-3">
      {loading
        ? Array.from({ length: 9 }).map((_, idx) => (
            <li key={idx} className="animate-pulse my-2">
              <div className="h-8 bg-gray-200 rounded-md"></div>
            </li>
          ))
        : services &&
          services.length > 0 &&
          services.map((service) => (
            <ListItem
              key={service.id}
              title={service.title}
              href={`/service/${service.slug}`}
            />
          ))}
    </ul>
  );
};

export default ServicesMenu;
