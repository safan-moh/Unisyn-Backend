const dscr_data = [
    {
        id: 1,
        datapoint: "net_ordinary_income",
        value: [
            {
                source : "doceasy",
                url: "https://run.mocky.io/v3/d993bef2-242a-4f6b-bf80-d89ffa5a4daa",
                score: 5,
                status: "active",

            },
            {
                source : "data_axle",
                url: "https://run.mocky.io/v3/d0791173-0f91-4456-b139-2e8addeea400",
                score: 3,
                status: "active",

            }
        ],
        type: "capacityBusinessDebt"
    },
    {
        id: 2,
        datapoint: "depreciation_expenses",
        value: [
            {
                source : "doceasy",
                url: "https://run.mocky.io/v3/e90cc1b2-1b43-4593-9483-85f6199031f0",
                score: 3,
                status: "active",

            },
            {
                source : "data_axle",
                url: "https://run.mocky.io/v3/7a7af421-333c-401d-adfb-eac5ae69f61f",
                score: 5,
                status: "active",

            }
        ],
        type: "capacityBusinessDebt"
    },
    {
        id: 3,
        datapoint: "amortization_expenses",
        value: [
            {
                source : "doceasy",
                url : "https://run.mocky.io/v3/43e69485-a2e4-4955-99ff-c08c551a6bea",
                score: 3,
                status: "active",

            }
        ],
        type: "capacityBusinessDebt"
    },
    {
        id: 3,
        datapoint: "debt_service",
        value: [
            {
                source : "doceasy",
                url : "https://run.mocky.io/v3/8cc70e72-513f-4d86-bb24-a6a3916dbeb5",
                score: 3,
                status: "active",

            }
        ],
        type: "capacityBusinessDebt"
    },

]

module.exports = {
    dscr_data
}