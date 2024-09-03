import { toDollars } from "./toDollars"

describe("toDollar", () => {
  it("should format a positive number correctly", () => {
    expect(toDollars(1234.56)).toBe("$1,234.56")
  })

  it("should format a negative number correctly", () => {
    expect(toDollars(-1234.56)).toBe("-$1,234.56")
  })

  it("should format zero correctly", () => {
    expect(toDollars(0)).toBe("$0.00")
  })

  it("should format a large number correctly", () => {
    expect(toDollars(9876543210.99)).toBe("$9,876,543,210.99")
  })

  it("should format a small number correctly", () => {
    expect(toDollars(0.123)).toBe("$0.12") // Rounded to two decimal places
  })

  it("should format a number with no cents correctly", () => {
    expect(toDollars(1000)).toBe("$1,000.00")
  })
})
