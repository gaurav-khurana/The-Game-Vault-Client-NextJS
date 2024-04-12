"use client";
import "./xboxproductpage.scss";
import XboxHero from "../../assets/images/xbox.png";
// import XboxHero from "../../assets/images/xbox2.jpeg";
import HeartGreen from "../../assets/icons/heart-green.svg";
import LeftGreen from "../../assets/icons/left-key-green.svg";
import RightGreen from "../../assets/icons/right-key-green.svg";
// import { Link } from "react-router-dom";
import GameCard from "../../components/gamecard/gamecard";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

function XboxProductPage() {
  // state to set all games

  const [allGames, setAllGames] = useState([]);

  // useEffect to do axios call to GET all playstation games
  useEffect(() => {
    async function getAllXboxGames() {
      const response = await axios.get(
        // `${import.meta.env.VITE_BASE_URL}/games/ps`
        `http://localhost:8080/games/xbox`
      );

      console.log(response.data);

      setAllGames(response.data);
    }
    getAllXboxGames();
  }, [setAllGames]);

  return (
    allGames && (
      <>
        <main className="xbox">
          <section className="xbox-hero">
            <Link href="/">
              <h2 className="xbox-hero__logo">[G]</h2>
            </Link>

            <h2 className="xbox-hero__title">Xbox</h2>

            <Image
              className="xbox-hero__image"
              src={XboxHero}
              alt="Xbox controller"
            />
          </section>

          <section className="xbox-icons-container">
            <div className="xbox-icons-group">
              <div className="xbox-icon-container">
                <Image
                  className="xbox-icon__image"
                  src={HeartGreen}
                  alt="All Xbox games icon"
                />

                <h3 className="xbox-icon__text">All</h3>
              </div>

              <div className="xbox-icon-container">
                <Image
                  className="xbox-icon__image"
                  src={LeftGreen}
                  alt="Icon in Green for Rental option"
                />

                <h3 className="xbox-icon__text">Rent</h3>
              </div>

              <div className="xbox-icon-container">
                <Image
                  className="xbox-icon__image"
                  src={RightGreen}
                  alt="Icon in blue for Buying option"
                />

                <h3 className="xbox-icon__text">Buy</h3>
              </div>
            </div>
          </section>

          <section className="xbox-titles-container">
            {/* map func here to serve image & data to GameCard */}
            {allGames?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
            {/* <GameCard />
            <GameCard /> */}
          </section>
        </main>
      </>
    )
  );
}

export default XboxProductPage;
