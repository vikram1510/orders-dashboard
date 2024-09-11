import { OrderItem } from "../types"
import { aggregateOrders } from "./aggregateOrders"

describe("aggregateOrders", () => {
  it("should aggregate revenue correctly for multiple sellers", () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "completed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "completed",
        sellerName: "Seller B",
        revenue: 200,
      },
      {
        orderId: 3,
        orderDate: "2023-09-03",
        status: "completed",
        sellerName: "Seller A",
        revenue: 150,
      },
      {
        orderId: 4,
        orderDate: "2023-09-04",
        status: "completed",
        sellerName: "Seller C",
        revenue: 300,
      },
      {
        orderId: 5,
        orderDate: "2023-09-05",
        status: "completed",
        sellerName: "Seller B",
        revenue: 100,
      },
    ]

    const expectedOutput = [
      { sellerName: "Seller A", totalRevenue: 250 },
      { sellerName: "Seller B", totalRevenue: 300 },
      { sellerName: "Seller C", totalRevenue: 300 },
    ]

    expect(aggregateOrders(orders)).toEqual(expectedOutput)
  })

  it("should handle an empty list of orders", () => {
    const orders: OrderItem[] = []

    const expectedOutput: { sellerName: string; totalRevenue: number }[] = []

    expect(aggregateOrders(orders)).toEqual(expectedOutput)
  })

  it("should handle a list with one order", () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "completed",
        sellerName: "Seller A",
        revenue: 100,
      },
    ]

    const expectedOutput = [{ sellerName: "Seller A", totalRevenue: 100 }]

    expect(aggregateOrders(orders)).toEqual(expectedOutput)
  })

  it("should handle negative revenue values", () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "completed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "completed",
        sellerName: "Seller A",
        revenue: -50,
      },
    ]

    const expectedOutput = [{ sellerName: "Seller A", totalRevenue: 50 }]

    expect(aggregateOrders(orders)).toEqual(expectedOutput)
  })

  it("should handle sellers with zero revenue", () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "completed",
        sellerName: "Seller A",
        revenue: 0,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "completed",
        sellerName: "Seller B",
        revenue: 0,
      },
    ]

    const expectedOutput = [
      { sellerName: "Seller A", totalRevenue: 0 },
      { sellerName: "Seller B", totalRevenue: 0 },
    ]

    expect(aggregateOrders(orders)).toEqual(expectedOutput)
  })
})
