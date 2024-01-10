const capitalBusinessController = require("../../../controller/capital/business/capitalBusinessController");
const router = require("express").Router();
router.get("/:profileID", capitalBusinessController.getCapitalBusinessById);

module.exports = router;