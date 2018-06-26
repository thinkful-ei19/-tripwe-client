import React from "react";
import AccommodationsFrom from "./accommodation-form";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

describe("<AccommodationsFrom />", () => {
  it("Should render without crashing", () => {
    shallow(<AccommodationsFrom />);
  });
});
