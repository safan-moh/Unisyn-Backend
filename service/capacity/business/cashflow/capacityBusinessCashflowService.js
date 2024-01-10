const {  businessCashflow,profitAndLossBusiness } = require('../../../../data');

/**
 * Retrieves the cashflow business data for a specific profile ID.
 *
 * @param {type} profileID - The ID of the profile for which to retrieve cashflow data.
 * @return {Promise} Returns a promise that resolves with the filtered cashflow data for the specified profile ID. If no data is found, it returns an object with a message property indicating that cashflow details cannot be provided at this time. If an error occurs, the promise is rejected with the error.
 */
const getCashflowBusinessById = async (profileID) => {
    try {
        const filteredData =  businessCashflow.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Cashflow details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
};

/**
 * Retrieves the profit and loss summary for a specific business profile.
 *
 * @param {string} profileID - The ID of the business profile.
 * @return {Array|Object} - An array of profit and loss summary objects filtered by the given profile ID. If no data is found, an object with a message property will be returned.
 */
const getProfitLossBusinessById = async (profileID) => {
    try {
        const filteredData =  profitAndLossBusiness.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Profit and loss Summary details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
};

module.exports = {
    getCashflowBusinessById,
    getProfitLossBusinessById
}