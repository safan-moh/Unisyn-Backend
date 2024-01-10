const {capitalBusiness} = require("../../../capitalData");
const {fetchCurrentAssets, fetchCurrentLiabilities} = require("../../../api/doceasy/doceasy_api");
const equityFormula = require("../../../utils/formulas/equity_formula");
const working_capital_ratio_formula = require("../../../utils/formulas/working_capital_ratio_formula");
const getCapitalBusinessById = async (profileID) => {
    try {
        const currentAssets = await fetchCurrentAssets(profileID);
        const currentLiabilities = await fetchCurrentLiabilities(profileID);
        const equity = equityFormula(currentAssets.total_current_assets_period_1, currentLiabilities.total_current_liabilities_period_1);
        const workingCapitalRatio = working_capital_ratio_formula(currentAssets.total_current_assets_period_1, currentLiabilities.total_current_liabilities_period_1);
        if(currentAssets.total_current_assets_period_1 && currentLiabilities.total_current_liabilities_period_1 >= 0) {
            return {
                total_current_assets_period_1: currentAssets.total_current_assets_period_1,
                total_current_liabilities_period_1: currentLiabilities.total_current_liabilities_period_1,
                equity: equity,
                working_capital_ratio: workingCapitalRatio
            };
        } else {
            return {
                message: "Capital details cannot be provided at this time."
            };
        }
    } catch (error) {
        return {
            message: `Error: ${error.message}`
        };
    }

}

module.exports = {
    getCapitalBusinessById
}