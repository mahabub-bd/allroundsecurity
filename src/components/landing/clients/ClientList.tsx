"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { Client } from "@/types/types";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ClientCard from "./ClientCard";
import { apiService } from "@/utilis/apiService";

interface ClientListProps {
  isHomePage?: boolean;
}

export default function ClientList({ isHomePage = true }: ClientListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const fetchedClients = await apiService("client");
        setClients(fetchedClients);
      } catch (error: any) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="container mx-auto md:py-10 py-4">
      <SectionTitle title="Prominent Clients" topTitle=" Clients" />
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 md:gap-8 gap-2 py-10"
        ref={ref}
      >
        {clients &&
          clients.length > 0 &&
          clients.map((client: Client, index) => (
            <motion.div
              key={client.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ClientCard {...client} />
            </motion.div>
          ))}
      </div>

      {isHomePage && (
        <div className="flex items-center justify-center">
          <Link
            href="/clients"
            className="bg-primaryColor px-4 py-2 text-white text-center rounded-lg"
          >
            Load More
          </Link>
        </div>
      )}
    </section>
  );
}
