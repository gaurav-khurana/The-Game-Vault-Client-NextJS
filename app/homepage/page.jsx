import Link from "next/link";
import "./homepage.scss";

function HomePage() {
  return (
    <>
      <main className="homepage">
        <div className="homepage-container">
          <h2 className="homepage__title">[G] The Game Vault</h2>

          <Link href="/menu">
            <h3 className="homepage__text">Open the vault</h3>
          </Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
