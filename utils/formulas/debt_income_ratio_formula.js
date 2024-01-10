const debtToIncomeRatioFormula = (totalSchedulePayment, netIncome) => {
    return (totalSchedulePayment * 12) / netIncome;
}

module.exports = debtToIncomeRatioFormula;