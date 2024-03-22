import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface CardProps {
  header: string;
  subheader: string;
  content: string;
  image: string; // Path to the image
  buttonText: string; // Text for the button
}

const Card: React.FC<CardProps> = ({
  header,
  subheader,
  content,
  image,
  buttonText,
}) => (
  <div
    className="card flex flex-col p-4 border border-gray-200 rounded-md shadow-md bg-[#B3C6C6] relative mt-2 whitespace-nowrap"
    style={{ width: "250px", minHeight: "300px" }}
  >
    <div className="card-image">
      <img src={image} alt={header} />
    </div>
    <div className="card-content">
      <h3 className="text-lg font-semibold">{header}</h3>
      <h4 className="text-sm text-gray-500">{subheader}</h4>
      <p className="mt-2">{content}</p>
    </div>
    <button className="absolute bottom-4 left-4 bg-[#FFC68A] text-white px-4 py-2 rounded-md">
      {buttonText}
    </button>
  </div>
);

interface ScrollableCardsProps {
  children: React.ReactNode;
}

const ScrollableCards: React.FC<ScrollableCardsProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100; // Example: Scroll 100 pixels to the left
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100; // Example: Scroll 100 pixels to the right
    }
  };

  return (
    <div className="scrollable-container relative">
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded-full p-2 left-0"
        style={{ zIndex: 1 }} // Ensure the arrow is above the cards
      >
        <IoIosArrowBack />
      </button>
      <div className="scrollable-content overflow-x-auto flex" ref={scrollRef}>
        <div className="cards flex space-x-4">{children}</div>
      </div>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded-full p-2 right-0"
        style={{ zIndex: 1 }} // Ensure the arrow is above the cards
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const CardScroll = () => (
  <ScrollableCards>
    <Card
      header="Painting "
      subheader="Basic of Painting"
      content="$25 . Canvas"
      image="/assets/Job.svg"
      buttonText="Illustrations"
    />
    <Card
      header="Card 2 Header"
      subheader="Card 2 Subheader"
      content="Card 2 Content"
      image="/assets/UI.svg"
      buttonText="Portfolio"
    />
    <Card
      header="Event Management"
      subheader="Ticket sales & attendee list"
      content="$30 · Figma"
      image="/assets/Job.svg"
      buttonText="Landing Pages"
    />
    <Card
      header="Event Management Site"
      subheader="Attendee list"
      content="$50 · Figma"
      image="/assets/Del.svg"
      buttonText="MockUps"
    />
    <Card
      header="Card 2 Header"
      subheader="Card 2 Subheader"
      content="Card 2 Content"
      image="/assets/UI.svg"
      buttonText="Templates"
    />
    <Card
      header="Ecommerce Web App"
      subheader="Mobile & desktop views"
      content="$36 · Sketch"
      image="/assets/Ecom.svg"
      buttonText="E-Commerce Template"
    />
    <Card
      header="Card 2 Header"
      subheader="Card 2 Subheader"
      content="Card 2 Content"
      image="/assets/Job.svg"
      buttonText="Portfolio"
    />
    <Card
      header="Card 1 Header"
      subheader="Card 1 Subheader"
      content="Card 1 Content"
      image="/assets/Tour.svg"
      buttonText="Illustrations"
    />
    <Card
      header="Card 2 Header"
      subheader="Card 2 Subheader"
      content="Card 2 Content"
      image="/assets/Tour.svg"
      buttonText="Portfolio"
    />
    <Card
      header="Card 3 Header"
      subheader="Card 3 Subheader"
      content="Card 3 Content"
      image="/assets/Job.svg"
      buttonText="Landing Pages"
    />
    <Card
      header="Card 1 Header"
      subheader="Card 1 Subheader"
      content="Card 1 Content"
      image="/assets/Ecom.svg"
      buttonText="Illustrations"
    />
    <Card
      header="Card 2 Header"
      subheader="Card 2 Subheader"
      content="Card 2 Content"
      image="/assets/Job.svg"
      buttonText="Portfolio"
    />
    <Card
      header="Card 3 Header"
      subheader="Card 3 Subheader"
      content="Card 3 Content"
      image="/assets/Job.svg"
      buttonText="Landing Pages"
    />
    <Card
      header="Card 4 Header"
      subheader="Card 4 Subheader"
      content="Card 4 Content"
      image="/assets/Ecom.svg"
      buttonText="MockUps"
    />
    <Card
      header="Card 5 Header"
      subheader="Card 5 Subheader"
      content="Card 5 Content"
      image="/assets/UI.svg"
      buttonText="Templates"
    />
    <Card
      header="Card 6 Header"
      subheader="Card 6 Subheader"
      content="Card 6 Content"
      image="/assets/Ecom.svg"
      buttonText="E-Commerce Template"
    />
    <Card
      header="Card 7 Header"
      subheader="Card 7 Subheader"
      content="Card 7 Content"
      image="/assets/Job.svg"
      buttonText="Product Showcase"
    />
    <Card
      header="Dashboard UI Kit"
      subheader="120+ components"
      content="$28 · Figma"
      image="/assets/UI.svg"
      buttonText="UI Design"
    />
    {/* Add more cards with different content and button texts as needed */}
  </ScrollableCards>
);

export default CardScroll;
