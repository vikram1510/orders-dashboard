import { SellerItem } from "../types"

export const sortByRevenue = (sellers: SellerItem[]) => {
  return sellers.sort((a, b) => b.totalRevenue - a.totalRevenue)
}
