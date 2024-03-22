import React from "react";

const TextContent =
  "Their design process is really unique. They collaborated with us on our project. The communication was simple and transparent. They have a talented team of designers.";
interface CardProps {
  header: string;
  subheader: string;
  content: string;
  image: string; // Path to the image
}




const Card: React.FC<CardProps> = ({ header, subheader, content, image }) => (
  <div
    className="card flex flex-row mr-2 p-4 border border-gray-200 rounded-md shadow-md relative mt-2"
    style={{ width: "335px", height: "198px" }}
  >
    <div className="card-image  flex px-4  items-start">
      <img src={image} alt={header} />
      <div className="flex flex-col  ml-2">
        <h3 className="text-lg font-semibold">{header}</h3>
        <h4 className="text-sm text-gray-500">{subheader}</h4>
      </div>
    </div>

    {/* <div className="card-content flex ">
      <p className="mt-2">{content}</p>
    </div> */}
  </div>
);


function index() {
  return (
    <div className="  flex flex-col items-center justify-center px-4 sm:px-8 ">
      <div className=" flex-col items-center flex gap-[8px] mb-[32px]">
        <p className=" items-center justify-center text-lg font-normal leading-7 tracking-tighter">
          Testimonials
        </p>
        <h2 className="  text-center text-4xl md:text-2xl sm:text-xl font-bold leading-10 tracking-tighter">
          What Designers are saying
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 justify-start items-start  ml-2">
        <div className="col-span-1 ">
          <Card
            image="/assets/ClientDP.svg"
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
        {/* Add more Card components here to fill the grid */}
        {/* <div className="col-span-1 ">
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
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
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
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
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
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div>
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
            header="Dianne Russell"
            subheader="Product Manager"
            content={TextContent}
          />
        </div> */}
      </div>
    </div>
  );
}

export default index;
