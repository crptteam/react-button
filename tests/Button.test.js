import React from "react";
import { Button } from "../src/";

describe("Button", () => {
  it("Should renders without problems", () => {
    const wrapper = shallow(<Button>Click me</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
