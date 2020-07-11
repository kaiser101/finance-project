import { Database } from "arangojs";

const getConnection = () => new Database("http://localhost:8529");

const getEquities = () => getConnection().collection("equities");

const save = async (data) => await getEquities().save(data);

export { getConnection, getEquities, save };
