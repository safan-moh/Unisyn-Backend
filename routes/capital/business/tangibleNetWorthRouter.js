const tangibleNetworthController = require("../../../controller/capital/business/tangibleNetWorthController");
const router = require("express").Router();
router.get("/:profileID", tangibleNetworthController.getTangibleNetWorthById);


module.exports = router