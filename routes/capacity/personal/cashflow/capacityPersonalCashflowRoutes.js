const router = require('express').Router();
const cashflowPersonalController = require("../../../../controller/capacity/personal/cashflow/capacityPersonalCashflowController");

router.get("/:profileID",cashflowPersonalController.getCashflowPersonalById);
router.get("/profit-loss-summary/:profileID",cashflowPersonalController.getProfitLossPersonalById);

module.exports = router;