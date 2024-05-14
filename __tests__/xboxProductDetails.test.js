import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import XboxProductDetailsPage from "@/app/games/xbox/[id]/page";
import singleGameMock from "../__mocks__/singleGameMock";

jest.mock("axios");

describe("should render Xbox Product Details Page", () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("render Product details page WITHOUT ID", async () => {
    render(<XboxProductDetailsPage params={{ params: { id: undefined } }} />);
    const getSingleGame = jest.fn();
    const singleGameData = await getSingleGame();
    // act()
    expect(setSingleGames).toBe("");
    expect(singleGameData).toBe("");
    expect(screen.getByText("[G]")).toBeInTheDocument();
  });

  //   test("render Product details page with id", async () => {
  //     axios.get.mockResolvedValueOnce({ singleGame: singleGameMock });

  //     render(
  //       <XboxProductDetailsPage
  //         // params={({ params: { id: 1 } }, { singleGame: { singleGameMock } })}
  //         params={{ params: { id: 1 } }}
  //       />
  //     );

  //     // await waitFor(() => {
  //     //   //   expect(axios.get).toHaveBeenCalledWith(`/games/xbox/1`);
  //     //   expect(axios.get).toHaveBeenCalledWith(
  //     //     `${process.env.NEXT_PUBLIC_BASE_URL}/games/xbox/1`
  //     //   );
  //     //   expect(screen.getByText("Hogwarts Legacy")).toBeInTheDocument();
  //     // });
  //     const getSingleGame = jest.fn();
  //     const singleGameData = await getSingleGame();
  //     act(() => {});
  //     expect(singleGameData).toBe(singleGameMock[0]);
  //     expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  //     // expect(screen.getByText(/hogwarts/i)).toBeInTheDocument();

  //     // BASED ON DOCS
  //     // axios.get.mockResolvedValue({
  //     //   data: { singleGameMock },
  //     // });
  //     // const getSingleGame = jest.fn();
  //     // const singleGameData = await getSingleGame();
  //     // expect(singleGameData).toBe(singleGameMock[0]);
  //     // // expect(getSingleGame).toHaveBeenCalledWith(1);
  //     // render(<XboxProductDetailsPage match={{ params: { id: 1 } }} />);
  //   });
});
