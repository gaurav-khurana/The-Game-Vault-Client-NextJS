// import Image from "next/image";
import HomePage from "./homepage/page";
// import NavigationPage from "./menu/page";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <h1>The Game Vault</h1> */}
      <Link href="/">
        <HomePage />
      </Link>
      {/* <Link href="/menu">
        <NavigationPage />
      </Link> */}
    </>
  );
}
