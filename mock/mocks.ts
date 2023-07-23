
const {pdf} = require("./mockFiles/mockInvoicePdf.ts");

const mocks = {
    BusinessEntity: () => {
        return {
            beId: () => 2334,
            name: () => "Company Long Name ABC 123 LLC",
        };
    },
    BrokerDataTotalCommissions: () => {
        return {
            commissionCount: 4823,
        }
    },
    BrokerDashboard: () => {
        return {
            id:"ASDASd",
            name:"Test Dash",
            widgets: [
                {
                    dataConfig: {
                        id: "commissionCount",
                        category: "Commission Count",
                        title: "Commission Count",
                        chartType: "NUMERIC_DISPLAY"
                    },
                    id: 1,
                    colStart: 1,
                    colSpan: 3,
                    rowStart: 1,
                    rowSpan: 2,
                },
                {
                    dataConfig: {
                        id: "commissionCount",
                        category: "Commission Count",
                        title: "Commission Count",
                        chartType: "NUMERIC_DISPLAY"
                    },
                    id: "asdd",
                    colStart: 4,
                    colSpan: 1,
                    rowStart: 1,
                    rowSpan: 1,
                }
            ]
        }
    },
    Broker: () => {
        return {
            id: () => "32j3" + (Math.random() * 100).toFixed(0),
            name: () => "Broker A",
        };
    },
    Agent: () => {
        return {
            fullName: () => "Michael Scott",
            firstName: () => "Michael",
            lastName: () => "Scott",
            email: () => "mscott@broker.com",
            phoneNumber: () => "718-207-5562",
            secuUserId: () => null,
            created: () => "2022-10-11 12:23",
            agentCode: () => "MICHSCOT24",
            isActive: () => true,
        };
    },
    ReleaseTrigger: () => {
        return {
            name: () => "On Contract Approval",
            value: () => "ON_CONTRACT_APPROVAL",
        };
    },
    PrepayTranch: () => {
        return {
            prepayPercentage: () => 0.1,
            prepayMin: () => 100,
            prepayMax: () => 500,
            prepayTrigger: () => "ON_CONTRACT_APPROVAL"
        };
    },
    CommissionPlan: () => {
        return {
            id: () => "32j3",
            planCode: () => "Plan 100",
            Name: () => "Plan Name 100",
            serviceType: () => "EL",
            startDate: () => "2022-10-01",
            endDate: () => "2025-10-01",
            marketRestrictionISO: () => null,
            marketRestrictionState: () => null,
            marketRestrictionLDC: () => null,
            marketRestrictionCustomerSegment: () => null,
            marketRestrictionLMIOnly: () => false,
            commissionBase: () => "PER_MWH_FLOWED",
            commissionRate: () => (Math.random() > 0 ? 1.5 : null),
            residualTrigger: () => "ON_INVOICE_PAYMENT_FULL",
            status: () => "Active",
            created: () => new Date().toString(),
            createdBy: () => "Michael Scott",
        };
    },
    BeType: () => {
        return {
            beId: 1239,
            name: "Business Entity",
        };
    },
    ProviderBroker: () => {
        return {};
    },
    ProviderBrokerConfig: () => {
        return {
            isProviderBrokerConfigValid: () => false
        };
    },
    BrokerCommissionPayment: (q) => {

        return {
            id: "J23823K",
            guid: "asd344fj4-342f4nndsfg",
            commissionToPay: 100,
            prepayAppliedAmt: -23.50,
            paymentAmount: 76.50,
            commissionBalanceAfterPay: 0,
            prepayBalanceAfterPay: 0,
            statementCandidateId: "s4i24rnf34-2323478r32fj",
            statementId: "jsgf843433hf43",
            statementGuid: "s4i24rnf34-2323478r32fj",
            isStatementPosted: true,
            isStatementPaid: true,
        }
    },
    DateTime: () => "2022-12-10 12:23:39",
    BrokerCommission: (q) => {
        return {
            id: "J23823K",
            guid: "a67047c3-800c-4f04-8a4a-200da86f6f1a",
            commissionAmt: (s) => {
                return 634.50;
            },
            paymentTotalPendingStatement: () => 0,
            paymentTotalPendingPayout: () => 0,
            paymentTotalPaidOut: () => 100,
            flowPeriodStart: () => "2022-10-11",
            flowPeriodEnd: () => "2022-11-08",
            commissionCalcMeta: () => {
                return {
                    "rate": 0.002,
                    "rateUnit": "$/kwh",
                    "volume": 200000,
                    "volumeUnit": "kwh",
                    total: 400,
                };
                // return {
                //   rate: 2918.33,
                //   rateUnit: "Total_Estimated_Commission",
                //   volume: 0.05,
                //   volumeUnit: "Prepay_Percent",
                //   total: 634.5,
                // };
            },
            review: () => {
                return {
                    isReviewNeeded: true,
                    isReviewed: false,
                    // reviewedBy:
                    // reviewedDate: "2022-11-02 12:12",
                };
            },
            payment: () => {
                return {
                    isPaid: true,
                    isPaidDate: "2022-11-08 12:12",
                    paymentTransactionId: "d3n238wdfj4",
                };
            },
            statement: () => {
                return {
                    statementBatchId: "wfr4wf4s",
                    statementId: "2k32k2dk3",
                    statementDate: "2022-11-09 12:12",
                };
            },
            release: () => {
                return {
                    trigger: "ON_INVOICE_FULL_PAYMENT"
                }
            },
            releaseTrigger: () => "ON_INVOICE_FULL_PAYMENT",
            created: () => "2022-10-12 14:23",
            eventLedger: () => [
                {
                    name: "Registered",
                    date: "2022-10-12 14:23",
                    meta: {
                        commissionCalcMeta: {
                            rate: 1.5,
                            rateUnit: "$/MWh",
                            volume: 423,
                            volumeUnit: "MWH",
                            total: 634.5,
                        },
                    },
                },
                {
                    name: "Released",
                    date: "2022-10-23 11:44",
                    meta: {
                        releaseTrigger: "ON_INVOICE_PAID",
                        releaseMeta: {
                            invoiceIdentifier: "Mc2399",
                        },
                    },
                },
                {
                    name: "Review Needed",
                    date: "2022-10-24 12:23",
                    meta: {},
                },
                {
                    name: "Reviewed",
                    date: "2022-10-24 16:19",
                    meta: {
                        reviewDate: "2022-10-24 16:19",
                        reviewedBy: "Michael Scott",
                    },
                },
                {
                    name: "Added to Statement Candidate",
                    date: "2022-10-25 16:19",
                    meta: {
                        statementBatchId: "234832d3j",
                    },
                },
                {
                    name: "Statement Published",
                    date: "2022-11-01 12:09",
                    meta: {
                        statementId: "j323dwj44",
                    },
                },
                {
                    name: "Marked Paid",
                    date: "2022-11-03 09:12",
                    meta: {
                        paymentTransactionId: "99299128",
                    },
                },
            ],
        };
    },
    BrokerConfirm: (q) => {
        return {
            id: "MKA8323",
            totalCommission: (s) => {
                return 123.23;
            },

            ldcName: (s) => {
                return "AECO";
            },
            serviceType: (s) => {
                return "EL";
            },
            accountIdentifier: (s) => {
                return "23492388832990";
            },
            serviceContractId: (s) => {
                return "MC83473";
            },
            serviceContractStart: (s) => {
                return new Date().toDateString();
            },
            serviceContractEnd: (s) => {
                return new Date().toDateString();
            },
            totalCommissionsGenerated: (s) => {
                return 2923.28
            },
        };
    },
    CommissionStatement: () => {
        return {
            id: "J23823K",
            guid: "a67047c3-800c-4f04-8a4a-200da86f6f1a",
            statementType: () => "RESIDUAL",
            status: () => "PENDING_APPROVAL",
            statusDate: () => new Date().toDateString(),
            created: () => new Date().toDateString(),
            commissionAmt: () => 19283.34,
            payAmt: () => 1200.12,
            commissionsPendingReleaseTotal: () => 9382.39,
            commissionsPendingReviewTotal: () => 501.29,
            commissionPeriodStart: () => "2022-09-01",
            commissionPeriodEnd: () => "2022-10-01",
            commissionCount: () => 291,
        };
    },
    CommissionPayment: () => {
        return {
            id: "MASJ823",
            guid: "JYW2348-800c-4f04-8a4a-200da86f6f1a",
            commissionAmt: () => 120.00,
            commissionToPay: () => 100.00,
            prepayApplied: () => 30.0,
            amtToPay: () => 100 - 30,
            commissionBalance: () => 20,
            prepayBalance: () => 0,
            paymentStatus: () => "Pending Statement",
            created: () => new Date().toDateString(),
        };
    },

    ProviderConfig: () => {
        return {
            statementDeliveryEmailAddresses: () => [
                "email@email.com",
                "email2@email.com",
            ],
        };
    },
};

exports.mocks = mocks;
