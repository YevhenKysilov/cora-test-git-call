const SHA256 = require("crypto-js/sha256");

module.exports = (data) => {
    data.hash = SHA256(data.payload).toString();
    delete data.payload;
    
    return data;
}