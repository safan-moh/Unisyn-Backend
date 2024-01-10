const getTangibleNetWorthService = require("../../../service/capital/business/tangibleNetWorthService");

const getTangibleNetWorthById = async (req, res) => {
    try {
        const data = await getTangibleNetWorthService.getTangibleNetWorthById(req.params.profileID);
        if (data.message && data.message.includes("Data not found for the given profileID")) {
            res.status(404).send({
                status: "error",
                message: data.message
            });
        } else if (data) {
            res.status(200).send({
                status: "success",
                data: data
            });
        } else {
            res.status(404).send({
                status: "error",
                message: "Tangible net worth details cannot be provided at this time."
            });
        }
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: `Error: ${error.message}`
        });
    }
}

module.exports = {
    getTangibleNetWorthById
}