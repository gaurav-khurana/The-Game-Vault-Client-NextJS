"use client";
import "./CheckoutPage.scss";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
// import { useLocation } from "react-router-dom";
// import Image from "next/image";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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

          <section
            className="checkout-accordian"
            //  onSubmit={handleForm}
          >
            <Accordion defaultExpanded>
              <AccordionSummary
                className="checkout-accordian__collapsed"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Contact Details
              </AccordionSummary>

              <AccordionDetails className="checkout-accordian-container">
                <label className="checkout-accordian__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="john doe"
                  // onInput={handleName}
                />

                <label className="checkout-accordian__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="checkout-accordian__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@example.com"
                  // onInput={handleEmail}
                />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Shipping
              </AccordionSummary>

              <AccordionDetails className="checkout-accordian-container">
                <label className="checkout-accordian__label" htmlFor="address">
                  {" "}
                  Address
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="address"
                  id="address"
                  // onChange={handleAddress}
                />

                <label className="checkout-accordian__label" htmlFor="city">
                  City
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="city"
                  id="city"
                  // onChange={handleCity}
                />

                <label className="checkout-accordian__label" htmlFor="code">
                  Postal Code
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="code"
                  id="code"
                  // onChange={handlePostalCode}
                />

                <label className="checkout-accordian__label" htmlFor="country">
                  Country
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="country"
                  id="country"
                  // onChange={handleCountry}
                />

                <div className="checkout-accordian__checkbox-container">
                  <input
                    className="checkout-accordian__checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label
                    className="checkout-accordian__checkbox-label"
                    htmlFor=""
                  >
                    Same for Billing Address
                  </label>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Payment
              </AccordionSummary>

              <AccordionDetails className="checkout-accordian-container">
                <div className="checkout-accordian__checkbox-container">
                  <input
                    className="checkout-accordian__checkbox"
                    type="checkbox"
                    name="creditcard"
                    id="creditcard"
                  />
                  <label
                    className="checkout-accordian__checkbox-label"
                    htmlFor="creditcard"
                  >
                    Credit card
                  </label>
                </div>

                {/* <div className="checkout-accordian__checkbox-container">
                <input
                  className="checkout-accordian__label"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label className="checkout-accordian__checkbox" htmlFor="">
                  Debit card
                </label>
              </div> */}

                <label
                  className="checkout-accordian__label"
                  htmlFor="cardnumber"
                >
                  {" "}
                  Card Number
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="cardnumber"
                  id="cardnumber"
                  placeholder="xxxx"
                  // onChange={handleCardNumber}
                />
                <label className="checkout-accordian__label" htmlFor="expdate">
                  {" "}
                  Expiration Date (MM/YY)
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="expdate"
                  id="expdate"
                  placeholder="MM/YY"
                  // onChange={handleExpDate}
                />

                <label className="checkout-accordian__label" htmlFor="cvv">
                  CVV
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="cvv"
                  id="cvv"
                  placeholder="xxx"
                  // onChange={handleCVV}
                />

                <label
                  className="checkout-accordian__label"
                  htmlFor="nameoncard"
                >
                  {" "}
                  Name on Card
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="nameoncard"
                  id="nameoncard"
                  placeholder="firstname lastname"
                  // onChange={handleCardName}
                />
              </AccordionDetails>

              <AccordionActions>
                <Button className="btn btn__cancel">Cancel</Button>
                <Link href="/orderconfirmation">
                  <Button
                    // variant="container"
                    // color="success"
                    className="btn btn__pay"
                  >
                    Pay Now
                  </Button>
                </Link>
              </AccordionActions>
            </Accordion>
          </section>
        </section>
      </main>
    </>
  );
}

export default CheckoutPage;
