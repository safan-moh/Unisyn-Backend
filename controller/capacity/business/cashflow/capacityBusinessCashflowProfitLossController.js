const cashflowProfitLossService = require('../../../../service/capacity/business/cashflow/capacityBusinessCashflowProfitLossService');
/**
 * Retrieves the profit and loss statement by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves with the profit and loss statement data.
 */
const getProfitLossStatementById = async (req, res) => {
    try {
        
        const data = await cashflowProfitLossService.getProfitandLossStatementById(req.params.profileID);
       
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
    getProfitLossStatementById
}