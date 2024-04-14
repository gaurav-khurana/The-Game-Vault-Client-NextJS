import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Link from "next/link";

function Accordian() {
  return (
    <>
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
            defaultValue="John Doe"
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
            defaultValue="johndoe@thegamevault.com"
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
            Address
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="address"
            id="address"
            defaultValue="123, Privet Drive"
          />

          <label className="checkout-accordian__label" htmlFor="city">
            City
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="city"
            id="city"
            defaultValue="Vancouver"
          />

          <label className="checkout-accordian__label" htmlFor="code">
            Postal Code
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="code"
            id="code"
            defaultValue="V6J 4Y9"
          />

          <label className="checkout-accordian__label" htmlFor="country">
            Country
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="country"
            id="country"
            defaultValue="Canada"
          />

          <div className="checkout-accordian__checkbox-container">
            <input
              className="checkout-accordian__checkbox"
              type="checkbox"
              name="billing"
              id="billing"
              checked
            />
            <label className="checkout-accordian__checkbox-label" htmlFor="">
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
          <label className="checkout-accordian__label" htmlFor="cardnumber">
            Card Number
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="cardnumber"
            id="cardnumber"
            placeholder="xxxx"
            defaultValue="1234-xxxx-xxx-6789"
          />

          <label className="checkout-accordian__label" htmlFor="expdate">
            Expiration Date (MM/YY)
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="expdate"
            id="expdate"
            placeholder="MM/YY"
            defaultValue="12/24"
          />

          <label className="checkout-accordian__label" htmlFor="cvv">
            CVV
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="cvv"
            id="cvv"
            placeholder="xxx"
            defaultValue="123"
          />

          <label className="checkout-accordian__label" htmlFor="nameoncard">
            Name on Card
          </label>
          <input
            className="checkout-accordian__input"
            type="text"
            name="nameoncard"
            id="nameoncard"
            placeholder="firstname lastname"
            defaultValue="John Doe"
          />
        </AccordionDetails>

        <AccordionActions>
          <Button className="btn btn__cancel">Cancel</Button>

          <Link href="/orderconfirmation">
            <Button className="btn btn__pay">Pay Now</Button>
          </Link>
        </AccordionActions>
      </Accordion>
    </>
  );
}

export default Accordian;
