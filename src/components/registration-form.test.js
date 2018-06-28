import React from "react";
import RegistrationForm from "./registration-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegistrationForm />", () => {
  it("Should render without crashing", () => {
    shallow(<RegistrationForm />);
  });
});
