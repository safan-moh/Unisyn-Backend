const capacityDebtToIncomeFormulaService = require("../../../../service/capacity/personal/debt/capacityDebtToIncomeFormulaService");
/**
 * Retrieves the department-to-income ratio formula by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A Promise that resolves when the operation is complete.
 */
const getDebtToIncomeRatioFormulaById = async (req,res) => {
    try {
        const data = await capacityDebtToIncomeFormulaService.getDebtToIncomeRatioFormulaById(req.params.profileID);
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
    getDebtToIncomeRatioFormulaById
}