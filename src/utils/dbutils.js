import { Database } from "arangojs";

const getConnection = () => new Database("http://localhost:8529");

const getEquities = () => getConnection().collection("equities");

const save = async (data) => {
    let saved = await getEquities().save(data);
    console.debug(saved);

    return saved;
};

const update = async (object, delta) => {
    let updated = await getEquities().update(object, delta);
    console.debug(updated);

    return updated;
};

const getById = async (id) => {
    let document = await getEquities().document(id);
    console.debug(document);

    return document;
};

export { getConnection, getEquities, save, update, getById };
