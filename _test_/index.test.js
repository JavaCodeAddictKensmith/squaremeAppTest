/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Transfer from "../src/app/transfers/page";
// import { describe, it } from "node:test";
import "@testing-library/jest-dom";

describe("Transfer", () => {
  it("renders a heading", () => {
    render(<Transfer />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
