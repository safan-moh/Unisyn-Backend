const router = require("express").Router();
const capacityBusinessCashflowProfitLossController = require("../../../../controller/capacity/business/cashflow/capacityBusinessCashflowProfitLossController");

router.get("/:profileID", capacityBusinessCashflowProfitLossController.getProfitLossStatementById);

module.exports = router;