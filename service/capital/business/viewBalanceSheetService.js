const {viewBalanceSheet} = require("../../../capitalData");
const {retrieverData} = require("../../../retriever_data");
const {retriever} = require("../../../utils/retriever");
const Evaluator = require("../../../utils/evaluator");
const viewBalanceSheetById = async (profileID) => {
    try {
        const filteredData = viewBalanceSheet.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData; 
        } else {
            return {
                message: "Balance sheet summary details cannot be provided at this time."
            };
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

module.exports = {
    viewBalanceSheetById
}