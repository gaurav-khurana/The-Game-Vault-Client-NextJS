import HomePage from "./homepage/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/">
        <HomePage />
      </Link>
    </main>
  );
}
