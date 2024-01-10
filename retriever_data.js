const retrieverData = [
    {
        id: 1,
        datapoint: "current_assets_total",
        value: [
            {
                source : "doceasy",
                url: "https://us-east1-molten-tendril-401013.cloudfunctions.net/data_retrieval?user_id=3nt6028h98cng&doc_type=Profit Loss",
                score: 3,
                status: "active",

            }
        ],
        type: "viewBalanceSheetSummary"
    },
    {
        id: 2,
        datapoint: "current_assets_other",
        value: [
            {
                source : "doceasy",
                url: "https://us-east1-molten-tendril-401013.cloudfunctions.net/data_retrieval?user_id=3nt6028h98cng&doc_type=Profit Loss",
                score: 3,
                status: "active",

            }
        ],
        type: "viewBalanceSheetSummary"
    },
    {
        id: 3,
        datapoint: "period_1_cogs_total",
        value: [
            {
                source : "doceasy",
                url : "https://us-east1-molten-tendril-401013.cloudfunctions.net/data_retrieval?user_id=3nt6028h98cng&doc_type=Profit Loss",
                score: 3,
                status: "active",

            },
            {
                source : "data_axle",
                url: "https://run.mocky.io/v3/779ae47f-d300-4923-a554-a38f8b651a11",
                score: 2,
                status: "active",

            }
        ],
        type: "viewBalanceSheetSummary"
    },

]

module.exports = {
    retrieverData
}