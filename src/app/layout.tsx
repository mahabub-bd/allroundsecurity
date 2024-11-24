import Footer from "@/components/common/footer/Footer";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/common/header/Navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ALLROUND SECURITY",
  description: "Edge of technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <div className="relative w-full">
          <Navbar />
          <Toaster />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
