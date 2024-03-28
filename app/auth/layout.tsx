// "use client";
// import React from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Suspense } from "react";

// const queryClient = new QueryClient();
// const LoadingSpinner = () => (
//   <div className="flex item-center justify-center mt-[2rem]">Loading...</div> // Customized position to fit in the center
// );

// function layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Suspense fallback={<LoadingSpinner />}>
//         <QueryClientProvider client={queryClient}>
//           {children}
//         </QueryClientProvider>
//       </Suspense>
//     </>
//   );
// }

// export default layout;


import React from "react";
import Skeleton from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Suspense>
    </>
  );
}

const LoadingSkeleton = () => (
  <div className="flex items-center justify-center mt-[2rem]">
    <Skeleton circle={true} width={50} height={50} />
  </div>
);

export default Layout;
