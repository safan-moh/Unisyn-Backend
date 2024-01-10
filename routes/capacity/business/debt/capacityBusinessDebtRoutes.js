const router = require('express').Router();
const capacityBusinessDebtController = require("../../../../controller/capacity/business/debt/capacityBusinessDebtController");

router.get("/:profileID",capacityBusinessDebtController.getCapacityBusinessDebtById);
router.get("/currentDebt/:profileID",capacityBusinessDebtController.getMoreDetailsById);

module.exports = router;