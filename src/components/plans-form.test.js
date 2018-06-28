import React from "react";
import { shallow } from "enzyme";
import PlansForm from "./plans-form";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<PlansForm />", () => {
  it("Renders without crashing", () => {
    shallow(<PlansForm />);
  });
});
