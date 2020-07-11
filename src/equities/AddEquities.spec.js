import React from "react";
import { shallow } from "enzyme";
import AddEquities from "./index";
import _ from "lodash";

describe("It renders the Equities component", () => {
    let component;

    beforeEach(() => {
        component = shallow(<AddEquities />);
        return component;
    });

    it("Renders the top level component with an h1 tag", () => {
        const h1tag = component.find("h1");
        expect(h1tag.text()).toBe("Equities");
    });

    it("Renders a button", () => {
        const clickMeButton = component.find("button");
        expect(clickMeButton.text()).toEqual("Click Me");
    });

    // it("Invokes method when button is clicked", () => {
    //     const clickMeButton = component.find("button");
    //     clickMeButton.simulate("click");
    //     expect(mockFunction).toBeCalled();
    // });
});

describe("Test form input elements", () => {
    let component;

    beforeEach(() => {
        component = shallow(<AddEquities />);
        return component;
    });

    it.each`
        id
        ${"name"}
        ${"sharename"}
        ${"isin"}
        ${"netRatePerShare"}
        ${"rateBeforeBrokerage"}
        ${"purchaseDate"}
        ${"sellDate"}
        ${"reference"}
        ${"applicationNumber"}
        ${"bonusShareQty"}
        ${"bonusShareDate"}
        ${"dividend"}
        ${"dividendDate"}
        ${"quantity"}
    `("updates state when text is entered", ({ id }) => {
        const textField = component.find("#".concat(id));
        textField.simulate("change", {
            target: { id, value: "Hello" },
        });
        expect(component.find("#".concat(id)).prop("value")).toEqual("Hello");
    });
});

// quantity    net rate per share ( after brokerage)   rate before brokerage   date of purchase    date of sell    Tracation Id/ref.no Application No. bonus share quantity    bonus share date    Divident    divident date
