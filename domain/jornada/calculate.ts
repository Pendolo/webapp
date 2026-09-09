import type { DailyHoursInput, DailyHoursResult } from "@/domain/jornada/types";

function clampNonNegative(value: number): number {
  return Math.max(0, value);
}

export function calculateDailyHours(input: DailyHoursInput): DailyHoursResult {
  const span = clampNonNegative(input.clockOutMinutes - input.clockInMinutes);

  let intervalMinutes = 0;
  let intervalSource: DailyHoursResult["intervalSource"] = "none";

  if (input.schedule.intervalMode === "manual" && input.intervalMinutes) {
    intervalMinutes = Math.min(span, input.intervalMinutes);
    intervalSource = "manual";
  } else if (input.schedule.intervalMode === "automatic_fixed") {
    intervalMinutes = Math.min(span, input.schedule.intervalMinutes);
    intervalSource = span > 0 ? "automatic" : "none";
  }

  const workedMinutes = clampNonNegative(span - intervalMinutes);

  return {
    workedMinutes,
    plannedMinutes: input.schedule.plannedMinutes,
    balanceMinutes: workedMinutes - input.schedule.plannedMinutes,
    intervalMinutes,
    intervalSource,
  };
}
