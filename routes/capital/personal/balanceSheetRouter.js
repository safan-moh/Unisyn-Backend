const balanceSheetController =  require("../../../controller/capital/personal/balanceSheetController");
const router = require("express").Router();

router.get("/:profileID", balanceSheetController.getBalanceSheetById);

module.exports = router