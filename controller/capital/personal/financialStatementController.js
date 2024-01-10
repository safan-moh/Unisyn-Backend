const financialStatementService = require("../../../service/capital/personal/financeStatementService");
const getFinancialStatementById = async (req,res) => {
    try {
        const data = await financialStatementService.getFinancialStatementById(req.params.profileID);
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
    getFinancialStatementById
}