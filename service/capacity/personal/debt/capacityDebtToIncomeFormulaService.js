const { debt_to_income_ratio_formula } = require('../../../../data');

/**
 * Retrieves the department to income ratio formula by profile ID.
 *
 * @param {string} profileID - The ID of the profile.
 * @return {Promise<Array<Object>>|Object} - The filtered formula details or an error message.
 */
const getDebtToIncomeRatioFormulaById = async (profileID) => {
    try {
        const filteredData =  debt_to_income_ratio_formula.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Formula details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getDebtToIncomeRatioFormulaById
}