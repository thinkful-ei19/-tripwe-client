import React from "react";
import CreateNewTripForm from "./create-new-trip-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<CreateNewTripForm  />", () => {
  it("Should render without crashing", () => {
    shallow(<CreateNewTripForm />);
  });
});
