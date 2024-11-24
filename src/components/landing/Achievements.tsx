"use client";
import { achievements } from "@/constants/data";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export default function Achievements() {
  return (
    <section className="bg-primaryColor py-2">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-2">
          {achievements.map((item) => (
            <div
              key={item?.id}
              className="bg-primaryColor text-white flex justify-center items-center flex-col py-6 px-4 rounded-lg "
            >
              <h2 className="md:text-4xl text-2xl font-bold capitalize flex gap-2">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(item.value)}
                  locale="en-US"
                />

                {item?.postfix}
              </h2>
              <p className="md:text-lg text-sm pt-1">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
