const {balanceSheet} = require("../../../capitalData");

const getBalanceSheetById = async (profileID) => {
    try {
        const filteredData =  balanceSheet.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Balance Sheet details cannot be provided at this time."
            };
        }
    } catch (error) {
        return error;
    }

}

module.exports = {
    getBalanceSheetById
}