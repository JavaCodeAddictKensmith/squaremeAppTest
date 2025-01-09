import { render } from "@testing-library/react";
import Transfer from "../src/app/transfers/page";
it("renders homepage unchanged", () => {
  const { container } = render(<Transfer />);
  expect(container).toMatchSnapshot();
});
