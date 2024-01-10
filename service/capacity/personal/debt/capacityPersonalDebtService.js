const {  capacityPersonalDebt,morePersonalDetails } = require('../../../../data');
const debtToIncomeRatioFormula = require('../../../../utils/formulas/debt_income_ratio_formula');

/**
 * Retrieves the capacity personal debt data by profile ID.
 *
 * @param {string} profileID - The ID of the profile to retrieve the debt data for.
 * @return {Array|Object} - An array of filtered data if found, or an object with a message if not found.
 */
const getCapacityPersonalDebtById = async (profileID) => {
    try {
        const filteredData =  capacityPersonalDebt.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return {
                data : filteredData,
            };
        } else {
            return {
                message: "Debt details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
};

/**
 * Retrieves additional personal details by profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve details for.
 * @return {Array|Object} - An array of filtered personal details if found, or an object with a message if details cannot be provided.
 */
const getMoreDetailsPersonalById = async (profileID) => {
    try {
        const filteredData =  morePersonalDetails.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Debt details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
};

module.exports = {
    getCapacityPersonalDebtById,
    getMoreDetailsPersonalById
}