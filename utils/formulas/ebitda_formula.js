const ebitda_formula = (ordinaryIncome, depreciationExpenses, amortizationExpenses) => {
    return ordinaryIncome + depreciationExpenses + amortizationExpenses;
}

module.exports = ebitda_formula;