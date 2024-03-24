import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ribbon from "./components/Ribbon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmacia Zulmita",
  description: "Venta de productos farmacéuticos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <Ribbon />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
