export type TimeBankEntryType = "credit" | "debit";

export type TimeBankLedgerEntry = {
  id: string;
  organizationId: string;
  employeeId: string;
  referenceDate: string;
  minutes: number;
  type: TimeBankEntryType;
};
