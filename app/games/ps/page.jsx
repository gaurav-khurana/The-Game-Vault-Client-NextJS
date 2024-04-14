"use client";
import "./PlaystationProductPage.scss";
import PsHero from "../../assets/images/ps.png";
import HeartBlue from "../../assets/icons/heart-blue.svg";
import LeftBlue from "../../assets/icons/left-key-blue.svg";
import RightBlue from "../../assets/icons/right-key-blue.svg";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

function PlaystationProductPage() {
  // state to set all games

  const [allGames, setAllGames] = useState([]);

  // useEffect to do axios call to GET all playstation games
  useEffect(() => {
    async function getAllPSGames() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/games/ps`
      );

      setAllGames(response.data);
    }
    getAllPSGames();
  }, [setAllGames]);

  return (
    allGames && (
      <>
        <main className="ps">
          <section className="ps-hero">
            <Link href="/">
              <h2 className="ps-hero__logo">[G]</h2>
            </Link>

            <h2 className="ps-hero__title">Playstation</h2>

            <Image
              className="ps-hero__image"
              src={PsHero}
              alt="Playstation controller"
            />
          </section>

          <section className="ps-icons-container">
            <div className="ps-icons-group">
              <div className="ps-icon-container">
                <Image
                  className="ps-icon__image"
                  src={HeartBlue}
                  alt="All Playstation games icon"
                />

                <h3 className="ps-icon__text">All</h3>
              </div>

              <div className="ps-icon-container">
                <Image
                  className="ps-icon__image"
                  src={LeftBlue}
                  alt="Icon in blue for Rental option"
                />

                <h3 className="ps-icon__text ps-icon__text--regular">Rent</h3>
              </div>

              <div className="ps-icon-container">
                <Image
                  className="ps-icon__image"
                  src={RightBlue}
                  alt="Icon in blue for Buying option"
                />

                <h3 className="ps-icon__text ps-icon__text--regular">Buy</h3>
              </div>
            </div>
          </section>

          <section className="ps-titles-container">
            {allGames?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </section>
        </main>
      </>
    )
  );
}

export default PlaystationProductPage;
