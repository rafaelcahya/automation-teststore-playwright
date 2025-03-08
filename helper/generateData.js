function generateNumber() {
    return parseInt(Math.random().toFixed(8).replace("0.", ""));
}

function generateRandomString() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export default {
    generateNumber,
    generateRandomString,
};
