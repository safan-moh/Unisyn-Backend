const capacityBusinessDebtDSCRFormulaService = require("../../../../service/capacity/business/debt/capacityBusinessDebtDSCRFormulaService");

/**
 * Retrieves the capacity business debt DSCR formula based on the given profile ID.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {Promise<void>} The function does not return a value.
 */
const getCapacityBusinessDebtDSCRFormula = async (req, res) => {
    try {
        const data = await capacityBusinessDebtDSCRFormulaService.getCapacityBusinessDebtDSCRFormulaService(req.params.profileID);
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
};

module.exports = {
    getCapacityBusinessDebtDSCRFormula
}
    
