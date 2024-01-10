const {profitAndLossStatements} = require('../../../../data');
/**
 * Retrieves the profit and loss statements by the given profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve the statements for.
 * @returns {Array|{message: string}} - An array of profit and loss statements filtered by the profile ID,
 *                                       or an object with a message if no statements are found.
 */
const getProfitandLossStatementById = async (profileID) => {
    try {
        const filteredData =  profitAndLossStatements.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Profit and Loss Statements details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getProfitandLossStatementById
}