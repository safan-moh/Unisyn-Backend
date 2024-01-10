const cashflowFormulaService = require("../../../../service/capacity/business/cashflow/capacityBusinessCashflowFormulaService");
/**
 * Retrieves the cash flow formula by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves with the retrieved cash flow formula or an error message.
 */
const getCashFlowFormulaById = async (req, res) => {
    try {
        const data = await cashflowFormulaService.getCashFlowFormulaById(req.params.profileID);
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
    getCashFlowFormulaById
}