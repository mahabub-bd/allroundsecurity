"use client";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import { WhoWeAreOne, WhoWeAreTwo } from "../../../../public";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function WhoWeAre() {
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
    <section className="container mx-auto my-10">
      <SectionTitle
        topTitle="OUR NEWS PORTAL"
        title="Discover our news portal and blogs"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 py-10 lg:px-0 px-4">
        <motion.div
          variants={imgVariants}
          initial="initial"
          animate={isInViewImg ? "animate" : "initial"} // Use the renamed inView
          transition={{ duration: 0.5 }}
          className="w-full h-full order-1"
          ref={refImg}
        >
          <Image
            src={WhoWeAreOne}
            alt="WhoWeAre"
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid place-content-center  mx-auto order-2 lg:py-0 py-10 lg:px-8"
          ref={ref}
        >
          <h6 className="text-2xl text-primaryColor">
            A Comprehensive Guide to Essential Travel Services for Secure
            Travels
          </h6>
          <p className="pt-3  text-base text-black">14 Jul, 2024 I Mr. Josef</p>
          <p className="pt-5  text-justify text-black">
            Although traveling allows one to encounter new cultures and
            experiences, safety always comes first. Travel and tourism security
            services are committed to protecting your........
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="grid place-content-center  mx-auto lg:order-3 order-4 lg:py-0 lg:px-8 py-10"
        >
          <h6 className="text-2xl text-primaryColor">
            Securing Your World, One Step at a Time
          </h6>
          <p className="pt-3  text-base ">10 Jul, 2024 I Mr. Shaifq</p>
          <p className="pt-5  text-justify">
            In todays world, security is more than just a priority; its a
            necessity. As threats evolve and become more sophisticated, the need
            for comprehensive protection services has never been more critical.
            This is where bodyguard services come into play, offering
            unparalleled security and peace of mind to individuals and
            organizations alike.....
          </p>
        </motion.div>
        <motion.div
          className="w-full h-full lg:order-4 order-3"
          variants={imgVariants}
          initial="initial"
          animate={isInViewImg ? "animate" : "initial"} // Use the renamed inView
          transition={{ duration: 0.5 }}
          ref={refImg}
        >
          <Image
            src={WhoWeAreTwo}
            alt="WhoWeAre"
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
