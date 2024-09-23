import { animals, uniqueNamesGenerator } from "unique-names-generator";

function generateNumber() {
    return parseInt(Math.random().toFixed(8).replace("0.", ""));
}

function generateUniqueName() {
    const randomName = uniqueNamesGenerator({
        dictionaries: [animals],
        length: 1,
    });
    return randomName;
}


export default {
    generateNumber,
    generateUniqueName
};
