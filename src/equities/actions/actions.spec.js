import { updateFormElement, submitForm } from "./index";

test("Returns me a form element object and type", () => {
    expect(updateFormElement("name", "Sudharma")).toStrictEqual({
        type: "UPDATEFORMELEMENT",
        id: "name",
        value: "Sudharma",
    });
});

test("Updates the entire form", () => {
    expect(submitForm()).toStrictEqual({
        type: "SUBMITFORM",
    });
});
