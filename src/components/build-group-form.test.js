import React from "react";
import BuildGroupForm from "./build-group-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<BuildGroupForm  />", () => {
  it("Should render without crashing", () => {
    shallow(<BuildGroupForm />);
  });
});
