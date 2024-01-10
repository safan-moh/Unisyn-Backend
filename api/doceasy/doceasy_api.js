const fetchCurrentAssets = (profileID) => {
    const url = `${process.env.DOCEASY_BASE_URL}/search_entities?user_id=${profileID}&doc_type=balance_sheet&entity=total_current_assets_period_1`;
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Data not found for the given profileID');
            }
        })
        .then((data) => {
            if (!data || !data[0] || !data[0].metadata) {
                throw new Error('Data structure is not as expected');
            }

            const values = data[0].metadata.map((entry) => {
                const value = entry.total_current_assets_period_1[0];
                return typeof value === 'number' ? value : 0;
            });
            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return {
                total_current_assets_period_1: sum
            };
        })
        .catch((error) => {
            throw error;
        });
}

const fetchIntangibleAssets = (profileID) => {
    const url = `${process.env.DOCEASY_BASE_URL}/search_entities?user_id=${profileID}&doc_type=balance_sheet&entity=intangible_assets_period_1`;
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Data not found for the given profileID');
            }
        })
        .then((data) => {
            if (!data || !data[0] || !data[0].metadata) {
                throw new Error('Data structure is not as expected');
            }
            const validEntries = data[0].metadata.filter(entry => Array.isArray(entry.intangible_assets_period_1));
            const values = validEntries.map((entry) => entry.intangible_assets_period_1).flat();
            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return {
                total_intangible_assets_period_1: sum
            };
        })
        .catch((error) => {
            throw error;
        });
}

const fetchTotalAssets = (profileID) => {
    const url = `${process.env.DOCEASY_BASE_URL}/search_entities?user_id=${profileID}&doc_type=balance_sheet&entity=total_assets_period_1`;
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Data not found for the given profileID');
            }
        })
        .then((data) => {
            if (!data || !data[0] || !data[0].metadata) {
                throw new Error('Data structure is not as expected');
            }

            const values = data[0].metadata.map((entry) => {
                const value = entry.total_assets_period_1[0];
                return typeof value === 'number' ? value : 0;
            });
            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return {
                total_assets_period_1: sum
            };
        })
        .catch((error) => {
            throw error;
        });
    
}
const fetchTotalLiabilities = (profileID) => {
    const url = `${process.env.DOCEASY_BASE_URL}/search_entities?user_id=${profileID}&doc_type=balance_sheet&entity=total_liabilities_period_1`;

    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Data not found for the given profileID');
            }
        })
        .then((data) => {
            if (!data || !data[0] || !data[0].metadata) {
                throw new Error('Data structure is not as expected');
            }

            const values = data[0].metadata.map((entry) => {
                const value = Array.isArray(entry.total_liabilities_period_1) ? entry.total_liabilities_period_1[0] : null;
                return typeof value === 'number' ? value : 0;
            });

            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return {
                total_liabilities_period_1: sum
            };
        })
        .catch((error) => {
            throw error;
        });
};
const fetchCurrentLiabilities = (profileID) => {
    const url = `${process.env.DOCEASY_BASE_URL}/search_entities?user_id=${profileID}&doc_type=balance_sheet&entity=total_current_liabilities_period_1`;
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Data not found for the given profileID');
            }
        })
        .then((data) => {
            if (!data || !data[0] || !data[0].metadata) {
                throw new Error('Data structure is not as expected');
            }

            const values = data[0].metadata.map((entry) => {
                const value = entry.total_current_liabilities_period_1[0];
                return typeof value === 'number' ? value : 0;
            });
            const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return {
                total_current_liabilities_period_1: sum
            };
        })
        .catch((error) => {
            throw error;
        });
}

module.exports = {
    fetchCurrentAssets,
    fetchCurrentLiabilities,
    fetchIntangibleAssets,
    fetchTotalAssets,
    fetchTotalLiabilities
}
