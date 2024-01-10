const tangibleNetWorthFormula = (totalAssets, totalLiabilities, intangibleAssets) => {

    if(totalAssets && totalLiabilities && intangibleAssets) {
        return totalAssets - totalLiabilities - intangibleAssets;
    }
    
}

module.exports = tangibleNetWorthFormula