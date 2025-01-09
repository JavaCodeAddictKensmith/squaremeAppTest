/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Transfer from "../src/app/transfers/page";
import AccountsPage from "@/app/accounts/page";
import Settings from "@/app/settings/page";

import GetStarted from "@/app/get-started/page";
// import { describe, it } from "node:test";
import "@testing-library/jest-dom";

describe("Transfer", () => {
  it("renders a heading", () => {
    render(<Transfer />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

// test account component

describe("AccountPage", () => {
  it("renders a heading", () => {
    render(<AccountsPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

// test Setting component

describe("Settings", () => {
  it("renders a heading", () => {
    render(<Settings />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
//tests get started

describe("GetStarted", () => {
  it("renders a heading", () => {
    render(<GetStarted />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
