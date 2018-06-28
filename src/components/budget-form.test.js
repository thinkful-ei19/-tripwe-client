import React from "react";
import BudgetForm from "./budget-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<BudgetForm  />", () => {
  it("Should render without crashing", () => {
    shallow(<BudgetForm />);
  });
});
