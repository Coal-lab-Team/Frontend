"use client";
import React, { useState } from "react";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import ScrollableCards from "@/components/ScrollCards";
import Testimonials from "@/components/Testimonials";
import Templates from "@/components/Templates";





export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Header/>
      <ScrollableCards/>
      {/* {children} */}
      <Templates/>
      <Testimonials/>
      <Footer />
    </>
  );
}
