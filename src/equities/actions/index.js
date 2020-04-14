const UPDATEFORMELEMENT = "UPDATEFORMELEMENT";
const SUBMITFORM = "SUBMITFORM";

const updateFormElement = (id, value) => {
    return {
        type: UPDATEFORMELEMENT,
        id,
        value,
    };
};

const submitForm = () => {
    return {
        type: SUBMITFORM,
    };
};

export { updateFormElement, submitForm };
