import React from "react";
import { shallow } from "enzyme";
import FixedDeposits from "./index";

describe("It renders the Fixed Depositrs component", () => {
    it("Renders the top level component with an h1 tag", () => {
        const component = shallow(<FixedDeposits />);
        const h1tag = component.find("h1");
        expect(h1tag.text()).toBe("FixedDeposits");
    });
});
