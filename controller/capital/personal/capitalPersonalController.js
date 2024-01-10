const capitalPersonalService = require("../../../service/capital/personal/capitalPersonalService");

const getCapitalPersonalById = async (req, res) => {
    try {
        const data = await capitalPersonalService.getCapitalPersonalById(req.params.profileID);
        console.log("controller", data);
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
    getCapitalPersonalById
}