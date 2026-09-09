export type IntervalMode = "manual" | "automatic_fixed";

export type WorkScheduleConfig = {
  plannedMinutes: number;
  intervalMode: IntervalMode;
  intervalMinutes: number;
};

export type DailyHoursInput = {
  clockInMinutes: number;
  clockOutMinutes: number;
  intervalMinutes?: number;
  schedule: WorkScheduleConfig;
};

export type DailyHoursResult = {
  workedMinutes: number;
  plannedMinutes: number;
  balanceMinutes: number;
  intervalMinutes: number;
  intervalSource: "manual" | "automatic" | "none";
};
