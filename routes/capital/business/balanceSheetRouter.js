const balanceSheetController = require("../../../controller/capital/business/balanceSheetController");
const router = require("express").Router();
router.get("/:profileID", balanceSheetController.getBalanceSummaryById);

module.exports = router;