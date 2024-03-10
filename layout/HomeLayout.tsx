"use client";
import React, { useState } from "react";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer";
import Header from "@/components/Header";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Header/>
      {children}
      <Footer />
    </>
  );
}
