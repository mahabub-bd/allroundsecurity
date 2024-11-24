"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { Serve } from "@/types/types";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ServeCard from "./ServeCard";
import { apiService } from "@/utilis/apiService";

export default function ServeList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const [serves, setServes] = useState<Serve[]>([]);

  useEffect(() => {
    const serveData = async () => {
      try {
        const fatchServes = await apiService("service-area");
        setServes(fatchServes);
      } catch (error: any) {
        console.error("Error");
      }
    };

    serveData();
  }, []);

  return (
    <section className="container mx-auto md:px-0 px-4">
      <SectionTitle
        title="We Serve with Excellence"
        description="Global bodyguard Service has collaborated with various sectors and industries, encompassing some major ones."
      />
      <div
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-12 gap-12 place-items-center"
        ref={ref}
      >
        {serves &&
          serves.length > 0 &&
          serves?.map((serve: any, index: number) => (
            <motion.div
              key={serve.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"} // Use the renamed inView
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ServeCard key={serve?.id} {...serve} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
