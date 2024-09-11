import { SellerItem } from "../types"
import { sortByRevenue } from "./sortByRevenue"

describe("sortByRevenue", () => {
  it("should sort sellers by totalRevenue in descending order", () => {
    const sellers: SellerItem[] = [
      { sellerName: "Seller B", totalRevenue: 300 },
      { sellerName: "Seller A", totalRevenue: 250 },
      { sellerName: "Seller C", totalRevenue: 100 },
    ]

    const expectedOutput = [
      { sellerName: "Seller B", totalRevenue: 300 },
      { sellerName: "Seller A", totalRevenue: 250 },
      { sellerName: "Seller C", totalRevenue: 100 },
    ]

    expect(sortByRevenue(sellers)).toEqual(expectedOutput)
  })
})
