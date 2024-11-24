"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { LogoDark } from "../../../../public";
import MobileNavigation from "./Mobile-Nav";
import { NavigationDemo } from "./Navigation";

function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-40 shadow-md py-2   px-4">
      <nav className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between w-full py-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="py-2">
              <Image src={LogoDark} alt="logo" height={60} />
            </Link>
          </motion.div>
          <div className="lg:flex hidden">
            <NavigationDemo />
          </div>
          <div className="lg:hidden flex">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
