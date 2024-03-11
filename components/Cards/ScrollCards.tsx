// import React, { useRef } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import { IoIosArrowForward } from "react-icons/io";
// import Card from "./Card";


// interface ScrollableCardsProps {
//   cards: {
//     header: string;
//     subheader: string;
//     content: string;
//   }[];
// }

// const ScrollableCards: React.FC<ScrollableCardsProps> = ({ cards }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft -= 100; // Example: Scroll 100 pixels to the left
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft += 100; // Example: Scroll 100 pixels to the right
//     }
//   };

//   return (
//     <div className="scrollable-container flex items-center">
//       <button
//         onClick={scrollLeft}
//         className=" hover:bg-gray-300 rounded-full p-2 mr-2"
//       >
//         <BsArrowLeft className="text-gray-300" />
//       </button>
//       <div className="scrollable-content overflow-x-auto flex" ref={scrollRef}>
//         <div className="cards flex space-x-4">
//           {cards.map((card, index) => (
//             <Card key={index} {...card} />
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={scrollRight}
//         className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2"
//       >
//         {/* <BsArrowRight className="text-gray-600" /> */}
//         <IoIosArrowForward />
//       </button>
//     </div>
//   );
// };

// export default ScrollableCards;


