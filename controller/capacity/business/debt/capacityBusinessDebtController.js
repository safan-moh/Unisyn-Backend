const getCapacityBusinessDebtService = require("../../../../service/capacity/business/debt/capacityBusinessDebtService");
/**
 * Retrieves the capacity business debt by ID.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {Promise} A promise that resolves to the result of the function.
 */
const getCapacityBusinessDebtById = async (req,res) => {
    try {
        const data = await getCapacityBusinessDebtService.getCapacityBusinessDebtById(req.params.profileID);
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
 * Retrieves additional details by ID.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {Promise<void>} Returns a promise that resolves when the function completes successfully.
 */
const getMoreDetailsById = async (req,res) => {
    try {
        const data = await getCapacityBusinessDebtService.getMoreDetailsBusinessById(req.params.profileID);
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
    getCapacityBusinessDebtById,
    getMoreDetailsById
}