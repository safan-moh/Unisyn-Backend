const { debt_service_coverage_ratio_formula } = require('../../../../data');

/**
 * Retrieves the capacity business debt DSCR formula service.
 *
 * @param {number} profileID - The ID of the profile to filter the data.
 * @return {Array|object} - The filtered data or an object with a message if no data is found.
 */
const getCapacityBusinessDebtDSCRFormulaService = async (profileID) => {
    try {
        const filteredData =  debt_service_coverage_ratio_formula.filter((data) => data.profileID === profileID);
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
    getCapacityBusinessDebtDSCRFormulaService
}