'use client';
import React, { useState } from 'react';
import Navbar from '@/components/navs/navbar';
import Footer from '@/components/footer/footer';
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