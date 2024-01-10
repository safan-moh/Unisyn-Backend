const financialSummaryController = require("../../../controller/capital/personal/financialSummaryController");
const router = require("express").Router();
router.get("/:profileID", financialSummaryController.getFinancialSummaryById);

module.exports = router;