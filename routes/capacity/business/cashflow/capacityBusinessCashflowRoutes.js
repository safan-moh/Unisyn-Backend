const router = require('express').Router();
const cashflowBusinessController = require("../../../../controller/capacity/business/cashflow/capacityBusinessCashflowController");

router.get("/:profileID",cashflowBusinessController.getCashflowBusinessById);
router.get("/profit-loss-summary/:profileID",cashflowBusinessController.getProfitLossBusinessById);

module.exports = router;