export type Items = Array<{ revenue: number }>

export const calculateTotalRevenue = (items: Items) => {
  return items.reduce((sum, item) => sum + item.revenue, 0)
}
