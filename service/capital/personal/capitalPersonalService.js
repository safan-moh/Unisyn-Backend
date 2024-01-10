const {capitalPersonal} = require("../../../capitalData");
const testData = require("../../../testData");
const getCapitalPersonalById = async (profileID) => {
    try {
        const filteredData =  capitalPersonal.filter((data) => data.profileId === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Capital details cannot be provided at this time."
            };
        }
    } catch (error) {
        return error;
    }

}

module.exports = {
    getCapitalPersonalById
}