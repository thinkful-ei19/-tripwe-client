import React from "react";
import CreateNewAccommodationsForm from "./create-new-accommodations-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CreateNewAccommodationsForm  />", () => {
  it("Should render without crashing", () => {
    shallow(<CreateNewAccommodationsForm />);
  });
});
