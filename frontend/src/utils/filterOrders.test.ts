import { OrderItem } from "../types"
import { filterOrders } from "./filterOrders"

describe("filterOrders", () => {
  it('should filter and return only orders with status "Confirmed"', () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "Confirmed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "Canceled",
        sellerName: "Seller B",
        revenue: 200,
      },
      {
        orderId: 3,
        orderDate: "2023-09-03",
        status: "Pending",
        sellerName: "Seller A",
        revenue: 150,
      },
      {
        orderId: 4,
        orderDate: "2023-09-04",
        status: "Confirmed",
        sellerName: "Seller C",
        revenue: 300,
      },
    ]

    const expectedOutput: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "Confirmed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 4,
        orderDate: "2023-09-04",
        status: "Confirmed",
        sellerName: "Seller C",
        revenue: 300,
      },
    ]

    expect(filterOrders(orders)).toEqual(expectedOutput)
  })

  it('should return an empty list if no orders are "Confirmed"', () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "Canceled",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "Pending",
        sellerName: "Seller B",
        revenue: 200,
      },
    ]

    const expectedOutput: OrderItem[] = []

    expect(filterOrders(orders)).toEqual(expectedOutput)
  })

  it('should return the same list if all orders are "Confirmed"', () => {
    const orders: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "Confirmed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "Confirmed",
        sellerName: "Seller B",
        revenue: 200,
      },
    ]

    const expectedOutput: OrderItem[] = [
      {
        orderId: 1,
        orderDate: "2023-09-01",
        status: "Confirmed",
        sellerName: "Seller A",
        revenue: 100,
      },
      {
        orderId: 2,
        orderDate: "2023-09-02",
        status: "Confirmed",
        sellerName: "Seller B",
        revenue: 200,
      },
    ]

    expect(filterOrders(orders)).toEqual(expectedOutput)
  })

  it("should handle an empty list", () => {
    const orders: OrderItem[] = []

    const expectedOutput: OrderItem[] = []

    expect(filterOrders(orders)).toEqual(expectedOutput)
  })
})
