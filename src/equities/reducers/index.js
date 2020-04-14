const equities = (state = {}, action) => {
    const { type, id, value } = action;

    switch (type) {
        case "UPDATEFORMELEMENT":
            return { ...state, [id]: value };
        case "SUBMITFORM":
            return state;
        default:
            return state;
    }
};

export default equities;
