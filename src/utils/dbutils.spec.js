import { getConnection, getEquities, save } from "./dbutils";

describe("This file contains all db utility methods", () => {
    it("Returns a database connection", () => {
        let connection = getConnection();
        expect(connection).toBeTruthy();
    });

    it("Returns the equities collection", () => {
        let equities = getEquities();
        expect(equities).toBeTruthy();
    });

    it("Saves the equities object", () => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        save(equity).then((response) =>
            expect(response._id).toBeGreaterThan(0)
        );
    });
});
