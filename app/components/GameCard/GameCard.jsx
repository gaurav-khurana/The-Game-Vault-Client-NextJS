"use client";
import "./GameCard.scss";
import { useRouter } from "next/navigation";

function GameCard({ game }) {
  const router = useRouter();

  const handleConsole = () => {
    if (game.id >= 1 && game.id <= 10) {
      router.push(`/games/xbox/${game.id}`);

      return;
    }
    if (game.id >= 11 && game.id <= 20) {
      router.push(`/games/ps/${game.id}`);
      return;
    }
  };

  return (
    <>
      <article className="gamecard" onClick={handleConsole}>
        <img
          className="gamecard__image"
          src={game.image1}
          alt={`Image of ${game.title}`}
        />

        <h3 className="gamecard__title">{game.title}</h3>
      </article>
    </>
  );
}

export default GameCard;
