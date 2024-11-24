"use client";
import Image from "next/image";
import { AboutImage } from "../../../public";
import SectionTitle from "../common/SectionTitle";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="container mx-auto mt-20 mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:ga-12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" px-5 w-full"
        >
          <SectionTitle
            align="left"
            topTitle="who we are"
            title="Commitment to Excellence in Security Solutions"
          />
          <p className="text-justify text-lg">
            ASLSL, established in 2018, prioritizes excellence and client
            satisfaction. With a dedicated workforce and skilled body guards,
            they offer personalized body guard solutions. ASLSL, with a broad
            presence in 20+ districts, delivers 15+ specialized services. Guided
            by excellence and client values, they customize security guard and
            global body guard solutions for each client.
          </p>
          <button className="bg-primaryColor px-16 py-3 text-white rounded-lg mt-7">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-full px-4 lg:px-0 "
        >
          <Image src={AboutImage} alt="About" />
        </motion.div>
      </div>
    </section>
  );
}
