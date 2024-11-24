"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { securityDetails } from "@/constants/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { WhyChooseImage } from "../../../../public";
import ContentCard from "./ContentCard";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const refImg = useRef(null);
  const isInViewImg = useInView(ref, { once: true });
  const imgVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <section className="container mx-auto md:px-0 px-2">
      <SectionTitle
        topTitle="WHY CHOOSE US?"
        title="TOP LEVEL SECURITY"
        align="center"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8  my-10 ">
        <div
          className="flex flex-col lg:justify-start justify-center lg:items-start items-center lg:px-0 px-4"
          ref={refImg}
        >
          <motion.div
            variants={imgVariants}
            initial="initial"
            animate={isInViewImg ? "animate" : "initial"} // Use the renamed inView
            transition={{ duration: 0.5 }}
          >
            <Image
              src={WhyChooseImage}
              alt="whychoose"
              className="rounded-xl w-full"
            />
          </motion.div>
        </div>
        <div
          className="block md:grid md:grid-cols-2 place-content-start gap-10 lg:px-0 px-3"
          ref={ref}
        >
          {securityDetails.map((item: any, index: number) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"} // Use the renamed inView
              transition={{ duration: 0.4, delay: index * 0.3 }}
            >
              <ContentCard key={item?.id} {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
