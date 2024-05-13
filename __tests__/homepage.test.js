import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../app/homepage/page";

describe("HomePage", () => {
  it("renders the home page", () => {
    render(<HomePage />);

    const heading = screen.getByText(/The Game Vault/i);
    const subTitle = screen.getByText(/open the vault/i);

    expect(heading).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
