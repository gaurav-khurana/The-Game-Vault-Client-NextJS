"use client";
import "./playstationproductdetailspage.scss";
import Cart from "../../../assets/icons/cart.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GameCarousel from "../../../components/carousel/Carousel";

function PlaystationProductDetailsPage({ params }) {
  // state to set all games

  const [singleGame, setSingleGames] = useState({});
  const [price, setPrice] = useState("");

  // useEffect to do axios call to get single game by id

  useEffect(() => {
    async function getSingleGame() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/games/ps/${params.id}`
      );

      setSingleGames(response.data);
    }

    getSingleGame();
  }, [setSingleGames, params.id]);

  // event handler to get price selected by user

  const handlePrice = (event) => {
    event.preventDefault();

    if (event.target.checked && event.target.id === "price") {
      setPrice(singleGame.price);
    }
    if (event.target.checked && event.target.id === "price15days") {
      setPrice(singleGame.price_15days);
    }
    if (event.target.checked && event.target.id === "price30days") {
      setPrice(singleGame.price_30days);
    }
  };

  return (
    singleGame && (
      <>
        <main className="ps-game">
          <section className="ps-game-header">
            <Link href="/">
              <h2 className="ps-game-header__logo">[G]</h2>
            </Link>

            <h2 className="ps-game-header__title">{singleGame.title}</h2>
          </section>

          <section className="ps-game-container">
            <section className="ps-game-about">
              <div className="ps-game-about-container">
                <h3 className="ps-game-about__subtitle">Compatibility</h3>

                <h2 className="ps-game-about__title">{singleGame.platform}</h2>
              </div>
              <div className="ps-game-about-container">
                <h3 className="ps-game-about__subtitle">About the game</h3>

                <h2 className="ps-game-about__title">{singleGame.genre}</h2>
              </div>
            </section>

            <section className="ps-game-price" onChange={handlePrice}>
              <div className="ps-game-price-container">
                <h3 className="ps-game-price__subtitle">Rent</h3>

                <label className="ps-game-price__title" htmlFor="price15days">
                  <input
                    className="ps-game-price__radio"
                    type="radio"
                    name="price15days"
                    id="price15days"
                  />
                  {singleGame.price_15days} every two weeks
                </label>

                <label className="ps-game-price__title" htmlFor="price30days">
                  <input
                    className="ps-game-price__radio"
                    type="radio"
                    name="price30days"
                    id="price30days"
                  />
                  {singleGame.price_30days} every four weeks
                </label>
              </div>

              <div className="ps-game-price-container">
                <h3 className="ps-game-price__subtitle">Purchase</h3>

                <label className="ps-game-price__title" htmlFor="price">
                  <input
                    className="ps-game-price__radio"
                    type="radio"
                    name="price"
                    id="price"
                  />{" "}
                  {singleGame.price}
                </label>
              </div>

              <Link
                href={{
                  pathname: "/checkout",
                  query: {
                    price: price,
                    title: singleGame.title,
                    image: singleGame.image1,
                  },
                }}
              >
                <div className="ps-game-price__button">
                  <Image
                    className="ps-game-price__button-icon"
                    src={Cart}
                    alt="Cart icon"
                  />
                  <h3 className="ps-game-price__button-subtitle">
                    Add to cart
                  </h3>
                </div>
              </Link>
            </section>

            <section className="ps-game-hero">
              <Image
                className="ps-game-hero__image"
                src={singleGame.image1}
                alt="Hero image for game"
                width={390}
                height={400}
                quality={100}
              />
            </section>

            <section className="ps-game-capabilities">
              <h3 className="ps-game-capabilities__title">Capabilities</h3>
              <div className="ps-game-capabilities-container">
                <h2 className="ps-game-capabilities__text">
                  {singleGame.online_play}
                </h2>

                <div className="ps-game-capabilities__text-container">
                  <h2 className="ps-game-capabilities__text ps-game-capabilities__text--small">
                    {singleGame.players}
                  </h2>

                  <h2 className="ps-game-capabilities__text ps-game-capabilities__text--small">
                    {singleGame.ratings}
                  </h2>
                </div>

                <h2 className="ps-game-capabilities__text">
                  Developed by : {singleGame.developer}
                </h2>

                <h2 className="ps-game-capabilities__text">
                  Release date : {singleGame.release_date}
                </h2>
              </div>
            </section>

            <section className="ps-game-description">
              <h3 className="ps-game-description__title"> Description</h3>
              <p className="ps-game-description__text">
                {singleGame.description}
              </p>
            </section>

            <section className="ps-game-gallery">
              {/* <img */}
              <Image
                className="ps-game-gallery__image"
                src={singleGame.image2}
                alt={`image for ${singleGame.title}`}
                width={390}
                height={400}
              />
              {/* <img */}
              <Image
                className="ps-game-gallery__image"
                src={singleGame.image3}
                alt={`image for ${singleGame.title}`}
                width={390}
                height={400}
              />
              {/* <img */}
              <Image
                className="ps-game-gallery__image"
                src={singleGame.image4}
                alt={`image for ${singleGame.title}`}
                width={390}
                height={400}
              />
              {/* <img */}
              <Image
                className="ps-game-gallery__image"
                src={singleGame.image5}
                alt={`image for ${singleGame.title}`}
                width={390}
                height={400}
              />
              {/* <img */}
              <Image
                className="ps-game-gallery__image"
                src={singleGame.image1}
                alt={`image for ${singleGame.title}`}
                width={390}
                height={400}
              />
            </section>

            <section className="ps-game-carousel">
              <GameCarousel singleGame={singleGame} />
            </section>
          </section>
        </main>
      </>
    )
  );
}

export default PlaystationProductDetailsPage;
