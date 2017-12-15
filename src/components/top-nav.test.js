import React from "react";
import { shallow, mount } from "enzyme";

import TopNav from "./top-nav";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });
});