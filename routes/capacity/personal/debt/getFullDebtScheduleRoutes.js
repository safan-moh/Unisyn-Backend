const router = require("express").Router();
const fullDebtScheduleController = require("../../../../controller/capacity/personal/debt/fullDebtScheduleController");
router.get("/:profileID", fullDebtScheduleController.getFullDebtScheduleById);

module.exports = router;