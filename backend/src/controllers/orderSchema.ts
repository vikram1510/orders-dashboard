import { z } from "zod"

export const orderSchema = z.object({
  sellerName: z.string(),
  revenue: z.number(),
  status: z.enum(["Confirmed", "Canceled"]),
})
