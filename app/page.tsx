
"use client";
import HomeLayout from "@/layout/HomeLayout";
import { Suspense, useEffect, useState } from "react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center mt-[2rem]">Loading...</div>
);

// Example asynchronous function
const fetchData = async () => {
  // Simulate fetching data
  return new Promise<string>((resolve) => {
    // explicitly specify the return type as string
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000); // Simulate a 2-second delay
  });
};

export default function Home() {
  // const [data, setData] = useState<string | null>(null); // explicitly specify the type as string or null

  // useEffect(() => {
  //   // Fetch data asynchronously
  //   fetchData().then((data: string) => {
  //     // explicitly specify the type of data received
  //     setData(data);
  //   });
  // }, []);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeLayout>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Render data when it's available */}
            {/* {data && <p>{data}</p>} */}
          </main>
        </HomeLayout>
      </Suspense>
    </>
  );
}
