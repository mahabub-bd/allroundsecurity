"use client";

import Loading from "@/app/contact-us/loading";
import { CertificateType } from "@/types/types";
import { apiService } from "@/utilis/apiService";
import { imagePath } from "@/utilis/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CertificateSection() {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data: CertificateType[] = await apiService("certificate");
        setCertificates(data);
      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError("Failed to load certificates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto py-5 md:py-10">
      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
          {certificates.map(({ id, attachment, name }) => (
            <div key={id} className="border border-primaryColor shadow-3xl">
              <Image
                src={imagePath(attachment.path)}
                alt={name}
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No certificates available at the moment.</p>
      )}
    </div>
  );
}
