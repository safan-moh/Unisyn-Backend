const topCustomerService = require('../../../../service/capacity/business/cashflow/cashflowTopCustomerService');

/**
 * Retrieves the top customers by their profile ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} Returns a promise that resolves to the result of the retrieval.
 */
const getTopCustomersById = async (req,res) => {
    try {
        const data = await topCustomerService.getTopCustomersById(req.params.profileID);
        if(data.length > 0){
            res.status(200).send({
                status : "success",
                data : data
            })
        } else {
            res.status(404).send({
                status : "error",
                message : data.message
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getTopCustomersById
}