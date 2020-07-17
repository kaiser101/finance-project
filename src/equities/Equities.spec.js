import React from "react";
import { shallow } from "enzyme";
import Equities from "./index";

describe("It renders the Mutual Funds component", () => {
    test("Renders the top level component with an h1 tag", () => {
        const component = shallow(<Equities />);
        const h1tag = component.find("h1");
        expect(h1tag.text()).toBe("Equities");
    });
});
