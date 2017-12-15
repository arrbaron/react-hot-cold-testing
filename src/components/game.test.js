import React from "react";
import { shallow, mount } from "enzyme";

import Game from "./game";

describe("<Game />", () => {
  let seedGuesses = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedGuesses.push(i);
    }
  });

  it("Renders without crashing", () => {
    shallow(<Game />);
  });
});