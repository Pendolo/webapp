export type MonthlyClosingStatus = "open" | "closed" | "reopened";

export type MonthlyClosing = {
  id: string;
  organizationId: string;
  referenceMonth: string;
  status: MonthlyClosingStatus;
};
