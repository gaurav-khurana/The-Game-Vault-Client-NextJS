import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Menu from "../app/menu/page";

describe("Menu", () => {
  it("renders Navigation Page", () => {
    render(<Menu />);

    const title = screen.getByRole("link", { name: /the game vault/i });
    const closeIcon = screen.findByAltText("close icon");
    const xbox = screen.getByRole("link", { name: /xbox/i });
    const playstation = screen.getByRole("link", { name: /playstation/i });

    expect(title).toBeInTheDocument();
    expect(closeIcon);
    expect(xbox).toBeInTheDocument();
    expect(playstation).toBeInTheDocument();
  });
});
