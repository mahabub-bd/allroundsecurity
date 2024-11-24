"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { aboutItems, navLinks } from "@/constants/data";
import { AboutItem, NavLink, Service } from "@/types/types";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { apiService } from "@/utilis/apiService";
import { LogoAllRound } from "../../../../public";

export default function MobileNavigation() {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [services, setServices] = useState<Service[] | null>(null); // Allow services to be null initially

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setOpenSubMenu(null); // Close any open submenu
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await apiService("service");
        setServices(fetchedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <HamburgerMenuIcon className="h-6 w-6 text-primaryColor shadow-xl" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Image src={LogoAllRound} alt="logo" width={120} />
        <div className="flex flex-col items-start gap-4 p-6">
          {navLinks?.map((link: NavLink) => (
            <div key={link.id} className="w-full">
              {link?.subMenu ? (
                <>
                  <button
                    className="text-lg font-medium hover:underline w-full text-left flex items-center justify-between"
                    onClick={() => toggleSubMenu(link.id)}
                  >
                    {link.text}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openSubMenu === link.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 ml-2" />
                    </motion.div>
                  </button>
                  {openSubMenu === link.id && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {link.text === "Services" &&
                        services?.map((service: Service) => (
                          <li key={service.id}>
                            <Link
                              href={`/service/${service.slug}`}
                              className="text-md font-normal hover:underline"
                              prefetch={false}
                              onClick={handleCloseDrawer}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      {link.text === "About Us" && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {aboutItems?.map((aboutLink: AboutItem) => (
                            <li key={aboutLink.id}>
                              <Link
                                href={aboutLink.href}
                                className="text-md font-normal hover:underline"
                                prefetch={false}
                                onClick={handleCloseDrawer}
                              >
                                {aboutLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                  onClick={handleCloseDrawer}
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
