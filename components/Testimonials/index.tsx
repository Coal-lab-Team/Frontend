import React from "react";
import Image from "next/image";

const TextContent =
  "Their design process is really unique. They collaborated with us on our project. The communication was simple and transparent. They have a talented team of designers.";
interface CardProps {
  header: string;
  subheader: string;
  content: string;
  image: string; 
}

const Card: React.FC<CardProps> = ({ header, subheader, content, image }) => (
  <div
    className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
    style={{ width: "270px", minHeight: "198px" }} // Set minHeight to ensure consistent height
  >
    <div className="card-header flex items-center mb-4">
      {" "}
      {/* Added margin bottom */}
      <Image
        src={image}
        alt={header}
        width={62}
        height={62}
        className="mr-2"
      />{" "}
      {/* Added margin right */}
      <div>
        <h3 className="text-lg font-semibold">{header}</h3>
        <h4 className="text-sm text-gray-500">{subheader}</h4>
      </div>
    </div>

    {/* Added padding top */}
    <div className="card-content">
      <p>{content}</p>
    </div>
  </div>
);

function Testimonials() {
  return (
    <div className="  flex flex-col items-center justify-center px-4  ">
      <div className=" flex-col items-center flex gap-[8px] mb-[32px]">
        <p className="  text-lg font-normal leading-7 tracking-tighter">
          Testimonials
        </p>
        <h2 className="  text-center text-4xl md:text-2xl sm:text-xl font-bold leading-10 tracking-tighter">
          What Designers are saying
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ml-2 mb-8  ">
        <div className="col-span-1">
          <Card
            image="/assets/ClientDP.svg"
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        {/* Add more Card components here to fill the grid */}
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Mark Renault"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Dianne Hamilton"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Laurent Reynald"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header=" Reynold Ives"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Gregory whitney"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header=" Pierre Mascot"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Courtney Henry"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;


