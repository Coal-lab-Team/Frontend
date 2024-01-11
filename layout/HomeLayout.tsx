'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navs/navbar';
import Footer from '@/components/Footer/footer';
export default function HomeLayout({
  children
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