import { describe, expect, it } from "vitest";
import { calculateDailyHours } from "@/domain/jornada/calculate";

describe("calculateDailyHours", () => {
  it("applies a fixed automatic lunch interval", () => {
    const result = calculateDailyHours({
      clockInMinutes: 8 * 60 + 3,
      clockOutMinutes: 17 * 60 + 11,
      schedule: {
        plannedMinutes: 8 * 60,
        intervalMode: "automatic_fixed",
        intervalMinutes: 60,
      },
    });

    expect(result.intervalSource).toBe("automatic");
    expect(result.intervalMinutes).toBe(60);
    expect(result.workedMinutes).toBe(8 * 60 + 8);
    expect(result.balanceMinutes).toBe(8);
  });

  it("does not deduct more interval than the worked span", () => {
    const result = calculateDailyHours({
      clockInMinutes: 8 * 60,
      clockOutMinutes: 8 * 60 + 40,
      schedule: {
        plannedMinutes: 8 * 60,
        intervalMode: "automatic_fixed",
        intervalMinutes: 60,
      },
    });

    expect(result.workedMinutes).toBe(0);
    expect(result.intervalMinutes).toBe(40);
  });
});
