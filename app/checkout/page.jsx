"use client";
import "./checkoutpage.scss";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
// import { useLocation } from "react-router-dom";
// import Image from "next/image";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Accordian from "../components/accordian/accordian";

function CheckoutPage() {
  // const location = useLocation();
  // const { price, singleGame } = location.state;

  // console.log(singleGame);
  // console.log(price);
  // console.log(singleGame.title);
  // console.log(singleGame.image1);

  // const router = useRouter;
  // const price = router.query;
  // console.log(price);

  const searchParams = useSearchParams();
  console.log(searchParams);
  // console.log(searchParams.get(`${price}`));
  console.log(searchParams.get("search"));
  const price = searchParams.get("price");
  console.log(price);
  const title = searchParams.get("title");
  console.log(title);
  const image = searchParams.get("image");
  console.log(image);
  // console.log(searchParams.search);
  // console.log(searchParams.searchParams.singleGame);
  // console.log(searchParams.searchParams.price);

  return (
    <>
      <main className="checkout">
        <h2 className="checkout__title">Checkout</h2>

        <section className="checkout-container">
          <section className="checkout-cart">
            <img
              className="checkout-cart__image"
              src={image}
              alt={title}
              // width={390}
              // height={400}
            />
            <h3 className="checkout-cart__title">{title}</h3>
            {/* option 1 */}
            <h3 className="checkout-cart__title">{price}</h3>
            {/* option 2 */}
            {/* {price === price ? (
            <h3 className="checkout-cart__title">Purchase price {price}</h3>
          ) : (
            <h3 className="checkout-cart__title">Rental price {price}</h3>
          )} */}
          </section>

          <section className="checkout-accordian">{<Accordian />}</section>
        </section>
      </main>
    </>
  );
}

export default CheckoutPage;
