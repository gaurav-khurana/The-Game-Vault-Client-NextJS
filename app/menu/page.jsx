import "./menu.scss";
import CloseIcon from "../assets/icons/close.svg";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router-dom";

function NavigationPage() {
  return (
    <>
      <main className="navigation">
        <section className="navigation__header">
          <div className="navigation__title-container">
            <Link href="/">
              <h2 className="navigation__title">[G] The Game Vault</h2>
            </Link>
          </div>
          <Link href="/">
            {/* <img */}
            <Image
              className="navigation__icon"
              src={CloseIcon}
              alt="Close Icon"
            />
          </Link>
        </section>
        <section className="navigation__body">
          <Link href="/games/xbox">
            <h2 className="body__title">Xbox</h2>
          </Link>
          <Link href="/games/ps">
            <h2 className="body__title">Playstation</h2>
          </Link>
        </section>
      </main>
    </>
  );
}

export default NavigationPage;
