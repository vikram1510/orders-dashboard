import { aggregateOrders } from "../utils/aggregateOrders"
import { calculateTotalRevenue } from "../utils/calculateTotalRevenue"
import { filterOrders } from "../utils/filterOrders"
import { sortByRevenue } from "../utils/sortByRevenue"
import { toDollars } from "../utils/toDollars"
import { useFetchOrders } from "./useFetchOrders"

export const useDashboard = () => {
  const { orders, loading, error, refetch } = useFetchOrders()

  const filteredOrders = orders ? filterOrders(orders) : null

  const totalRevenue = filteredOrders
    ? toDollars(calculateTotalRevenue(filteredOrders))
    : null

  const sellerList = filteredOrders
    ? sortByRevenue(aggregateOrders(filteredOrders))
    : null

  return {
    loading,
    error,
    refetch,
    totalRevenue,
    sellerList,
  }
}
