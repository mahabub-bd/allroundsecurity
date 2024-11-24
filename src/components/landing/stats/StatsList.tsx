"use client";
import { stats } from "@/constants/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StatsCard from "./StatsCard";

export default function StatsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="container mx-auto mb-10">
      <div
        className="grid lg:grid-cols-4 grid-cols-2 md:gap-8 gap-4  px-1"
        ref={ref}
      >
        {stats.map((stat: any, index: number) => (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"} // Use the renamed inView
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <StatsCard
              key={stat?.id}
              id={stat?.id}
              title={stat?.title}
              description={stat?.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
