import { Items, calculateTotalRevenue } from "./calculateTotalRevenue"

describe("calculateRevenue", () => {
  test("should return 0 for empty array", () => {
    const items: Items = []
    expect(calculateTotalRevenue(items)).toBe(0)
  })

  test("should calculate total revenue from orders", () => {
    const items = [{ revenue: 54.34 }, { revenue: 0.5 }, { revenue: 12 }]
    expect(calculateTotalRevenue(items)).toBe(66.84)
  })
})
