export type PunchType = "clock_in" | "break_start" | "break_end" | "clock_out";

export type TimePunch = {
  id: string;
  organizationId: string;
  employeeId: string;
  occurredAt: Date;
  type: PunchType;
  source: "web" | "pwa";
};
