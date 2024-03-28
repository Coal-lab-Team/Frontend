"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

const queryClient = new QueryClient();
const LoadingSpinner = () => (
  <div className="flex item-center justify-center mt-[2rem]">Loading...</div> // Customized position to fit in the center
);

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Suspense>
    </>
  );
}

export default layout;
