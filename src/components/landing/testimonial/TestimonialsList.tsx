"use client";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/types";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { apiService } from "@/utilis/apiService";

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await apiService("client/testimonial");
        setTestimonials(data);
      } catch (err: any) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <section className="container mx-auto md:py-10 py-4 lg:px-0 px-2">
      <SectionTitle
        topTitle="TESTIMONIAL"
        title="What People Say About Our Services"
      />
      <div>
        <Carousel
          className="pt-5 "
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials &&
              testimonials.length > 0 &&
              testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
