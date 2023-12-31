import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StateContextProvider from "@/context/StateContext";
import Navbar from "@/components/navs/navbar";
import Footer from "@/components/footer/footer";
import GotoTop from "@/components/GotoTop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coal Loab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>
          
          {children}
          
          <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
