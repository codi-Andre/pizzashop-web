import { http, HttpResponse } from "msw"

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period"

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-revenue-in-period", () => {
  return HttpResponse.json([
    { date: "01/01/2024", revenue: 2000 },
    { date: "02/01/2024", revenue: 800 },
    { date: "03/01/2024", revenue: 8000 },
    { date: "04/01/2024", revenue: 540 },
    { date: "05/01/2024", revenue: 400 },
    { date: "06/01/2024", revenue: 700 },
    { date: "07/01/2024", revenue: 1000 },
  ])
})
