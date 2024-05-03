const { rejects } = require("assert");

/**
 * 
 * This file contains a function that takes an arg and returns a resolved promise
 * @param {boolean} success - argument to see whether API is successful
 * @returns {Promise} = REsolved promise to an object data is success is true
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({data: "Successful response from the API"});
        } else {
            // Do nothing incase failure, the promise is not resolves
            resolve();
        }
    });
}
module.exports = getPaymentTokenFromAPI;