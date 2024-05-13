// import "@testing-library/jest-dom";
// import { render, screen, waitFor } from "@testing-library/react";
// import axios from "axios";
// import XboxProductDetailsPage from "@/app/games/xbox/[id]/page";
// import "../app/games/xbox/page";

// jest.mock("../app/games/xbox/page");
// jest.mock("axios");

// describe("should render Xbox Product Details Page", () => {
//   beforeEach(() => {
//     axios.get.mockReset();
//   });

//   test("render Product details page with id", async () => {
//     const mockSingleGame = {
//       id: 1,
//       title: "Hogwarts Legacy",
//       release_date: "February 10, 2023",
//       description:
//         "Hogwarts Legacy is an upcoming action role-playing video game set in the Harry Potter universe.",
//       price: "$59.99",
//       price_15days: "$20.99",
//       price_30days: "$35.99",
//       platform: "Xbox One  Xbox Series X | S",
//       genre: "Action Role-Playing Open world",
//       developer: "Portkey Games",
//       players: "Single player",
//       online_play: "Single player offline",
//       ratings: "4.5 / 5",
//       image1: `${process.env.DB_STATIC}/static-files/images/HogwartsLegacy/Hogwarts1.webp`,
//       image2: `${process.env.DB_STATIC}/static-files/images/HogwartsLegacy/Hogwarts2.jpeg`,
//       image3: `${process.env.DB_STATIC}/static-files/images/HogwartsLegacy/Hogwarts3.jpeg`,
//       image4: `${process.env.DB_STATIC}/static-files/images/HogwartsLegacy/Hogwarts4.jpeg`,
//       image5: `${process.env.DB_STATIC}/static-files/images/HogwartsLegacy/Hogwarts5.jpeg`,
//     };
//     axios.get.mockResolvedValueOnce({ singleGame: mockSingleGame });

//     render(<XboxProductDetailsPage match={{ params: { id: 1 } }} />);

//     await waitFor(() => {
//       expect(axios.get).toHaveBeenCalledWith(`/games/xbox/${params.params.id}`);
//       expect(screen.getByText("Hogwarts Legacy"));
//     });
//   });
// });
