const retriever = async (data) => {
    try {
        const results = await Promise.all(data.value.map(async (sourceData) => {
            try {
                const response = await fetch(sourceData.url);
                if (response.ok) {
                    const dataResponse = await response.json();

                    const metadataValue = dataResponse[0] && dataResponse[0].metadata
                        ? dataResponse[0].metadata[data.datapoint] || 0
                        : 0;

                    return {
                        source: sourceData.source,
                        datapoint: data.datapoint,
                        value: metadataValue,
                        score: sourceData.score, // Include the score in the result
                    };
                } else {
                    throw new Error('Something went wrong with the fetch operation');
                }
            } catch (error) {
                console.error(error);
                return {
                    source: sourceData.source,
                    datapoint: data.datapoint,
                    error: error.message,
                    score: sourceData.score, // Include the score even in case of an error
                };
            }
        }));

        // Group results by datapoint
        const groupedResults = results.reduce((acc, result) => {
            const key = result.datapoint;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push({
                source: result.source,
                value: result.value,
                score: result.score, // Include the score in the grouped result
            });
            return acc;
        }, {});

        // Create the final result object
        const finalResult = {
            [data.datapoint]: Object.entries(groupedResults).map(([datapoint, values]) => ({
                values: values.map(({ source, value, score }) => ({
                    source: source,
                    value: value,
                    score: score, // Include the score in the final result
                })),
            })),
        };

        return finalResult;
    } catch (error) {
        console.error(error);
        return {
            status: "error",
            error: error.message,
        };
    }
};

module.exports = {
    retriever
};
