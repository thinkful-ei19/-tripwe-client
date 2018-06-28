import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./login-form";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<LoginForm />", () => {
  it("Renders without crashing", () => {
    shallow(<LoginForm />);
  });
});
