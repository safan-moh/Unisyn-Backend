require('dotenv').config();
const createServer = require("./utils/createServer");
const dbConfig = require("./utils/dbConfig");
const serverless = require("serverless-http");

const app = createServer();
// dbConfig.initializeAppFunction();
// dbConfig.uploadData();
// dbConfig.retrieveData().then((data) => {
//     console.log(data);
// });
//Middlewares
const apiRecordMiddleware = require("./middlewares/apiRecord");
const evaluationMiddleware = require("./middlewares/evaluationMiddleware");
// app.use(apiRecordMiddleware);


// Capacity Routes
const capacityBusinessDebtRoutes = require("./routes/capacity/business/debt/capacityBusinessDebtRoutes");
const capacityPersonalDebtRoutes = require("./routes/capacity/personal/debt/capacityPersonalDebtRoutes");
const capacityBusinessCashflowRoutes = require("./routes/capacity/business/cashflow/capacityBusinessCashflowRoutes");
const capacityPersonalCashflowRoutes = require("./routes/capacity/personal/cashflow/capacityPersonalCashflowRoutes");
const capacityBusinessDebtDSCRFormulaRoutes = require("./routes/capacity/business/debt/capacityBusinessDebtDSCRFormulaRoutes");
const capacityBusinessDebtToIncomeFormulaRoutes = require("./routes/capacity/personal/debt/capacityDebtToIncomeFormulaRoutes");
const fullDebtScheduleRoutes = require("./routes/capacity/personal/debt/getFullDebtScheduleRoutes");
const capacityBusinessCashflowProfitLossRouter = require("./routes/capacity/business/cashflow/capacityBusinessCashflowProfitLossRouter");
const cashflowTopCustomerRouter = require("./routes/capacity/business/cashflow/cashflowTopCustomerRouter");
const cashflowFormulaRouter = require("./routes/capacity/business/cashflow/capacityBusinessCashflowFormulaRouter");

app.use("/api/v1/capacityBusinessDebt",capacityBusinessDebtRoutes);
app.use("/api/v1/capacityPersonalDebt",capacityPersonalDebtRoutes);
app.use("/api/v1/capacityBusinessCashflow",capacityBusinessCashflowRoutes);
app.use("/api/v1/capacityPersonalCashflow",capacityPersonalCashflowRoutes);
app.use("/api/v1/capacityBusinessDebt/DSCR-formula",capacityBusinessDebtDSCRFormulaRoutes);
app.use("/api/v1/capacityBusinessDebt/debt-to-income-formula",capacityBusinessDebtToIncomeFormulaRoutes);
app.use("/api/v1/capacityBusinessDebt/fullDebtSchedule",fullDebtScheduleRoutes);
app.use("/api/v1/capacityBusinessCashflow/profit-loss-statement",capacityBusinessCashflowProfitLossRouter);
app.use("/api/v1/capacityBusinessCashflow/top-customers",cashflowTopCustomerRouter);
app.use("/api/v1/capacityBusinessCashflow/formula",cashflowFormulaRouter);

// Capital Routes
const capitalPersonalRouter = require("./routes/capital/personal/capitalPersonalRouter");
const financialSummaryRouter = require("./routes/capital/personal/financialSummaryRouter");
const balanceSheetRouter = require("./routes/capital/personal/balanceSheetRouter");
const financialStatementRouter = require("./routes/capital/personal/financialStatementRouter");

app.use("/api/v1/capitalPersonal",capitalPersonalRouter);
app.use("/api/v1/capitalPersonal/getFinancialSummary",financialSummaryRouter);
app.use("/api/v1/capitalPersonal/getBalanceSheet",balanceSheetRouter);
app.use("/api/v1/capitalPersonal/getFinancialStatement",financialStatementRouter);

// Capital Business
const capitalBusinessRouter = require("./routes/capital/business/capitalBusinessRouter");
const tangibleNetWorthRouter = require("./routes/capital/business/tangibleNetWorthRouter");
const capitalbalanceSheetRouter = require("./routes/capital/business/balanceSheetRouter");
const viewBalanceSheetRouter = require("./routes/capital/business/viewBlanceSheetRouter");
app.use("/api/v1/capitalBusiness",capitalBusinessRouter);
app.use("/api/v1/capitalBusiness/tangibleNetWorth",tangibleNetWorthRouter);
app.use("/api/v1/capitalBusiness/getBalanceSheetSummary",capitalbalanceSheetRouter);
app.use("/api/v1/capitalBusiness/viewBalanceSheetSummary",viewBalanceSheetRouter);

const PORT = process.env.PORT || 8081;
// development Environment
// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });

module.exports = app;

// Production
module.exports.handler = serverless(app);
