const formatRatio = (ratio) => {
    if (ratio === null) {
        return null;
    }

    const parts = ratio.toString().split('.');
    const wholeNumberPart = parts[0];
    const decimalPart = parts[1] || '0';

    return `${wholeNumberPart}:${decimalPart}`;
}

module.exports = formatRatio