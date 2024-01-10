const {fetchIntangibleAssets, fetchTotalAssets,fetchTotalLiabilities} = require("../../../api/doceasy/doceasy_api");
const tangibleNetWorthFormula = require("../../../utils/formulas/tangible_net_worth_formula");
const getTangibleNetWorthById = async (profileID) => {
    try {
        const intangibleAssets = await fetchIntangibleAssets(profileID);
        const totalAssets = await fetchTotalAssets(profileID);
        const totalLiabilities = await fetchTotalLiabilities(profileID);
        const tangibleNetWorth = tangibleNetWorthFormula(totalAssets.total_assets_period_1, totalLiabilities.total_liabilities_period_1, intangibleAssets.total_intangible_assets_period_1);
        if(totalAssets.total_assets_period_1 && totalLiabilities.total_liabilities_period_1 && intangibleAssets.total_intangible_assets_period_1 >= 0) {
            return {
                tangible_net_worth_period_1: tangibleNetWorth
            };
        } else {
            return {
                message: "Tangible net worth details cannot be provided at this time."
            };
        }
    } catch (error) {
        return {
            message: `Error: ${error.message}`
        };
    }

}

module.exports = {
    getTangibleNetWorthById
}