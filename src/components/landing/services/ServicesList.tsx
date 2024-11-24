"use client";
import { Service } from "@/types/types";
import { apiService } from "@/utilis/apiService";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../../common/SectionTitle";
import ServicesCard from "./ServicesCard";

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const servicesData = async () => {
      try {
        const services = await apiService("service");

        setServices(services);
      } catch (error: any) {
        console.error("Error");
      }
    };

    servicesData();
  }, []);

  return (
    <section className="container mx-auto">
      <SectionTitle
        topTitle="What We Serve"
        title="Streamline Your Business with Our Services"
        align="center"
      />
      <div
        className="grid 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2 grid-cols-1 py-12 gap-12 md:gap-8 md:px-4 px-0 place-items-center"
        ref={ref}
      >
        {services &&
          services.length > 0 &&
          services?.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"} // Use the renamed inView
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ServicesCard key={service?.id} {...service} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
