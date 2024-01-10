const getCashflowPersonalService = require("../../../../service/capacity/personal/cashflow/capacityPersonalCashflowService");


/**
 * Retrieves a specific cashflow personal by ID.
 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the cashflow personal data or an error message.
 */
const getCashflowPersonalById = async (req,res) => {
    try {
        const data = await getCashflowPersonalService.getCashflowPersonalById(req.params.profileID);
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
 * Retrieves the profit or loss data for a personal profile by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - A promise that resolves with the result of the operation.
 */
const getProfitLossPersonalById = async (req,res) => {
    try {
        const data = await getCashflowPersonalService.getProfitLossPersonalById(req.params.profileID);
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
    getCashflowPersonalById,
    getProfitLossPersonalById
}