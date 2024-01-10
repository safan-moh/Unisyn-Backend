const {capitalBusinessBalanceSheetSummary} = require("../../../capitalData");

const getBalanceSummaryById = async (profileID) => {
    try {
        const filteredData =  capitalBusinessBalanceSheetSummary.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Balance sheet summary details cannot be provided at this time."
            };
        }
    } catch (error) {
        return error;
    }

}

module.exports = {
    getBalanceSummaryById
}