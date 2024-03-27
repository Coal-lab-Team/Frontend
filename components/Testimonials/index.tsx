// import React from "react";
// import Image from "next/image";

// const TextContent =
//   "Their design process is really unique. They collaborated with us on our project. The communication was simple and transparent. They have a talented team of designers.";
// interface CardProps {
//   header: string;
//   subheader: string;
//   content: string;
//   image: string; 
// }

// const Card: React.FC<CardProps> = ({ header, subheader, content, image }) => (
//   <div
//     className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
//     style={{ width: "270px", minHeight: "198px" }} // Set minHeight to ensure consistent height
//   >
//     <div className="card-header flex items-center mb-4">
//       {" "}
//       {/* Added margin bottom */}
//       <Image
//         src={image}
//         alt={header}
//         width={62}
//         height={62}
//         className="mr-2"
//       />{" "}
//       {/* Added margin right */}
//       <div>
//         <h3 className="text-lg font-semibold">{header}</h3>
//         <h4 className="text-sm text-gray-500">{subheader}</h4>
//       </div>
//     </div>

//     {/* Added padding top */}
//     <div className="card-content">
//       <p>{content}</p>
//     </div>
//   </div>
// );

// function Testimonials() {
//   return (
//     <div className="  flex flex-col items-center justify-center px-4  ">
//       <div className=" flex-col items-center flex gap-[8px] mb-[32px]">
//         <p className="  text-lg font-normal leading-7 tracking-tighter">
//           Testimonials
//         </p>
//         <h2 className="  text-center text-4xl md:text-2xl sm:text-xl font-bold leading-10 tracking-tighter">
//           What Designers are saying
//         </h2>
//       </div>

//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ml-2 mb-8  ">
//         <div className="col-span-1">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Dianne Russell"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         {/* Add more Card components here to fill the grid */}
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Dianne Russell"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Mark Renault"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Dianne Hamilton"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Laurent Reynald"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header=" Reynold Ives"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Gregory whitney"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header=" Pierre Mascot"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//         <div className="col-span-1 ">
//           <Card
//             image="/assets/ClientDP.svg"
//             header="Courtney Henry"
//             subheader="Product Manager"
//             content={TextContent}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;





// Contents with Animation=======



import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialData {
  header: string;
  subheader: string;
  content: string;
  image: string;
}

const testimonialsData: TestimonialData[] = [
  {
    image: "/assets/ClientDP.svg",
    header: "Alice Smith",
    subheader: "Software Engineer",
    content:
      "I was blown away by the level of detail and innovation in their designs. They truly understand the tech landscape and how to create user-friendly experiences.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Bob Johnson",
    subheader: "Tech Enthusiast",
    content:
      "The team's expertise in technology shines through in every aspect of their work. From UI design to functionality, they exceeded my expectations.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Carol Williams",
    subheader: "Product Manager",
    content:
      "Working with them was a game-changer for our product. Their tech-driven approach led to significant improvements in user engagement and satisfaction.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "David Jones",
    subheader: "IT Consultant",
    content:
      "Their attention to detail and deep understanding of technology trends make them stand out in the industry. I highly recommend their services for any tech-related project.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Eva Brown",
    subheader: "Software Developer",
    content:
      "I've collaborated with many design teams, but none have impressed me as much as this one. Their tech-centric approach ensures that every design decision is backed by solid reasoning.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Frank Miller",
    subheader: "Tech Blogger",
    content:
      "I've reviewed countless tech products and platforms, and I can confidently say that the work produced by this team is top-notch. They are setting new standards in the industry.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Gina Thompson",
    subheader: "UX Designer",
    content:
      "As a fellow designer, I admire their commitment to pushing the boundaries of what's possible in tech design. Their creations are not only visually stunning but also highly functional.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Henry Clark",
    subheader: "Tech Entrepreneur",
    content:
      "Their designs are not just aesthetically pleasing; they are strategically crafted to drive user engagement and retention. They have a keen eye for what works in the tech industry.",
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Irene Davis",
    subheader: "Digital Marketer",
    content:
      "Their designs have played a crucial role in our marketing campaigns. They understand how technology can be leveraged to create compelling brand experiences that resonate with our audience.",
  },
];

const Card: React.FC<TestimonialData> = ({
  header,
  subheader,
  content,
  image,
}) => (
  <motion.div
    className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
    style={{ width: "270px", minHeight: "198px" }}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    {/* Motion shapes */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      {/* Small animated circles */}
      <motion.div
        className="circle"
        style={{
          width: "10px",
          height: "10px",
          background: "red",
          borderRadius: "50%",
          position: "absolute",
        }}
        animate={{
          x: [0, 10, 0],
          y: [0, 10, 0],
          rotate: [0, 180, 360],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="circle"
        style={{
          width: "20px",
          height: "20px",
          background: " blue",
          borderRadius: "50%",
          position: "absolute",
        }}
        animate={{
          x: [0, -10, 0],
          y: [0, -10, 0],
          rotate: [0, 180, 360],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>

    <div className="card-header flex items-center mb-4">
      <Image src={image} alt={header} width={62} height={62} className="mr-2" />
      <div>
        <h3 className="text-lg font-semibold">{header}</h3>
        <h4 className="text-sm text-gray-500">{subheader}</h4>
      </div>
    </div>
    <div className="card-content">
      <p>{content}</p>
    </div>
  </motion.div>
);

function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex-col items-center flex gap-[8px] mb-[32px]">
        <p className="text-lg font-normal leading-7 tracking-tighter">
          Testimonials
        </p>
        <h2 className="text-center text-4xl md:text-2xl sm:text-xl font-bold leading-10 tracking-tighter">
          What Tech Experts are Saying
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ml-2 mb-8">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
