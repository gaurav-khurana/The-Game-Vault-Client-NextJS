import "@testing-library/jest-dom";
import { render, screen, container } from "@testing-library/react";
import PlaystationProductPage from "@/app/games/ps/page";

describe("Playstation Product Page", () => {
  it("renders Playstation Product Page Successfully", () => {
    render(<PlaystationProductPage />);

    expect(screen.getByRole("link", { name: "[G]" })).toBeInTheDocument();
    // expect(screen.getByRole("link", { name: /[G]/i })).toBeInTheDocument();
    expect(screen.getByText("Playstation")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Rent")).toBeInTheDocument();
    expect(screen.getByText("Buy")).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    // expect(images).toHaveProperty("src");
    // expect(images).toHaveProperty("alt");

    expect(images).toHaveLength(4);
    // expect(images).toBeInTheDocument();

    // expect(screen.getAllByAltText("icon")).toBeInTheDocument();
  });
});
