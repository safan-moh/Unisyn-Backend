const {financialStatement} = require("../../../capitalData");

const getFinancialStatementById = async (profileID) => {
    try {
        const filteredData =  financialStatement.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Finance Statement details cannot be provided at this time."
            };
        }
    } catch (error) {
        return error;
    }

}

module.exports = {
    getFinancialStatementById
}