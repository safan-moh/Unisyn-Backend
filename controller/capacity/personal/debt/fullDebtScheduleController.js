const fullDebtScheduleService = require('../../../../service/capacity/personal/debt/FullDebtScheduleService');

/**
 * Retrieves the full debt schedule by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves with the retrieved data or rejects with an error.
 */
const getFullDebtScheduleById = async (req, res) => {
    try {
        const data = await fullDebtScheduleService.getFullDebtScheduleById(req.params.profileID);
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
    getFullDebtScheduleById
}