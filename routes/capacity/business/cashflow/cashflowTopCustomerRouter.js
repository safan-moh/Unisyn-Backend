const router = require("express").Router();
const topCustomerController = require("../../../../controller/capacity/business/cashflow/cashflowTopCustomerController"); 

router.get("/:profileID", topCustomerController.getTopCustomersById);

module.exports = router;