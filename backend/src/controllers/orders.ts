import jsonData from "../../orders.json"
import { Request, Response } from "express"
import { orderSchema } from "./orderSchema"

let orders = jsonData.orders

type Orders = typeof orders
type Order = Orders[0]

export const get = (_: Request, res: Response) => {
  return res.send(orders)
}

export const create = (req: Request, res: Response) => {
  const { sellerName, revenue, status } = req.body

  const { success, error } = orderSchema.safeParse(req.body)

  // Bad request
  if (!success) {
    res.status(400)
    res.json({ error })
  }

  const newOrder: Order = {
    orderId: orders.length + 1,
    orderDate: new Date().toISOString(),
    sellerName,
    revenue,
    status,
  }

  orders.push(newOrder)

  return res.json(newOrder)
}

export const remove = (req: Request, res: Response) => {
  const { orderId } = req.params

  if (!orderId) return res.status(400).json({ error: "No orderId provided" })

  orders = orders.filter((order) => order.orderId.toString() !== orderId)

  return res.send(200)
}
