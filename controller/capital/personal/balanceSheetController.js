const balanceSheetService = require("../../../service/capital/personal/BalanceSheetService");

const getBalanceSheetById = async (req, res) => {
    try {
        const data = await balanceSheetService.getBalanceSheetById(req.params.profileID);
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
    getBalanceSheetById
}