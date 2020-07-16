import { getConnection, getEquities, save, update, getById } from "./dbutils";
// configure("./filename");

describe("This file contains all db utility methods", () => {
    beforeEach(() => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        getEquities().save(equity);
    });

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

    it("Updates the equities object", () => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        let delta = {
            quantity: 2500,
        };

        save(equity).then((response) => {
            expect(response._id).toBeGreaterThan(0);
            update(equity, delta).then((response) =>
                expect(response.quantity).toEqual(2500)
            );
        });
    });

    it("Gets the equities object by id", () => {
        getById(60063)
            .then((resp) => {
                console.log(resp);
                // expect(resp.quantity).toEqual(2500);
            })
            .catch((ex) => expect(ex).toMatch("error"));
    });
});
