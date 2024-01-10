const capitalPersonalController = require("../../../controller/capital/personal/capitalPersonalController");
const router = require("express").Router();
router.get("/:profileID", capitalPersonalController.getCapitalPersonalById);

module.exports = router;