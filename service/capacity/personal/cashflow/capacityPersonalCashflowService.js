const {  cashflowPersonal,profitAndLossPersonal } = require('../../../../data');

/**
 * Retrieves the cashflow personal by the specified profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve the cashflow personal for.
 * @returns {Array|object} - An array of cashflow personal objects that match the profile ID, or an object with a message property indicating that cashflow details cannot be provided at this time.
 */
const getCashflowPersonalById = async (profileID) => {
    try {
        const filteredData =  cashflowPersonal.filter((data) => data.profileID === profileID);
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
 * Retrieves the profit and loss summary details for a given profile ID.
 *
 * @param {string} profileID - The ID of the profile to retrieve the data for.
 * @returns {Array | Object} - An array of filtered profit and loss data if found, or an object with an error message if not found.
 */
const getProfitLossPersonalById = async (profileID) => {
    try {
        const filteredData =  profitAndLossPersonal.filter((data) => data.profileID === profileID);
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
    getCashflowPersonalById,
    getProfitLossPersonalById
}