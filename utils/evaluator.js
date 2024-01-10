const Evaluator = (data) => {
  const sortedData = JSON.parse(JSON.stringify(data));

  for (const datapointObj of sortedData) {
      for (const key in datapointObj) {
          const datapoint = datapointObj[key][0];
          
          if (datapoint.values.length > 1) {
              const highestScoreValue = datapoint.values.reduce((maxValue, currentValue) => {
                  return currentValue.score > maxValue.score ? currentValue : maxValue;
              });

              datapoint.values = [highestScoreValue];
          }
      }
  }

  return sortedData;
};
module.exports = Evaluator