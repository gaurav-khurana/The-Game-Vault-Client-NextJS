"use client";
import "./checkoutpage.scss";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Accordian from "../components/Accordian/Accordian";
// import { Suspense } from "react";

function CheckoutPage() {
  // search url for data passed from ps or xbox game

  const searchParams = useSearchParams();

  const price = searchParams.get("price");

  const title = searchParams.get("title");

  const image = searchParams.get("image");

  return (
    <>
      <main className="checkout">
        <section className="checkout__logo-container">
          <Link href="/">
            <h2 className="checkout__logo">[G]</h2>
          </Link>
        </section>

        <h2 className="checkout__title">Checkout</h2>

        <section className="checkout-container">
          <section className="checkout-cart">
            <img className="checkout-cart__image" src={image} alt={title} />

            <h3 className="checkout-cart__title">{title}</h3>

            <h3 className="checkout-cart__title">{price}</h3>
          </section>

          <section className="checkout-accordian">{<Accordian />}</section>
        </section>
      </main>
    </>
  );
}

export default CheckoutPage;
