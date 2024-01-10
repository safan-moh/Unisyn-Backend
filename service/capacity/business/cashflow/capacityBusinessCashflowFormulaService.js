const {cashflowFormula} = require('../../../../data');
/**
 * Retrieves the cash flow formula by profile ID.
 *
 * @param {number} profileID - The ID of the profile.
 * @return {Array|Object} - An array of filtered data or an object with an error message.
 */
const getCashFlowFormulaById = async (profileID) => {
    try {
        const filteredData =  cashflowFormula.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Full Debt Schedule cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getCashFlowFormulaById
}