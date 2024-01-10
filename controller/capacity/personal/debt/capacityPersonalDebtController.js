const getCapacityPersonalDebtService = require("../../../../service/capacity/personal/debt/capacityPersonalDebtService");

/**
 * Retrieves the capacity personal debt by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} Returns a promise that resolves to nothing.
 */
const getCapacityPersonalDebtById = async (req,res) => {
    try {
        console.log("controller>>>>>>>>>>>>>>>>>>.");
        const data = await getCapacityPersonalDebtService.getCapacityPersonalDebtById(req.params.profileID);
        console.log(data);
        if(data.data.length > 0){
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
 * Retrieves more personal details by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the response object.
 */
const getMorePersonalDetailsById = async (req,res) => {
    try {
        const data = await getCapacityPersonalDebtService.getMoreDetailsPersonalById(req.params.profileID);
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
    getCapacityPersonalDebtById,
    getMorePersonalDetailsById
}