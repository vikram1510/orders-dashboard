import { OrderItem, SellerItem } from "../types"

type SellerMap = {
  [key: string]: SellerItem
}

export const aggregateOrders = (orders: OrderItem[]): SellerItem[] => {
  const sellerMap = orders.reduce<SellerMap>((sellerMap, order) => {
    const { sellerName, revenue } = order
    if (sellerName in sellerMap) {
      sellerMap[sellerName].totalRevenue += revenue
    } else {
      sellerMap[sellerName] = { totalRevenue: revenue, sellerName }
    }
    return sellerMap
  }, {})

  return Object.values(sellerMap)
}
