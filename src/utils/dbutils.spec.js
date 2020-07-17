import { getConnection, getEquities, save, update, getById } from "./dbutils";
// configure("./filename");

describe("This file contains all db utility methods", () => {
    test("Returns a database connection", async () => {
        let connection = await getConnection();
        expect(connection).toBeTruthy();
    });

    test("Returns the equities collection", async () => {
        let equities = await getEquities();
        expect(equities).toBeTruthy();
    });

    test("Saves the equities object", async () => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        let saved = await save(equity);
        expect(saved._key).toBeTruthy();
    });

    test("Updates the equities object", async () => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        let delta = {
            quantity: 2500,
        };

        let saved = await save(equity);
        // console.debug(saved);

        let updated = await update(saved, delta);
        console.debug(updated);

        let doc1 = await getById(updated._id);
        expect(doc1.quantity).toEqual(2500);
    });

    test("Gets the equities object by id", async () => {
        let equity = {
            isin: "BSE",
            quantity: 2000,
            unitPrice: 250.25,
        };

        let saved = await save(equity);
        let id = saved._id;
        let fetched = await getById(id);
        expect(fetched.quantity).toBe(2000);
    });

    test("Check promises, dont forget the return", () => {
        return save({ isin: "SBI" }).then((resp) => {
            console.debug(resp);
            let id = resp._id;
            return getById(id).then((resp) => {
                console.debug(resp);
                expect(resp.isin).toMatch("SBI");
            });
        });
    });
});
