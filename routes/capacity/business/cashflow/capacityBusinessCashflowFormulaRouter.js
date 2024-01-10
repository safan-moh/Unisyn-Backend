const router = require("express").Router();
const cashflowFormulaController = require("../../../../controller/capacity/business/cashflow/capacityBusinessCashflowFormulaController");
router.get("/:profileID", cashflowFormulaController.getCashFlowFormulaById);

module.exports = router;  