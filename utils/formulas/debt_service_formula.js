const deptServiceMonthlyFormula = (interestExpenses, principalPayments, paymentTotal) => {
    return (interestExpenses + principalPayments) / paymentTotal;
}

module.exports = deptServiceMonthlyFormula;