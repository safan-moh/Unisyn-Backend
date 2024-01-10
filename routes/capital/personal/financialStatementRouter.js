const financialStatementController = require("../../../controller/capital/personal/financialStatementController");
const router = require("express").Router();
router.get("/:profileID", financialStatementController.getFinancialStatementById);

module.exports = router;