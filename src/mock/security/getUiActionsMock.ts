export default (type) => {
  if (type === "NO_ACCESS") {
    return [];
  }
  if (type === "READ_ONLY") {
    return [
      {
        actionId: "CDGProjectOwnerView",
        category: "CDG",
      },
      {
        actionId: "CDGProjectView",
        category: "CDG",
      },
      {
        actionId: "CDGRulesView",
        category: "CDG",
      },
      {
        actionId: "CDGImportHUView",
        category: "CDG",
      },
      {
        actionId: "CDGAccountServiceHistoryView",
        category: "CDG",
      },
      {
        actionId: "CDGLdcAccountCreditHistoryView",
        category: "CDG",
      },
      {
        actionId: "CDGReplaceContractDocument",
        category: "CDG",
      },
      {
        actionId: "CDGAllocationView",
        category: "CDG",
      },
      {
        actionId: "CDGImportLDCFileView",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowImportSubscriber",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowHistoricalUsage",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowAssignToProject",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowApproveContract",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowReqPayMeth",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowModifyAllocation",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowImportLdcFile",
        category: "CDG",
      },
      {
        actionId: "CDGInsights",
        category: "CDG",
      },
      {
        actionId: "CDGEntities",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflows",
        category: "CDG",
      },
      {
        actionId: "CDGConfig",
        category: "CDG",
      },
      {
        actionId: "CDGInsightChurn",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowInvoicing",
        category: "CDG",
      },
      {
        actionId: "CDGWorkflowSubmitAllocation",
        category: "CDG",
      },
    ];
  }

  return [
    {
      actionId: "BRKConfirmView",
      category: "BRK",
    },
    {
      actionId: "BRKBrokerView",
      category: "BRK",
    },
    {
      actionId: "BRKCommissionsView",
      category: "BRK",
    },
    {
      actionId: "BRKCommissionPlanView",
      category: "BRK",
    },
    {
      actionId: "BRKCommissionPaymentView",
      category: "BRK",
    },
    {
      actionId: "BRKCommissionStatementView",
      category: "BRK",
    },
  ];
};
