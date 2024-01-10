const {full_debt_schedule} = require('../../../../data');

/**
 * Retrieves the full debt schedule by a given profile ID.
 *
 * @param {number} profileID - The ID of the profile to retrieve the debt schedule for.
 * @return {array|object} - An array of filtered data if found, or an object with a message if not found.
 */
const getFullDebtScheduleById = (profileID) => {
    try {
        const filteredData =  full_debt_schedule.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Full Debt Schedule cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getFullDebtScheduleById
}