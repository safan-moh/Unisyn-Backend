const viewBalanceSheetController = require("../../../controller/capital/business/viewBalanceSheetController");
const router = require("express").Router();
router.get("/:profileID", viewBalanceSheetController.viewBalanceSheetById);

module.exports = router;