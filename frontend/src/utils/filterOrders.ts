import { OrderItem } from "../types"

export const filterOrders = (orders: OrderItem[]) => {
  return orders.filter((order) => order.status === "Confirmed")
}
