// "use client";
// import Link from "next/link";
import "./GameCard.scss";
import Image from "next/image";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
// import Spiderman from "../../assets/images/spiderman1.png";
// import { Link, useNavigate } from "react-router-dom";

function GameCard({ game, params }) {
  console.log(game);
  console.log(game.id);
  // const { console } = useParams;

  // const navigate = useNavigate();
  const router = useRouter();
  // const getId = router.query.id;
  // params.id = game.id;
  // console.log(params);

  // const id = game.id;
  // console.log(id);
  // const id = params.id;

  const handleConsole = () => {
    if (game.id >= 1 && game.id <= 10) {
      // <Link href={`/games/xbox/${game.id}`} />;
      // <Link href={`/games/xbox/[id]}`} />;
      // redirect(`/games/xbox/${game.id}`);
      // router.push(`/games/xbox/[id]`);
      router.push(`/games/xbox/${game.id}`);

      return;
    }
    if (game.id >= 11 && game.id <= 20) {
      // navigate(`/games/ps/${game.id}`);
      // <Link href={`/games/xbox/${game.id}}`} />;
      // <Link href={`/games/xbox/${encodeURIComponent(game.id)}}`} />;
      // <Link
      //   href={{
      //     pathname: "/ps/[id]",
      //     query: { id: game.id },
      //   }}
      // />;
      // redirect(`/games/ps/${game.id}`);
      // router.push(`/games/ps/[game.id]`);
      router.push(`/games/ps/${game.id}`);
      // router.push({
      //   pathname: "games/ps/[id]",
      //   query: { id: game.id },
      // });
      return;
    }
  };

  return (
    <>
      <article className="gamecard" onClick={handleConsole}>
        {/* <Link to={`/games/ps/${game.id}`}> */}
        {/* <Link to={`/games/xbox/${game.id}`}> */}
        {/* <Link to={`/games/${console}/${game.id}`}> */}
        {/* <img
          className="gamecard__image"
          src={game.image1}
          //   src={Spiderman}
          alt={`Image of ${game.title}`}
        /> */}
        {/* <Image */}
        <img
          className="gamecard__image"
          src={game.image1}
          alt={`Image of ${game.title}`}
          // sizes="100vw, 40rem"
          width={390}
          height={400}
          // fill={true}
        />

        <h3 className="gamecard__title">{game.title}</h3>

        {/* <h3 className="gamecard__title">Spiderman 2 Miles Morales</h3> */}
        {/* </Link> */}
      </article>
    </>
  );
}

export default GameCard;
