const {capitalPersonalFinancialSummary} = require("../../../capitalData");

const getFinancialSummaryById = async (profileID) => {
    try {
        const filteredData =  capitalPersonalFinancialSummary.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Finance Summary details cannot be provided at this time."
            };
        }
    } catch (error) {
        return error;
    }

}

module.exports = {
    getFinancialSummaryById
}