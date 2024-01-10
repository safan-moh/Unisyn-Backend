const router = require('express').Router();
const capacityBusinessDebtDSCRFormulaController = require("../../../../controller/capacity/business/debt/capacityBusinessDebtDSCRFormulaController.js");

router.get("/:profileID",capacityBusinessDebtDSCRFormulaController.getCapacityBusinessDebtDSCRFormula);

module.exports = router;