import React from "react";
import { shallow } from "enzyme";
import MutualFunds from "./index";

describe("It renders the Mutual Funds component", () => {
    it("Renders the top level component with an h1 tag", () => {
        const component = shallow(<MutualFunds />);
        const h1tag = component.find("h1");
        expect(h1tag.text()).toBe("MutualFunds");
    });
});
