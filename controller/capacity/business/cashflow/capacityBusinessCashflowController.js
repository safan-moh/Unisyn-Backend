const getCashflowBusinessService = require("../../../../service/capacity/business/cashflow/capacityBusinessCashflowService");

/**
 * Retrieves the cashflow business by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the retrieved cashflow business data or an error message.
 */
const getCashflowBusinessById = async (req,res) => {
    try {
        const data = await getCashflowBusinessService.getCashflowBusinessById(req.params.profileID);
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

/**
 * Retrieves the profit/loss business data by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A Promise that resolves to the profit/loss business data.
 */
const getProfitLossBusinessById = async (req,res) => {
    try {
        const data = await getCashflowBusinessService.getProfitLossBusinessById(req.params.profileID);
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
    getCashflowBusinessById,
    getProfitLossBusinessById
}