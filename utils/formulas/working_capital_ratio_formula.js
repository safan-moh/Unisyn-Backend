const formatRatio = require("../formatRatio");
const working_capital_ratio_formula = (currentAssets, currentLiabilities) => {
    if (typeof currentAssets !== 'number' || typeof currentLiabilities !== 'number' || currentLiabilities === 0) {
        console.log("Invalid input. Please provide valid numbers for current assets and current liabilities.");
        return null;
    }

    const workingCapitalRatio = currentAssets / currentLiabilities;
    return formatRatio(workingCapitalRatio);
    
}

module.exports = working_capital_ratio_formula