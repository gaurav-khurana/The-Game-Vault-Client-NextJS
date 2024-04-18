"use client";
import "./XboxProductDetailsPage.scss";
import Cart from "../../../assets/icons/cart.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function XboxProductDetailsPage(params) {
  // state to set all games

  const [singleGame, setSingleGames] = useState({});
  const [price, setPrice] = useState("");

  // useEffect to do axios call to get single game by id

  useEffect(() => {
    async function getSingleGame() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/games/xbox/${params.params.id}`
      );

      setSingleGames(response.data);
    }

    getSingleGame();
  }, [setSingleGames, params.params.id]);

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
        <main className="xbox-game">
          <section className="xbox-game-header">
            <Link href="/">
              <h2 className="xbox-game-header__logo">[G]</h2>
            </Link>

            <h2 className="xbox-game-header__title">{singleGame.title}</h2>
          </section>

          <section className="xbox-game-container">
            <section className="xbox-game-about">
              <div className="xbox-game-about-container">
                <h3 className="xbox-game-about__subtitle">Compatibility</h3>

                <h2 className="xbox-game-about__title">
                  {singleGame.platform}
                </h2>
              </div>

              <div className="xbox-game-about-container">
                <h3 className="xbox-game-about__subtitle">About the game</h3>

                <h2 className="xbox-game-about__title">{singleGame.genre}</h2>
              </div>
            </section>

            <section className="xbox-game-price" onChange={handlePrice}>
              <div className="xbox-game-price-container">
                <h3 className="xbox-game-price__subtitle">Rent</h3>

                <label className="xbox-game-price__title" htmlFor="price15days">
                  <input
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price15days"
                  />
                  {singleGame.price_15days} every two weeks
                </label>

                <label className="xbox-game-price__title" htmlFor="price30days">
                  <input
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price30days"
                  />
                  {singleGame.price_30days} every four weeks
                </label>
              </div>

              <div className="xbox-game-price-container">
                <h3 className="xbox-game-price__subtitle">Purchase</h3>

                <label className="xbox-game-price__title" htmlFor="price">
                  <input
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price"
                  />
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
                <div className="xbox-game-price__button">
                  <Image
                    className="xbox-game-price__button-icon"
                    src={Cart}
                    alt="Cart icon"
                  />
                  <h3 className="xbox-game-price__button-subtitle">
                    Add to cart
                  </h3>
                </div>
              </Link>
            </section>

            <section className="xbox-game-hero">
              <img
                className="xbox-game-hero__image"
                src={singleGame.image1}
                alt="Hero image for game"
              />
            </section>

            <section className="xbox-game-capabilities">
              <h3 className="xbox-game-capabilities__title">Capabilities</h3>

              <section className="xbox-game-capabilities-container">
                <div className="xbox-game-capabilities__text-container">
                  <h2 className="xbox-game-capabilities__text xbox-game-capabilities__text--small">
                    {singleGame.players}
                  </h2>

                  <h2 className="xbox-game-capabilities__text xbox-game-capabilities__text--small">
                    {singleGame.ratings}
                  </h2>
                </div>

                <h2 className="xbox-game-capabilities__text">
                  Developed by : {singleGame.developer}
                </h2>

                <h2 className="xbox-game-capabilities__text">
                  Release date : {singleGame.release_date}
                </h2>

                <h2 className="xbox-game-capabilities__text">
                  {singleGame.online_play}
                </h2>
              </section>
            </section>

            <section className="xbox-game-description">
              <h3 className="xbox-game-description__title"> Description</h3>
              <p className="xbox-game-description__text">
                {singleGame.description}
              </p>
            </section>

            <section className="xbox-game-gallery">
              <img
                className="xbox-game-gallery__image"
                src={singleGame.image2}
                alt={`image for ${singleGame.title}`}
              />

              <img
                className="xbox-game-gallery__image"
                src={singleGame.image3}
                alt={`image for ${singleGame.title}`}
              />

              <img
                className="xbox-game-gallery__image"
                src={singleGame.image4}
                alt={`image for ${singleGame.title}`}
              />

              <img
                className="xbox-game-gallery__image"
                src={singleGame.image5}
                alt={`image for ${singleGame.title}`}
              />

              <img
                className="xbox-game-gallery__image"
                src={singleGame.image1}
                alt={`image for ${singleGame.title}`}
              />
            </section>
          </section>
        </main>
      </>
    )
  );
}

export default XboxProductDetailsPage;
