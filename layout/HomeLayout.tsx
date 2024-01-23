"use client";
import React, { useState } from "react";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
