import equities from "./index";

test("When update form is called with a key value pair then the form is updated", () => {
    expect(
        equities(
            {},
            {
                type: "UPDATEFORMELEMENT",
                id: "name",
                value: "Sudharma",
            }
        )
    ).toStrictEqual({
        name: "Sudharma",
    });
});

test("When submit form is called then the form is updated", () => {
    expect(
        equities(
            {
                name: "Sudharma",
            },
            {
                type: "SUBMITFORM",
            }
        )
    ).toStrictEqual({
        name: "Sudharma",
    });
});
