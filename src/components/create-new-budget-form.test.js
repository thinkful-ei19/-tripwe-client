import React from "react";
import CreateNewBudgetForm from "./create-new-budget-form";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";

describe("<CreateNewBudgetForm  />", () => {
  it("Should render without crashing", () => {
    shallow(<CreateNewBudgetForm />);
  });
});
