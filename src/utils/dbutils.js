import { Database } from "arangojs";
import _ from "lodash";
import createLogger from "./logger";

const getConnection = () => new Database("http://localhost:8529");

const getEquities = () => getConnection().collection("equities");

const logger = createLogger();

const save = async (data) => {
    let saved = await getEquities().save(data);
    logger.debug(saved);

    return saved;
};

const update = async (object, delta) => {
    let updated = await getEquities().update(object, delta);
    logger.debug(updated);

    return updated;
};

const getById = async (id) => {
    let list = await getEquities().list([id]);
    logger.debug(list);

    return list;
};

export { getConnection, getEquities, save, update, getById };
