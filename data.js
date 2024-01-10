//capacity business debt
const capacityBusinessDebt = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        debt_service_coverage_ratio : {
            ytd : "1.56:1",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        debt_service_coverage_ratio : {
            ytd : "1.56:1",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    },{
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
        debt_service_coverage_ratio : {
            ytd : "1.56:1",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    }
]

const moreBusinessDetails = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Month",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
    LoanType : "Real Estate",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Daily",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 By weekly",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
}]

const capacityPersonalDebt = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
   
]

const morePersonalDetails = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Month",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
    LoanType : "Real Estate",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Daily",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 By weekly",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
}]

//Cashflow - Business
const businessCashflow = [
    {
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    gross_revenue : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],     
    },
    net_income : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],
        
    },
    risk : {
        customerConcentration : 5.6,
    },
    liquidity : {
        cash_ratio : "1:1",
        current_ratio : "1:1",
        quick_ratio : "1:1",
    }
},
{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
    gross_revenue : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],
        
    },
    net_income : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],
        
    },
    risk : {
        customerConcentration : 5.6,
    },
    liquidity : {
        cash_ratio : "1:1",
        current_ratio : "1:1",
        quick_ratio : "1:1",
    }
},
{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
    gross_revenue : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],
    },
    net_income : {
        trend : 37,
        ytd : 70000,
        history : [{
            year : 2023,
            revenue : 270000
        },{
            year : 2022,
            revenue : 170000
        },{
            year : 2021,
            revenue : -30000
        }],
        
    },
    risk : {
        customerConcentration : 5.6,
    },
    liquidity : {
        cash_ratio : "1:1",
        current_ratio : "1:1",
        quick_ratio : "1:1",
    }
},


]


// profit and loss summary for business
const profitAndLossBusiness = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        gross_revenue : {
            ytd :[
                {
                    year : 2024,
                    revenue : 200000
                },
                {
                    year : 2023,
                    revenue : 400000
                },
                {
                    year : 20233,
                    revenue : 300000
                },
                {
                    year : 2021,
                    revenue : 100000
                }
            ]
        },
        COGS : {
            ytd :[
                {
                    year : 2024,
                    amount : 120000
                },
                {
                    year : 2023,
                    amount : 120000
                },
                {
                    year : 20233,
                    amount : 120000
                },
                {
                    year : 2021,
                    amount : 120000
                }
            ]
        },
        gross_income : {
            ytd : [
                {
                    year : 2024,
                    income : 80000
                },
                {
                    year : 2023,
                    income : 280000
                },
                {
                    year : 2022,
                    income : 180000
                },
                {
                    year : 2021,
                    income : -20000
                },
            ]
        },
        total_operating_expenses : {
            ytd : [
                {
                    year : 2024,
                    expense : 20000
                },
                {
                    year : 2023,
                    expense : 20000
                },
                {
                    year : 2022,
                    expense : 20000
                },
                {
                    year : 2021,
                    expense : 20000
                }
            ]
        },
        net_ordinary_income : {
            ytd : [
                {
                    year : 2024,
                    income : 60000
                },
                {
                    year : 2023,
                    income : 260000
                },
                {
                    year : 2022,
                    income : 160000
                },
                {
                    year : 2021,
                    income : -40000
                },
            ]
        },
        total_other_income : {
            ytd : [
                {
                    year : 2024,
                    income : 20000
                },
                {
                    year : 2023,
                    income : 20000
                },
                {
                    year : 2022,
                    income : 20000
                },
                {
                    year : 2021,
                    income : 20000
                }
            ]
        
        },
        total_other_expenses : {
            ytd : [
                {
                    year : 2024,
                    expense : 10000
                },
                {
                    year : 2023,
                    expense : 10000
                },
                {
                    year : 2022,
                    expense : 10000
                },
                {
                    year : 2021,
                    expense : 10000
                }
            ]
        },
        net_other_income : {
            ytd : [
                {
                    year : 2024,
                    income : 10000
                },
                {
                    year : 2023,
                    income : 10000
                },
                {
                    year : 2022,
                    income : 10000
                },
                {
                    year : 2021,
                    income : 10000
                }
            ]
        },
        net_income : {
            ytd : [
                {
                    year : 2024,
                    income : 70000
                },
                {
                    year : 2023,
                    income : 270000
                },
                {
                    year : 2022,
                    income : 170000
                },
                {
                    year : 2021,
                    income : -30000
                }
            ]
        }
        

    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        gross_revenue : {
            ytd :[
                {
                    year : 2024,
                    revenue : 200000
                },
                {
                    year : 2023,
                    revenue : 400000
                },
                {
                    year : 20233,
                    revenue : 300000
                },
                {
                    year : 2021,
                    revenue : 100000
                }
            ]
        },
        COGS : {
            ytd :[
                {
                    year : 2024,
                    amount : 120000
                },
                {
                    year : 2023,
                    amount : 120000
                },
                {
                    year : 20233,
                    amount : 120000
                },
                {
                    year : 2021,
                    amount : 120000
                }
            ]
        },
        gross_income : {
            ytd : [
                {
                    year : 2024,
                    income : 80000
                },
                {
                    year : 2023,
                    income : 280000
                },
                {
                    year : 2022,
                    income : 180000
                },
                {
                    year : 2021,
                    income : -20000
                },
            ]
        },
        total_operating_expenses : {
            ytd : [
                {
                    year : 2024,
                    expense : 20000
                },
                {
                    year : 2023,
                    expense : 20000
                },
                {
                    year : 2022,
                    expense : 20000
                },
                {
                    year : 2021,
                    expense : 20000
                }
            ]
        },
        net_ordinary_income : {
            ytd : [
                {
                    year : 2024,
                    income : 60000
                },
                {
                    year : 2023,
                    income : 260000
                },
                {
                    year : 2022,
                    income : 160000
                },
                {
                    year : 2021,
                    income : -40000
                },
            ]
        },
        total_other_income : {
            ytd : [
                {
                    year : 2024,
                    income : 20000
                },
                {
                    year : 2023,
                    income : 20000
                },
                {
                    year : 2022,
                    income : 20000
                },
                {
                    year : 2021,
                    income : 20000
                }
            ]
        
        },
        total_other_expenses : {
            ytd : [
                {
                    year : 2024,
                    expense : 10000
                },
                {
                    year : 2023,
                    expense : 10000
                },
                {
                    year : 2022,
                    expense : 10000
                },
                {
                    year : 2021,
                    expense : 10000
                }
            ]
        },
        net_other_income : {
            ytd : [
                {
                    year : 2024,
                    income : 10000
                },
                {
                    year : 2023,
                    income : 10000
                },
                {
                    year : 2022,
                    income : 10000
                },
                {
                    year : 2021,
                    income : 10000
                }
            ]
        },
        net_income : {
            ytd : [
                {
                    year : 2024,
                    income : 70000
                },
                {
                    year : 2023,
                    income : 270000
                },
                {
                    year : 2022,
                    income : 170000
                },
                {
                    year : 2021,
                    income : -30000
                }
            ]
        }
        

    },
    
]
// cashflow - personal
const cashflowPersonal = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        gross_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
        },
        net_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
        },
        liquidity : {
            cash_ratio : "1:1",
            current_ratio : "1:1",
            quick_ratio : "1:1",
        }
        
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        gross_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
            
        },
        net_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
        },
        liquidity : {
            cash_ratio : "1:1",
            current_ratio : "1:1",
            quick_ratio : "1:1",
        }
        
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
        gross_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
            
            
        },
        net_income : {
            trend : 37,
            ytd : 70000,
            history : [{
                year : 2023,
                revenue : 270000
            },{
                year : 2022,
                revenue : 170000
            },{
                year : 2021,
                revenue : -30000
            }],
        },
        liquidity : {
            cash_ratio : "1:1",
            current_ratio : "1:1",
            quick_ratio : "1:1",
        }
    }
]

// personal profit and loss
const profitAndLossPersonal = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        gross_income : {
            ytd : [
                {
                    year : 2024,
                    income : 80000
                },
                {
                    year : 2023,
                    income : 280000
                },
                {
                    year : 2022,
                    income : 180000
                },
                {
                    year : 2021,
                    income : -20000
                },

            ]
        },
        annual_expenses : {
            ytd : [
                {
                    year : 2024,
                    expense : 20000
                },
                {
                    year : 2023,
                    expense : 20000
                },
                {
                    year : 2022,
                    expense : 20000
                },
                {
                    year : 2021,
                    expense : 20000
                }
            ]
        },
        net_income : {
            ytd : [
                {
                    year : 2024,
                    income : 70000
                },
                {
                    year : 2023,
                    income : 270000
                },
                {
                    year : 2022,
                    income : 120000
                },
                {
                    year : 2021,
                    income : -30000
                }
            ]
        },
        },
        {
            profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
            gross_income : {
                ytd : [
                    {
                        year : 2024,
                        income : 80000
                    },
                    {
                        year : 2023,
                        income : 280000
                    },
                    {
                        year : 2022,
                        income : 180000
                    },
                    {
                        year : 2021,
                        income : -20000
                    },
    
                ]
            },
            annual_expenses : {
                ytd : [
                    {
                        year : 2024,
                        expense : 20000
                    },
                    {
                        year : 2023,
                        expense : 20000
                    },
                    {
                        year : 2022,
                        expense : 20000
                    },
                    {
                        year : 2021,
                        expense : 20000
                    }
                ]
            },
            net_income : {
                ytd : [
                    {
                        year : 2024,
                        income : 70000
                    },
                    {
                        year : 2023,
                        income : 270000
                    },
                    {
                        year : 2022,
                        income : 120000
                    },
                    {
                        year : 2021,
                        income : -30000
                    }
                ]
            },
            },
            {
                profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
                gross_income : {
                    ytd : [
                        {
                            year : 2024,
                            income : 80000
                        },
                        {
                            year : 2023,
                            income : 280000
                        },
                        {
                            year : 2022,
                            income : 180000
                        },
                        {
                            year : 2021,
                            income : -20000
                        },
        
                    ]
                },
                annual_expenses : {
                    ytd : [
                        {
                            year : 2024,
                            expense : 20000
                        },
                        {
                            year : 2023,
                            expense : 20000
                        },
                        {
                            year : 2022,
                            expense : 20000
                        },
                        {
                            year : 2021,
                            expense : 20000
                        }
                    ]
                },
                net_income : {
                    ytd : [
                        {
                            year : 2024,
                            income : 70000
                        },
                        {
                            year : 2023,
                            income : 270000
                        },
                        {
                            year : 2022,
                            income : 120000
                        },
                        {
                            year : 2021,
                            income : -30000
                        }
                    ]
                },
                }
        
   
]

//formulas
const debt_service_coverage_ratio_formula = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    debt_service_coverage_ratio : "1.5:1",

}]

const debt_to_income_ratio_formula = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    debt_to_income_ratio : "1.5:1",

}]

const cashflowFormula = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    liquidity : {
        current_ratio : "1:1",
        quick_ratio : "1:1",
        cash_ratio : "1:1",
    }
}]

const full_debt_schedule = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    ytd: {},
    2023: {},
    2022: {},
    2021: {}
}]

const profitAndLossStatements = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    threeYears : {},
    ytd: {},
    2023: {},
    2022: {},
    2021: {}
}]

const top_5_customers = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    name1 : {},
    name2 : {},
    name3 : {},
    name4 : {},
    name5 : {}
}]

module.exports = {
    capacityBusinessDebt,
    moreBusinessDetails,
    capacityPersonalDebt,
    morePersonalDetails,
    businessCashflow,
    profitAndLossBusiness,
    cashflowPersonal,
    profitAndLossPersonal,
    debt_service_coverage_ratio_formula,
    debt_to_income_ratio_formula,
    full_debt_schedule,
    profitAndLossStatements,
    top_5_customers,
    cashflowFormula
};