const objectConverter = (arrayData) => {
    const resultObject = {};
    arrayData.forEach((datapointObj) => {
        const datapointName = Object.keys(datapointObj)[0];
        const valuesArray = datapointObj[datapointName][0].values;

        if (valuesArray && valuesArray.length > 0) {
            const value = valuesArray[0].value[0];
            resultObject[datapointName] = value;
        }
    });
    return resultObject;

}

module.exports = objectConverter