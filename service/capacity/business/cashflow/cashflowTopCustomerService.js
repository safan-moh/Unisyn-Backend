const {top_5_customers} = require('../../../../data');

/**
 * Retrieves the top customers by their profile ID.
 *
 * @param {number} profileID - The ID of the profile to filter the customers by.
 * @return {Array|Object} An array of the top customers filtered by profile ID, or an object with a message if no customers are found.
 */
const getTopCustomersById = async (profileID) => {
    try {
        const filteredData =  top_5_customers.filter((data) => data.profileID === profileID);
        if (filteredData.length > 0) {
            return filteredData;
        } else {
            return {
                message: "Top Customer details cannot be provided at this time."
            };
        }

    } catch (error) {
        return error;
    }

}

module.exports = {
    getTopCustomersById
}