const { capacityBusinessDebt, moreBusinessDetails } = require('../../../../data');
const {dscr_data} = require('../../../../dscr_data');
const Evaluator = require('../../../../utils/evaluator');
const {retriever} = require('../../../../utils/retriever');
const ebitda_formula = require('../../../../utils/formulas/ebitda_formula');
const dscr_formula = require('../../../../utils/formulas/dscr_formula');
const objectConverter = require('../../../../utils/objectConverter');
/**
 * Retrieves the capacity business debt data based on the provided profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve the debt data for.
 * @return {Promise<Array<Object>>|Object} - Returns an array of filtered debt data if found, or an object with a "message" property if no debt data is found.
 */
const getCapacityBusinessDebtById = async (profileID) => {
    try {
        const filteredData =  capacityBusinessDebt.filter((data) => data.profileID === profileID);
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
/**
 * Retrieves more details from the 'moreDetails' array based on the provided profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve more details for.
 * @return {Array | Object} - An array of filtered data if found, otherwise an object with a message indicating that debt details cannot be provided at this time.
 */
const getMoreDetailsBusinessById = async (profileID) => {
    try {
        const filteredData =  moreBusinessDetails.filter((data) => data.profileID === profileID);
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
    getCapacityBusinessDebtById,
    getMoreDetailsBusinessById
}