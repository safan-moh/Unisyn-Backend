const capitalPersonal = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
        tangible_net_worth: {
            year_to_date: 100000,
            trend: 15,
            history: [
                {
                    year: 2023,
                    value: 100000
                },
                {
                    year: 2022,
                    value: 90000
                },
                {
                    year: 2021,
                    value: 94736
                },



            ]

        },
        personal_financial_statements : {
            assets : {
                ytd : 100000,
                total_current : 50000,
                total_non_current : 50000
            },
            total_liabilities_and_equity : 100000,
            liabilities : {
                ytd : 150000,
                total_current : 100000,
                total_non_current : 50000
            },
            equity : {
                ytd : 250000,
                total_current : 100000,
                shareholders_draws : 100000,
                other_equity : 50000
            }
        },
        members : [
            {
                name : "Principal member 1",
                share : 30
            },
            {
                name : "Principal member 2",
                share : 60
            },
            {
                name : "Principal member 3",
                share : 10
            }
        ]
    }
]

const capitalPersonalFinancialSummary = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
        current_assets : {
            cash_and_equivalent : 25000,
            other_current_assets : 25000
        },
        non_current_assets : {
            fixed_assets : 5000,
            longTerm_assets : 25000,
            intangible_assets : 20000,
            other_assets : 0
        },
        current_liabilities : {
            accounts_payable : 50000,
            term_debt : 25000,
            revolving_debt : 25000,
            other_current_liabilities : 0
        },
        non_current_liabilities : {
            term_debt : 25000,
            other_non_current_liabilities : 0
        }
    }
]
const balanceSheet = [{
    profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
    ytd : {},
    2023 : {},
    2022 : {},
    2021 : {},
}]
const financialStatement = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
        tax_returns : {
            years : ["2023,2022,2021"],
        },
        bank_statements : {
            ytd : {},
            2023 : {},
            2022 : {},
            2021 : {},
        }

    }
]

const capitalBusiness = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
        working_capital_and_equity :{
            current_assets : 500000,
            current_liabilities : 100000,
            working_capital_ratio : "5:1",
            equity : 400000
        },
        tangible_net_worth: {
            year_to_date: 650000,
            trend: 70,
            history: [
                {
                    year: 2023,
                    value: 100000
                },
                {
                    year: 2022,
                    value: 90000
                },
                {
                    year: 2021,
                    value: 94736
                },



            ]

        },
        balance_sheet_summary : {
            assets : {
                ytd : 100000,
                total_current : 50000,
                total_non_current : 50000
            },
            total_liabilities_and_equity : 100000,
            liabilities : {
                ytd : 150000,
                total_current : 100000,
                total_non_current : 50000
            },
            equity : {
                ytd : 250000,
                total_current : 100000,
                shareholders_draws : 100000,
                other_equity : 50000
            }
        }
    }
]

const capitalBusinessBalanceSheetSummary = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
        current_assets : {
            cash_and_equivalent : 25000,
            other_current_assets : 25000
        },
        non_current_assets : {
            fixed_assets : 5000,
            longTerm_assets : 25000,
            intangible_assets : 20000,
            other_assets : 0
        },
        current_liabilities : {
            accounts_payable : 50000,
            term_debt : 25000,
            revolving_debt : 25000,
            other_current_liabilities : 0
        },
        non_current_liabilities : {
            term_debt : 25000,
            other_non_current_liabilities : 0
        }
    }
]
const viewBalanceSheet = [
    {
        profileId: "2cad7c32-9d76-11ee-8c90-0242ac120002",
     balanceSheets : {
            ytd : {},
            2023 : {},
            2022 : {},
            2021 : {},
        }

    }
]
module.exports = {
    capitalPersonal,
    capitalPersonalFinancialSummary,
    balanceSheet,
    financialStatement,
    capitalBusiness,
    capitalBusinessBalanceSheetSummary,
    viewBalanceSheet
}