"use client";
import Image from "next/image";
import "./Carousel.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function GameCarousel({ singleGame }) {
  console.log(singleGame);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    // <section className="carousel">
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel__image-container"
    >
      <Carousel.Item>
        <Image
          className="carousel__image"
          src={singleGame.image2}
          alt="abc"
          width={390}
          height={400}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image3}
          alt="abc"
          // width={390}
          // height={400}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image4}
          alt="abc"
          // width={390}
          // height={400}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image5}
          alt="abc"
          // width={390}
          // height={400}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image1}
          alt="abc"
          // width={390}
          // height={400}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </section>
  );
}

export default GameCarousel;
