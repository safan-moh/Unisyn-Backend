const router = require('express').Router();
const capacityPersonalDebtController = require("../../../../controller/capacity/personal/debt/capacityPersonalDebtController");

router.get("/:profileID",capacityPersonalDebtController.getCapacityPersonalDebtById);
router.get("/currentDebt/:profileID",capacityPersonalDebtController.getMorePersonalDetailsById);

module.exports = router;