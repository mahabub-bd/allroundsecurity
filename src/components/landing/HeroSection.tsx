"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroBg, YoutubeIcon } from "../../../public";
import { apiService } from "@/utilis/apiService";

export default function HeroSection() {
  return (
    <section
      className="md:h-[650px]  h-[400px] relative "
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.0), rgba(21, 71, 125, 0.80)),url(${HeroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute md:top-80 top-20 md:left-28 lg:left-44 left-6"
      >
        <h1 className="md:text-3xl text-xl font-bold text-white">
          We Have an amazing Security Guard and Global Body Guard Service
        </h1>
        <p className="text-white  text-lg mt-2">
          Are you in need of top-notch Security Guard or Special Bodyguard
          Service?
        </p>
        <div className="mt-8 bg-primaryColor rounded-lg md:py-4 py-3 md:px-4 px-3 text-md uppercase text-white gap-2 inline-flex">
          <Image src={YoutubeIcon} alt="youtube" />
          <Link className="" href="/">
            See How We Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
