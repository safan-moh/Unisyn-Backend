const router = require('express').Router();
const capacityDebtToIncomeFormulaController = require("../../../../controller/capacity/personal/debt/capacityDebtToIncomeFormulaController");

router.get("/:profileID", capacityDebtToIncomeFormulaController.getDebtToIncomeRatioFormulaById);

module.exports = router;