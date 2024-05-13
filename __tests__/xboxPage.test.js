import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import XboxProductPage from "@/app/games/xbox/page";

test("should render Xbox Product Page", () => {
  render(<XboxProductPage />);

  expect(screen.getByText(/xbox/i)).toBeInTheDocument();

  expect(screen.getByRole("link", { name: `[G]` })).toBeInTheDocument();

  expect(screen.getByText("All")).toBeInTheDocument();
  expect(screen.getByText(/buy/i)).toBeInTheDocument();
  expect(screen.getByText(/rent/i)).toBeInTheDocument();
  expect(screen.getByText(/rent/i)).toBeVisible();

  const images = screen.getAllByRole("img");

  expect(images).toHaveLength(4);

  expect(images[0]).toHaveClass("xbox-hero__image");
  expect(images[1]).toHaveClass("xbox-icon__image");
  expect(images[2]).toHaveClass("xbox-icon__image");
  expect(images[3]).toHaveClass("xbox-icon__image");

  expect(images[3]).toContainHTML("alt");
  expect(images[3]).toContainHTML("src");
  expect(images[3]).toHaveAttribute("alt", "Icon in blue for Buying option");
});
